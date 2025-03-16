import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchForm = ({ query, lang }: { query?: string; lang: "en" | "ar" }) => {
  type Translations = {
    en: {
      placeholder: string;
    };
    ar: {
      placeholder: string;
    };
  };

  const translations = {
    en: {
      placeholder: "Search Startups",
    },
    ar: {
      placeholder: "ابحث عن المشاريع الناشئة",
    },
  } as Translations;

  const t = translations[lang];

  return (
    <Form
      action={`/${lang}`}
      scroll={false}
      className={`search-form ${lang === "ar" ? "rtl" : "ltr"}`}
      dir={lang === "ar" ? "rtl" : "ltr"} // Set direction based on language
    >
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder={t?.placeholder}
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <Button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
