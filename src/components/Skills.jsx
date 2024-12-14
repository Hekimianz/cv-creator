import { useState } from "react";
import "../styles/Skills.css";
import SkillPill from "./SkillPill";
function Skills({ cvInfo, setCvInfo }) {
  const [skills, setSkills] = useState([]);
  const [currSkill, setCurrSkill] = useState("");
  const allSkills = skills.map((skill) => {
    return <SkillPill skill={skill} key={skill} setSkills={setSkills} />;
  });
  const handleCommaPress = (e) => {
    if (e.key === ",") {
      e.preventDefault();
      if (skills.includes(currSkill)) return;
      if (currSkill.trim()) {
        const newSkils = [...skills, currSkill.trim()];
        setSkills(newSkils);
        setCvInfo({ ...cvInfo, skills: newSkils });
        e.target.value = "";
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
        onChange={(e) => setCurrSkill(e.target.value)}
        onKeyDown={handleCommaPress}
      />
      <div className="skills--entered">{allSkills}</div>
    </div>
  );
}

export default Skills;
