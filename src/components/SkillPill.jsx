import "../styles/skills.css";
import close from "../assets/close.png";

function SkillPill({ skill, cvInfo, setCvInfo }) {
  const handleDelete = () => {
    const updatedSkills = cvInfo.skills.filter((curr) => curr !== skill);
    setCvInfo({ ...cvInfo, skills: updatedSkills }); // Update cvInfo.skills
  };

  return (
    <div className="skill--pill">
      <h3>{skill}</h3>
      <button className="skill--pill-close" onClick={handleDelete}>
        <img src={close} alt="delete skill" />
      </button>
    </div>
  );
}

export default SkillPill;
