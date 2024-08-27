"use client";

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCopy } from "react-icons/fa";

const Footer = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <footer className="bg-indigo-950 text-white py-8 px-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-yellow-400 text-2xl mb-2" />
            <div className="flex flex-col items-center">
              <p className="text-lg text-zinc-300">kris.haugsrud@gmail.com</p>
              <button
                className="text-indigo-300 hover:text-yellow-300 transition-colors duration-300 mt-2"
                onClick={() => handleCopy("kris.haugsrud@gmail.com", "email")}>
                <FaCopy className="text-xl" />
              </button>
            </div>
            {copied === "email" && (
              <p className="text-green-400 text-sm mt-2">Email copied!</p>
            )}
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-yellow-400 text-2xl mb-2" />
            <p className="text-lg text-zinc-300">2335 Stange</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPhone className="text-yellow-400 text-2xl mb-2" />
            <div className="flex flex-col items-center">
              <p className="text-lg text-zinc-300">+47 941 74 808</p>
              <button
                className="text-indigo-300 hover:text-yellow-300 transition-colors duration-300 mt-2"
                onClick={() => handleCopy("+47 941 74 808", "phone")}>
                <FaCopy className="text-xl" />
              </button>
            </div>
            {copied === "phone" && (
              <p className="text-green-400 text-sm mt-2">
                Phone number copied!
              </p>
            )}
          </div>
        </div>

        <hr className="border-t border-zinc-600 my-8" />

        <div className="text-center">
          <p className="text-lg text-zinc-300">
            &copy; {new Date().getFullYear()} All rights reserved. Kristian
            Haugsrud
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
