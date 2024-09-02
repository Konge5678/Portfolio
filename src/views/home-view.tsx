"use client";

import AboutText from "@/components/AboutText";
import CardLink from "@/components/CardLink";
import BlogCard from "@/components/Cards/BlogCard";
import ExperienceCard from "@/components/Cards/ExperienceCard";
import PersonCard from "@/components/Cards/PersonCard";
import ProjectCard from "@/components/Cards/ProjectCard";
import { LandingPage } from "@/types/landing-page.types";



export default function HomeView(page: LandingPage) {
  return (
    <div className="min-h-screen mx-8 md:mx-20 lg:mx-0 lg:flex lg:justify-around lg:flex-row">
      <div className="lg:sticky lg:top-40 lg:h-max">
        <PersonCard {...page} />
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
            projectLink="https://inmeta.no"
          />
          <ExperienceCard
            title="IT Student /"
            company="Hamar Katedralskole"
            duration="2022 - 2024"
            description="The study in Information Technology at Hamar Katedralskole has given me practical and modern knowledge
             in programming, network administration and web development. The teaching was project-based, with a focus on real case studies
              and collaboration with local companies. I had the opportunity to participate in competitions and activities that strengthened my
               skills and broadened my career in the IT industry."
            tags={[
              { tag: "School", link: "#" },
              { tag: "Learning", link: "#" },
              { tag: "Teamwork", link: "#" },
            ]}
            projectLink="https://www.hamar-katedral.vgs.no/"
          />
          <ExperienceCard
            title="Shop Assistant /"
            company="Biltema Hamar"
            duration="2023 - 2024"
            description="I previously worked as a part-time employee at Biltema Hamar, where I had varius tasks that gave me a lot of experience. I unpacked and 
            organized items, and made sure the store was tidy and inviting. In addition, I stood at the checkout, handled payments, and helped customers with
             questions and product recommendations. I also worked in the parts warehouse and customer service, where I helped customers find the right parts and 
             solved various inquiries. This job gave me good insight into both logistics and customer care, and I appreciated being part of a dynamic team."
            tags={[
              { tag: "Customer Support", link: "#" },
              { tag: "Sales", link: "#" },
              { tag: "Work", link: "#" },
            ]}
            projectLink="https://biltema.no"
          />
          <CardLink title="View full resume" link="/Resume" newTab={true} />
        </div>
        <div id="projects" className="flex flex-col gap-6 mt-10">
                  <ProjectCard
            title="Poke search"
            description="I made the Pokémon Search project to learn API integration. This React app uses the PokéAPI to let users search for Pokémon by name or 
            ID, displaying details like type, abilities, and stats. Built with React, Tailwind, and JavaScript, it offers a simple interface and showcases skills
             in fetching and displaying dynamic data."
            tags={[
              { tag: "React", link: "#" },
              { tag: "Tailwind", link: "#" },
              { tag: "Javascript", link: "#" },
              { tag: "API", link: "#" },
            ]}
            image="https://github.com/Konge5678/Pokemon-Search/raw/main/public/Poke-Search1.png"
            date="2024"
            githubLink="https://github.com/Konge5678/Pokemon-Search"
            projectLink=""
          />

          <ProjectCard
            title="Timer app"
            description="I made the Timer App with Electron because I wanted to try making a desktop application. It lets 
            users set, start, pause, and reset timers with an intuitive interface. Built using React and Electron, it was a 
            hands-on way to explore desktop app development and manage state and time-based events in a dynamic UI."
            tags={[
              { tag: "React", link: "#" },
              { tag: "Electron", link: "#" },
              { tag: "JavaScript", link: "#" },
            ]}
            image="https://www.shareicon.net/download/2017/04/28/885360_clock.svg"
            date="2024"
            githubLink="https://github.com/Konge5678/Timer-App"
            projectLink=""
          />

          <ProjectCard
            title="Innovative Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            tags={[
              { tag: "Vue.js", link: "#" },
              { tag: "Vuetify", link: "#" },
              { tag: "TypeScript", link: "#" },
            ]}
            image="https://via.placeholder.com/150"
            date="2022"
            githubLink="https://github.com/yourusername/innovative-project-2"
            projectLink="https://yourwebsite.com/innovative-project-2"
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
            blogLink="#"
          />
          <BlogCard
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image="https://via.placeholder.com/150"
            date="2024"
            blogLink="#"
          />
          <BlogCard
            title="Blog 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image="https://via.placeholder.com/150"
            blogLink="#"
            date="2024"
          />
          <CardLink title="View all blogs" link="/Blogs" />
        </div>
        <div id="contact" />
      </div>
    </div>
  );
}
