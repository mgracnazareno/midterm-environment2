"use client";

import React, { useState } from "react";
import "./main.css";
import { getFirstDynamicReason } from "next/dist/server/app-render/dynamic-rendering";

export default function Main() {
  const user = {
    firstName: "Mary Grace",
    lastName: "Nazareno",
    title: "Full Stack Web Developer",
  };

  const skills = [
    "JavaScript",
    "Java",
    "React",
    "SpringBoot",
    "PHP",
    "MYSQL",
    "UI/UX",
  ];

  const colors = [
    { bg: "#f5f0e8", text: "#1a1612" },
    { bg: "#e8f0ec", text: "#1a1612" },
    { bg: "#e8ecf0", text: "#1a1612" },
    { bg: "#f0e8e8", text: "#1a1612" },
    { bg: "#1a1612", text: "#f5f0e8" },
  ];

  const [bg, setBg] = useState("#f5f0e8");
  const [textColor, setTextColor] = useState("#1a1612");

  function changeBg(color: string, text: string) {
    setBg(color);
    setTextColor(text);
  }

  return (
    <div style={{ backgroundColor: bg, color: textColor }}>
      <section className="about">
        <div className="container">
          <div className="about-wrapper">
            {/* Left: content */}
            <div className="about-content">
              <h1 className="about-header">
                {user.firstName} {user.lastName}
              </h1>
              <p className="about-title">{user.title}</p>
              <div className="about-bio">
                <p>
                  I build clean, simple, and responsive websites that look good
                  and work the way they should. I work on both the front end and
                  the back end, offering services like landing page creation,
                  small web applications, and projects that use a database
                  behind the scenes. I like keeping things clear, functional,
                  and easy to use. I’m always learning and improving, and I put
                  real care into every project—big or small.
                </p>
              </div>

              <h2 className="skills-label">Technologies</h2>
              <div className="skills-list">
                {skills.map((skill) => (
                  <span key={skill} className="skill-card">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: color picker */}
            <div className="color-picker">
              <span className="color-picker-label">Theme</span>
              <div className="color-swatches">
                {colors.map((color) => (
                  <button
                    key={color.bg}
                    className="swatch"
                    style={{ backgroundColor: color.bg }}
                    onClick={() => changeBg(color.bg, color.text)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
