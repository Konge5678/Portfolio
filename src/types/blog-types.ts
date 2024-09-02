import { SanityDocument } from "next-sanity";

export type Blog = {
  title: string;
  date: string;
  tags?: {name: string, slug: string }[];
  slug: string;
} & SanityDocument;