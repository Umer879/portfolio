// SkillsLine.js
import React, { useEffect, useState } from "react";
import html from "../../assets/skills/html.avif";
import css from "../../assets/skills/css.avif";
import js from "../../assets/skills/js.avif";
import bootstrap from "../../assets/skills/bootstrap.avif";
import tailwind from "../../assets/skills/tailwind.avif";
import react from "../../assets/skills/react.avif";
import "./Skill.css";

const skills = [
  { name: "Meta", img: html },
  { name: "Google", img: css },
  { name: "Microsoft", img: js },
  { name: "Slack", img: bootstrap },
  { name: "Copilot", img: tailwind },
  { name: "Stability AI", img: react },
   { name: "Meta", img: html },
  { name: "Google", img: css },
  { name: "Microsoft", img: js },
  { name: "Slack", img: bootstrap },
  { name: "Copilot", img: tailwind },
  { name: "Stability AI", img: react },
  { name: "Copilot", img: html },
  { name: "Stability AI", img: css },
  { name: "Pixray", img: js },
];

const SkillsLine = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container my-5">
      <div className="skills-line d-flex align-items-center justify-content-center flex-wrap">
        {skills.map((skill, index) => {
          const isLast = index === skills.length - 1;
          const isEighth = (index + 1) % 8 === 0;

          const shouldShowLine =
            // Mobile/Tablet → Always show line
            !isDesktop ||
            // Desktop → Show line if not 8th and not last
            (isDesktop && !isEighth && !isLast);

          return (
            <React.Fragment key={index}>
              <div className="skill-circle text-center">
                <img src={skill.img} alt={skill.name} />
              </div>
              {shouldShowLine && <div className="dashed-line" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsLine;
