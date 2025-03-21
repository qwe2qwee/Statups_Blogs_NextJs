import { auth } from "@/auth";
import { StartupCardSkeleton } from "@/components/ui/StartupCardSkeleton";
import UserStartups from "@/components/User/UserStartups";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export const experimental_ppr = true;

type Translations = {
  en: {
    yourStartups: string;
    allStartups: string;
    altProfile: string;
  };
  ar: {
    yourStartups: string;
    allStartups: string;
    altProfile: string;
  };
};

const translations: Translations = {
  en: {
    yourStartups: "Your Startups",
    allStartups: "All Startups",
    altProfile: "Profile picture of",
  },
  ar: {
    yourStartups: "مشاريعك",
    allStartups: "جميع المشاريع",
    altProfile: "صورة الملف الشخصي لـ",
  },
};

const page = async ({
  params,
}: {
  params: Promise<{ id: string; lang: "en" | "ar" }>;
}) => {
  const id = (await params)?.id;
  const lang = (await params)?.lang;

  const session = await auth();

  const t = translations[lang];

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

  if (!user) return notFound();

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-24-black uppercase text-center line-clamp-1">
              {user.name}
            </h3>
          </div>

          <img
            src={user.image}
            alt={t.altProfile}
            width={220}
            height={220}
            className="profile_image"
          />
          <p className="text-30-extrabold mt-7 text-center">
            @{user?.username}
          </p>
          <p className="mt-1 text-center text-14-normal">{user?.bio}</p>
        </div>

        <div className="flex-1 flex-col gap-5 lg:-mt-5">
          <p className="text-30-bold">
            {session?.id === id ? t.yourStartups : t.allStartups}
          </p>
          <ul className="card_grid-sm">
            <Suspense fallback={<StartupCardSkeleton />}>
              <UserStartups id={id} lang={lang} />
            </Suspense>{" "}
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
