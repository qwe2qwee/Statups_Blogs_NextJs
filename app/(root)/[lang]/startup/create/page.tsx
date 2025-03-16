import { auth } from "@/auth";
import StartupForm from "@/components/Create/StartupForm";
import { redirect } from "next/navigation";

type Translations = {
  en: {
    heading: string;
  };
  ar: {
    heading: string;
  };
};

const translations: Translations = {
  en: {
    heading: "Submit Your Startup",
  },
  ar: {
    heading: "قدم شركتك الناشئة",
  },
};

const Page = async ({ params }: { params: { lang: "en" | "ar" } }) => {
  const session = await auth();
  const lang = params.lang; // Directly access params without await

  if (!session) redirect(`/${lang}/`);

  const t = translations[lang];

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">{t.heading}</h1>
      </section>
      <StartupForm lang={lang} />
    </>
  );
};

export default Page;
