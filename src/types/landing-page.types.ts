import { SanityDocument } from "next-sanity";

export type LandingPage = {
    title: string;
} & SanityDocument;