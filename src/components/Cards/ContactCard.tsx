"use client";  // Add this line at the top

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCopy } from "react-icons/fa";

const ContactCard = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000); // Reset after 2 seconds
  };

  return (
    <div className="text-white w-[600px] p-6 bg-indigo-950 rounded-lg group hover:bg-indigo-900 transition-colors duration-300 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold group-hover:text-yellow-300 transition-colors duration-300">
          Contact Me
        </h1>
        <FaEnvelope className="text-2xl text-indigo-300 group-hover:text-yellow-300 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaPhone className="text-indigo-300 text-xl mr-3" />
            <p className="text-zinc-300 group-hover:text-indigo-200 transition-colors duration-300">
            +47 941 74 808
            </p>
          </div>
          <button
            className="text-indigo-300 hover:text-yellow-300 transition-colors duration-300"
            onClick={() => handleCopy("+47 941 74 808", "phone")}
          >
            <FaCopy className="text-xl" />
          </button>
        </div>
        {copied === "phone" && (
          <p className="text-green-400 text-sm mt-1">Phone number copied!</p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaEnvelope className="text-indigo-300 text-xl mr-3" />
            <p className="text-zinc-300 group-hover:text-indigo-200 transition-colors duration-300">
            kris.haugsrud@gmail.com
            </p>
          </div>
          <button
            className="text-indigo-300 hover:text-yellow-300 transition-colors duration-300"
            onClick={() => handleCopy("kris.haugsrud@gmail.com", "email")}
          >
            <FaCopy className="text-xl" />
          </button>
        </div>
        {copied === "email" && (
          <p className="text-green-400 text-sm mt-1">Email copied!</p>
        )}
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-indigo-300 text-xl mr-3" />
          <p className="text-zinc-300 group-hover:text-indigo-200 transition-colors duration-300">
            2335 Stange
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
