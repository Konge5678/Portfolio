import { SanityDocument } from "next-sanity";
import type { SanityBlockContent } from "@/types/root.types";


export type Blog = {
  title: string;
  date: string;
  tags?: {name: string, slug: string }[];
  slug: string;
  content: SanityBlockContent;
  image: string;
  author: string;
  
} & SanityDocument;