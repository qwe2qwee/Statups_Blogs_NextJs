import { type SchemaTypeDefinition } from "sanity";
import { author } from "./Author";
import { startup } from "./StartUp";
import { Playlist } from "./PlayList";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, Playlist],
};
