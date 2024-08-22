import PersonCard from "../components/PersonCard";
import AboutText from "@/components/AboutText";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-auto lg:sticky lg:top-10 lg:min-w-[600px] lg:h-screen">
        <PersonCard />
      </div>
      <div className="flex-grow lg:pl-10 mt-10">
        <AboutText />
      </div>
    </div>
  );
}