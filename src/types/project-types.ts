import { SanityDocument } from "next-sanity";

export type Project = {
  title: string;
  startdate: string;
  enddate: string;
  madeAt: string; 
  tags?: {name: string, slug: string }[];
  link: string;
  description: string;
  image: string;
  slug: string;
} & SanityDocument;