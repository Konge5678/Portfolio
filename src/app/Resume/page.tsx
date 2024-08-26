"use client";

import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
      <object
        data="/CV.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ display: "block", border: "none" }}>
        <p>
          Your browser does not support PDFs.
          <a href="/CV.pdf" target="_blank">
            Download the PDF
          </a>
          .
        </p>
      </object>
    </div>
  );
}
