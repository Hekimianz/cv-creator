import { useState } from "react";
import "../styles/Form.css";
import del from "../assets/delete.png";

function Language({ cvInfo, setCvInfo, id }) {
  const [langInfo, setLangInfo] = useState({
    ...cvInfo.languages.find((lang) => lang.id === id),
  });
  const updateCvInfo = (updatedLang) => {
    setCvInfo((prev) => ({
      ...prev,
      languages: prev.languages.map((lang) =>
        lang.id === updatedLang.id ? updatedLang : lang
      ),
    }));
  };

  const handleChange = (field, value) => {
    const updatedLang = { ...langInfo, [field]: value };
    setLangInfo(updatedLang);
    updateCvInfo(updatedLang);
  };

  return (
    <div className="langField--cont">
      <label>
        Language:{" "}
        <input
          type="text"
          value={langInfo.language || ""}
          onChange={(e) => handleChange("language", e.target.value)}
        />
      </label>
      <label>
        Proficiency:{" "}
        <select
          value={langInfo.proficiency || ""}
          onChange={(e) => handleChange("proficiency", e.target.value)}
        >
          <option value="1">Beginner</option>
          <option value="2">Intermediate</option>
          <option value="3">Advanced</option>
          <option value="4">Fluent</option>
          <option value="5">Native</option>
        </select>
      </label>
      <span
        className="deleteLang"
        onClick={() => {
          setCvInfo((prev) => ({
            ...prev,
            languages: prev.languages.filter((lang) => lang.id !== id),
          }));
        }}
      >
        <img src={del} />
      </span>
    </div>
  );
}
export default Language;
