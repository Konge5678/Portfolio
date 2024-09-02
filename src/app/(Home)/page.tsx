import { client } from "@/sanity/lib/client";
import { LandingPage } from "@/types/landing-page.types";
import HomeView from "@/views/home-view";
import { groq } from "next-sanity";

export default async function Home() {
  const data: LandingPage = await client.fetch(groq`*[_id == "landingPage"][0]`);

  console.log(data)

  return (
    <HomeView {...data} />
  )
}