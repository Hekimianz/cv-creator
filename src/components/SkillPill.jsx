import "../styles/skills.css";
import close from "../assets/close.png";
function SkillPill({ skill, setSkills }) {
  return (
    <div className="skill--pill">
      <h3>{skill}</h3>
      <button className="skill--pill-close">
        <img
          src={close}
          alt="delete skill"
          onClick={() => {
            setSkills((prevSkills) =>
              prevSkills.filter((curr) => skill != curr)
            );
          }}
        />
      </button>
    </div>
  );
}

export default SkillPill;
