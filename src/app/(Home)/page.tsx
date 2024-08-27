import PersonCard from "../../components/Cards/PersonCard";
import AboutText from "../../components/AboutText";
import ExperienceCard from "../../components/Cards/ExperienceCard";
import CardLink from "../../components/CardLink";
import ProjectCard from "../../components/Cards/ProjectCard";
import BlogCard from "../../components/Cards/BlogCard";

export default function Home() {
  return (
    <div className="min-h-screen mx-8 md:mx-20 lg:mx-0 lg:flex lg:justify-around lg:flex-row">
      <div className="lg:sticky lg:top-40 lg:h-max">
        <PersonCard />
      </div>
      <div className="lg:mt-40">
        <div id="about">
          <AboutText />
        </div>
        <div id="experience" className="flex flex-col gap-6">
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
          <CardLink title="View full resume" link="/Resume" newTab={true} />
        </div>
        <div id="projects" className="flex flex-col gap-6 mt-10">
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
        <div id="blogs" className="flex flex-col gap-6 my-10">
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
        <div id="contact" />
      </div>
    </div>
  );
}
