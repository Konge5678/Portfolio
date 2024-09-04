import { SanityDocument } from "next-sanity";
import type { SanityBlockContent } from "@/types/root.types";

export type Project = {
  title: string;
  startdate: string;
  enddate: string;
  madeAt: string; 
  tags?: {name: string, slug: string }[];
  link: string;
  content: SanityBlockContent;
  image: string;
  slug: string;
} & SanityDocument;