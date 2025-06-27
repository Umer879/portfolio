// SkillsLine.js
import React, { useEffect, useState } from 'react';
import awesome from '../../assets/skills/awesome.webp'
import google from '../../assets/skills/google.webp'
import microsoft from '../../assets/skills/microsoft.webp'
import meta from '../../assets/skills/meta.webp'
import copilot from '../../assets/skills/copilot.webp'
import slack from '../../assets/skills/slack.webp'
import pixray from '../../assets/skills/pixray.webp'
import stability from '../../assets/skills/stability.webp'
import './Skill.css'

const skills = [
  { name: 'Font Awesome', img: awesome },
  { name: 'Meta', img: meta },
  { name: 'Google', img: google },
  { name: 'Microsoft', img: microsoft },
{ name: 'Slack', img: slack},
  { name: 'Copilot', img: copilot },
  { name: 'Stability AI', img: stability},
  { name: 'Pixray', img: pixray },
  { name: 'Meta', img: meta },
  { name: 'Google', img: google },
  { name: 'Microsoft', img: microsoft },
  { name: 'Slack', img: slack },
  { name: 'Copilot', img: copilot },
  { name: 'Stability AI', img: stability },
  { name: 'Pixray', img: pixray },
];

const SkillsLine = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
