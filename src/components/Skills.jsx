import React from 'react';
import './Skills.css';
import { CheckCircle2, PenTool } from 'lucide-react';

const Skills = () => {
  const coreSkills = [
    "Tax Compliance",
    "Tax Reporting (SPT Tahunan, PPh 21, PPN)",
    "e-Filing & e-Bupot",
    "Financial Analysis",
    "Indonesian Tax Regulation",
    "Public Speaking Expert",
    "Video Editing & Talent",
    "Social Media Expert"
  ];

  const tools = [
    { name: "DJP Online & Coretax", level: "Expert" },
    { name: "Microsoft Excel (Advanced)", level: "Expert" },
    { name: "Accurate / SAP", level: "Intermediate" },
    { name: "Capcut (Professional)", level: "Expert" },
    { name: "Canva (Professional)", level: "Expert" }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>
        
        <div className="skills-container">
          <div className="skills-card">
            <h3 className="skills-category-title">
              <CheckCircle2 className="skills-icon" /> Core Skills
            </h3>
            <ul className="skills-list">
              {coreSkills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <div className="skill-bullet"></div>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="skills-card">
            <h3 className="skills-category-title">
              <PenTool className="skills-icon" /> Software & Tools
            </h3>
            <div className="tools-list">
              {tools.map((tool, index) => (
                <div key={index} className="tool-item">
                  <div className="tool-info">
                    <span className="tool-name">{tool.name}</span>
                    <span className="tool-level">{tool.level}</span>
                  </div>
                  <div className="tool-progress">
                    <div 
                      className="tool-progress-bar" 
                      style={{ width: tool.level === 'Expert' ? '95%' : tool.level === 'Intermediate' ? '75%' : '60%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
