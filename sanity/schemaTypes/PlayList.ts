import { defineField, defineType, Preview } from "sanity";

export const Playlist = defineType({
  name: "palylist",
  title: "Playlist",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "select",
      type: "array",
      of: [{ type: "reference", to: [{ type: "startup" }] }],
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
