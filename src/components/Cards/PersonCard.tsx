"use client";

import React, { useEffect, useState } from "react";
import PersonCardButton from "../Buttons/PersonCardButton";
import SocialMediaIcon from "../SocialMediaIcon";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import roobetLogo from "../../Images/RoobetLogo.svg";

export default function PersonCard() {
  const [activeSection, setActiveSection] = useState("");
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const sections = ["about", "experience", "projects", "blogs", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-6xl text-center py-2 lg:text-lef">
        Kristian Haugsrud
      </h1>
      <h2 className="py-1 text-2xl mt-2 text-center lg:text-left">
        Junior Consultant
      </h2>
      <p className="py-3 text-zinc-400 w-80 hidden lg:block mx-auto lg:mx-0">
        “A dollar won is twice as sweet as a dollar earned.” – Paul Newman
      </p>
      <div className="mt-10 hidden lg:flex lg:flex-col lg:items-left">
        <PersonCardButton
          text="About"
          onClick={() => handleScroll("about")}
          isActive={activeSection === "about"}
        />
        <PersonCardButton
          text="Experience"
          onClick={() => handleScroll("experience")}
          isActive={activeSection === "experience"}
        />
        <PersonCardButton
          text="Projects"
          onClick={() => handleScroll("projects")}
          isActive={activeSection === "projects"}
        />
        <PersonCardButton
          text="Blogs"
          onClick={() => handleScroll("blogs")}
          isActive={activeSection === "blogs"}
        />
        <PersonCardButton
          text="Contact"
          onClick={() => handleScroll("contact")}
          isActive={activeSection === "contact"}
        />
      </div>
      <div className="flex justify-center lg:justify-start space-x-1 mt-20 lg:mb-30 pt-14">
        <SocialMediaIcon
          icon={<FaGithub className="text-white w-8 h-8" />}
          link="https://github.com/Konge5678"
          altText="GitHub"
        />
        <SocialMediaIcon
          icon={<FaLinkedin className="text-white w-8 h-8" />}
          link="https://www.linkedin.com/in/kristian-haugsrud-866b40323/"
          altText="LinkedIn"
        />
        <SocialMediaIcon
          icon={<FaInstagram className="text-white w-8 h-8" />}
          link="https://instagram.com"
          altText="Instagram"
        />
        <SocialMediaIcon
          icon={<img src={roobetLogo.src} alt="Roobet" className="w-8 h-8" />}
          link="https://roobet.com/?ref=konge5678"
          altText="Roobet"
        />
        <SocialMediaIcon
          icon={<FaSpotify className="text-white w-8 h-8" />}
          link="https://open.spotify.com/user/f0bqozbaxqianpt5yh14pnq2y"
          altText="Spotify"
        />
      </div>
    </div>
  );
}
