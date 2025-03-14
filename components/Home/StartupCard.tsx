import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author: Author };
export const StartupCard = ({
  post,
  lang,
}: {
  post: StartupTypeCard;
  lang: string;
}) => {
  const {
    _id,
    _createdAt,
    views,
    author,
    description,
    title,
    image,
    category,
  } = post;
  return (
    <li className="startup-card group" key={_id}>
      <div className="flex-between">
        <p className="startup-card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/${lang}/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name} </p>
          </Link>
          <Link
            href={`/${lang}/startup/${_id}`}
            className="startup-card_title mt-2.5"
          >
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/${lang}/user/${author?._id}`}>
          <Image
            src={author?.image}
            height={48}
            width={48}
            alt="user"
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/${lang}/startup/${_id}`} className="startup-card_desc">
        <p className="startup-card_desc">{description}</p>
        <img src={image} className="startup-card_img" alt="" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`${lang}/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/${lang}/startup/${_id}`}>
            {lang === "en" ? "Read More" : "قراءة المزيد"}
          </Link>
        </Button>
      </div>
    </li>
  );
};
