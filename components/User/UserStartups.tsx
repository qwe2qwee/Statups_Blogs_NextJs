import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY_BY_AUTHOR_ID } from "@/sanity/lib/queries";
import React from "react";
import { StartupCard, StartupTypeCard } from "../Home/StartupCard";

const UserStartups = async ({
  id,
  lang,
}: {
  id: string;
  lang: "en" | "ar";
}) => {
  const statups = await client.fetch(STARTUPS_QUERY_BY_AUTHOR_ID, { id });

  return (
    <>
      {statups.length > 0 ? (
        statups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} lang={lang} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};

export default UserStartups;
