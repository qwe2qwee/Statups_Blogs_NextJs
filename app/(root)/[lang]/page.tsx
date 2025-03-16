import SearchForm from "../../../components/Home/SearchForm";
import { StartupCard, StartupTypeCard } from "@/components/Home/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
  params,
}: {
  searchParams: { query?: string };
  params: { lang: "en" | "ar" }; // Changed from Promise-based structure
}) {
  const query = (await searchParams)?.query;
  const paramss = { search: query || null };

  const lang = (await params)?.lang; // Default to Arabic if no lang parameter

  const { data: posts } = await sanityFetch({
    query: STARTUPS_QUERY,
    params: paramss,
  });

  type Translations = {
    en: {
      heading: string;
      subHeading: string;
      allStartups: string;
      noPosts: string;
      results: (query: string) => string;
    };
    ar: {
      heading: string;
      subHeading: string;
      allStartups: string;
      noPosts: string;
      results: (query: string) => string;
    };
  };
  // Translations directly in the component
  const translation: Translations = {
    en: {
      heading: "Pitch your startup,\nconnect with entrepreneurs",
      subHeading:
        "Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.",
      results: (query: string) => `Results for "${query}"`,
      allStartups: "All Startups",
      noPosts: "No posts found.",
    },
    ar: {
      heading: "قدّم مشروعك الناشئ،\nوتواصل مع رواد الأعمال",
      subHeading:
        "قدّم الأفكار، صوّت على العروض، واحصل على الانتباه في المسابقات الافتراضية.",
      results: (query: string) => `نتائج البحث عن "${query}"`,
      allStartups: "جميع المشاريع الناشئة",
      noPosts: "لم يتم العثور على منشورات.",
    },
  };

  const t = translation[lang]; // Changed from translation["en"] to use the lang variable
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          {t.heading.split("\n").map((line: string, index: number) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <p className="sub-heading !max-w-3xl">{t.subHeading}</p>
        <SearchForm query={query} lang={lang} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? t.results(query) : t.allStartups}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} lang={lang} />
            ))
          ) : (
            <p>{t.noPosts}</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
