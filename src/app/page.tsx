import PersonCard from "../components/PersonCard";
import AboutText from "../components/AboutText";
import ExperienceCard from "../components/ExperienceCard";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-auto lg:sticky lg:top-10 lg:min-w-[600px] lg:h-screen">
        <PersonCard />
      </div>
      <div className="flex-grow lg:pl-10 mt-40 ml-20 space-y-6">
        <AboutText />
        <ExperienceCard
          title="Junior Consultant /"
          company="Inmeta"
          duration="2024 - Present"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          tags={[
            { tag: "Consulting", link: "#" },
            { tag: "Development", link: "#" },
            { tag: "Frontend", link: "#" }
          ]}
        />
        <ExperienceCard
          title="IT Student /"
          company="Hamar Katedralskole"
          duration="2022 - 2024"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          tags={[
            { tag: "School", link: "#" },
            { tag: "Learning", link: "#" },
            { tag: "Teamwork", link: "#" }
          ]}
        />
        <ExperienceCard
          title="Shop Assistant /"
          company="Biltema Hamar"
          duration="2023 - 2024"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          tags={[
            { tag: "Customer Support", link: "#" },
            { tag: "Sales", link: "#" },
            { tag: "Work", link: "#" }
          ]}
        />
      </div>
    </div>
  );
}
