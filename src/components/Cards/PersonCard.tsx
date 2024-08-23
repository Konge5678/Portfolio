"use client";

import PersonCardButton from "../Buttons/PersonCardButton";
import React from "react";
import SocialMediaIcon from "../SocialMediaIcon";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import roobetLogo from "../../Images/RoobetLogo.svg";

export default function PersonCard() {
  return (
    <div className="text-white w-[600px] min-h-screen p-10">
      <h1 className="text-6xl py-2">Kristian Haugsrud</h1>
      <h2 className="py-1 text-2xl mt-2">Junior Consultant</h2>
      <p className="py-3 text-zinc-400 w-80">
        “A dollar won is twice as sweet as a dollar earned.” – Paul Newman
      </p>
      <div className="mt-10">
        <PersonCardButton text="About" onClick={() => {}} />
        <PersonCardButton text="Experience" onClick={() => {}} />
        <PersonCardButton text="Projects" onClick={() => {}} />
        <PersonCardButton text="Blogs" onClick={() => {}} />
        <PersonCardButton text="Contact" onClick={() => {}} />
      </div>
      <div className="flex space-x-1 mt-40 pt-14">
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
