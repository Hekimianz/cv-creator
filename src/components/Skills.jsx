import { useState } from "react";
import "../styles/skills.css";
import SkillPill from "./SkillPill";

function Skills({ cvInfo, setCvInfo }) {
  const [currSkill, setCurrSkill] = useState("");

  const allSkills = (cvInfo.skills || []).map((skill) => (
    <SkillPill
      skill={skill}
      key={skill}
      cvInfo={cvInfo}
      setCvInfo={setCvInfo}
    />
  ));

  const handleCommaPress = (e) => {
    if (e.key === ",") {
      e.preventDefault();
      const trimmedSkill = currSkill.trim();

      if (trimmedSkill && !(cvInfo.skills || []).includes(trimmedSkill)) {
        const updatedSkills = [...(cvInfo.skills || []), trimmedSkill];
        setCvInfo({ ...cvInfo, skills: updatedSkills });
        setCurrSkill("");
      }
    }
  };

  return (
    <div id="skills--cont" className="input-cont">
      <p className="skills--desc">
        *List your skills, separated by commas (e.g., JavaScript, React,
        Node.js)*
      </p>
      <input
        type="text"
        className="skills--input"
        placeholder="e.g. JavaScript"
        value={currSkill}
        onChange={(e) => setCurrSkill(e.target.value)}
        onKeyDown={handleCommaPress}
      />
      <div className="skills--entered">{allSkills}</div>
    </div>
  );
}

export default Skills;
