import PersonCard from "../../components/Cards/PersonCard";
import AboutText from "../../components/AboutText";
import ExperienceCard from "../../components/Cards/ExperienceCard";
import CardLink from "../../components/CardLink";
import ProjectCard from "../../components/Cards/ProjectCard";
import BlogCard from "../../components/Cards/BlogCard";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="max-w-screen-sm mx-auto lg:w-auto lg:sticky lg:top-10 lg:min-w-[600px] lg:h-screen lg:ml-40">
        <PersonCard />
      </div>
      <div className="flex-grow lg:pl-10 mt-10 lg:mt-40 mx-6 lg:ml-20 space-y-6">
        <div id="about">
          <AboutText />
        </div>
        <div id="experience" className="space-y-6 mt-10">
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
              { tag: "Frontend", link: "#" },
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
              { tag: "Teamwork", link: "#" },
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
              { tag: "Work", link: "#" },
            ]}
          />
        </div>
        <CardLink title="View full resume" link="/Resume" newTab={true}  />
        <div id="projects" className="space-y-6 mt-10">
          <ProjectCard
            title="Super cool project"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            tags={[
              { tag: "React", link: "#" },
              { tag: "Tailwind", link: "#" },
              { tag: "Typescript", link: "#" },
            ]}
            image="https://via.placeholder.com/150"
            date="2024"
            githubLink={""}
          />
          <ProjectCard
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            tags={[
              { tag: "React", link: "#" },
              { tag: "Tailwind", link: "#" },
              { tag: "Typescript", link: "#" },
            ]}
            image="https://via.placeholder.com/150"
            date="2024"
            githubLink={""}
          />
          <ProjectCard
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            tags={[
              { tag: "React", link: "#" },
              { tag: "Tailwind", link: "#" },
              { tag: "Typescript", link: "#" },
            ]}
            image="https://via.placeholder.com/150"
            date="2024"
            githubLink={""}
          />
          <CardLink title="View all projects" link="/Projects" />
        </div>
        <div id="blogs" className="space-y-6 mt-10">
          <BlogCard
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image="https://via.placeholder.com/150"
            date="2024"
          />
          <BlogCard
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image="https://via.placeholder.com/150"
            date="2024"
          />
          <BlogCard
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image="https://via.placeholder.com/150"
            date="2024"
          />
          <CardLink title="View all blogs" link="/Blogs" />
        </div>
        <div id="contact" className="space-y-6 mb-10"></div>
      </div>
    </div>
  );
}
