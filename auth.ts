import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { AUTHOR_BY_GOOGLE_ID_QUERY } from "./sanity/lib/queries";
import { client } from "./sanity/lib/client";
import { writeClient } from "./sanity/lib/write-client";

// Type augmentation for GitHub profile
declare module "next-auth" {
  interface Profile {
    bio?: string;
    login?: string;
    id?: string | null;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      try {
        if (!profile?.id || !user.name || !user.email) {
          throw new Error("Missing required user fields");
        }

        const existingUser = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GOOGLE_ID_QUERY, { id: profile.id });

        if (!existingUser) {
          await writeClient.create({
            _type: "author",
            id: profile.id,
            name: user.name,
            username: profile.login || "",
            email: user.email,
            image: user.image || "",
            bio: profile.bio || "", // Now safely accessed
          });
        }
        return true;
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }
    },
    // ... rest of the callbacks
  },
});
