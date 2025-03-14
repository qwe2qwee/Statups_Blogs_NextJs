import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import { writeClient } from "./sanity/lib/write-client";
import { AUTHOR_BY_GOOGLE_ID_QUERY } from "./sanity/lib/queries";
import { client } from "./sanity/lib/client";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code",
    //     },
    //   },
    // }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({
      user: { name, email, image },
      profile: { bio, id, login },
    }) {
      try {
        if (!id || !name || !email) {
          throw new Error("Missing required user fields");
        }

        const existingUser = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GOOGLE_ID_QUERY, {
            id,
          });

        if (!existingUser) {
          await writeClient.create({
            _type: "author",
            id,
            name,
            username: login || "",
            email,
            image: image || "",
            bio: bio || "",
          });
        }
        return true;
      } catch (error) {
        console.error("Error during sign-in process:", error);
        return false;
      }
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GOOGLE_ID_QUERY, {
            id: profile?.id,
          });

        token.id = user?._id;
      }

      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token?.id });
      return session;
    },
  },
});
