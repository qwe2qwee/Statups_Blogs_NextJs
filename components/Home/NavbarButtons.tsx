"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Session } from "next-auth";

type Translations = {
  en: {
    create: string;
    login: string;
    logout: string;
    loading: string;
  };
  ar: {
    create: string;
    login: string;
    logout: string;
    loading: string;
  };
};

const translations: Translations = {
  en: {
    create: "Create",
    login: "Login",
    logout: "Logout",
    loading: "Loading...",
  },
  ar: {
    create: "إنشاء",
    login: "تسجيل الدخول",
    logout: "تسجيل الخروج",
    loading: "جاري التحميل...",
  },
};

const NavbarButtons = ({
  session,
  lang = "en",
}: {
  session: Session | null;
  lang: "en" | "ar";
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const t = translations[lang];

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut({ redirect: false });
      router.refresh(); // Refresh the page to update session state
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn("github");
    } finally {
      setLoading(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    router.push(`/${newLang}`);
  };

  return (
    <div className="flex items-center gap-5">
      <Button
        onClick={toggleLanguage}
        variant="secondary"
        aria-label="Toggle language"
      >
        {lang === "en" ? "عربي" : "English"}
      </Button>

      {session?.user ? (
        <>
          <Button asChild variant="ghost">
            <Link href={`/${lang}/startup/create`}>{t.create}</Link>
          </Button>

          <Button
            onClick={handleSignOut}
            variant="destructive"
            disabled={loading}
          >
            {loading ? t.loading : t.logout}
          </Button>

          <Button asChild variant="ghost">
            <Link href={`/${lang}/user/${session.id}`}>
              {session.user.name}
            </Link>
          </Button>
        </>
      ) : (
        <Button onClick={handleSignIn} variant="default" disabled={loading}>
          {loading ? t.loading : t.login}
        </Button>
      )}
    </div>
  );
};

export default NavbarButtons;
