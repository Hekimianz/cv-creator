import { useState } from "react";
import "../styles/Form.css";
import del from "../assets/delete.png";
function Education({ id, cvInfo, setCvInfo }) {
  const [eduInfo, setEduInfo] = useState({
    ...cvInfo.education.find((edu) => edu.id === id),
  });
  const updateCvInfo = (updatedEdu) => {
    setCvInfo((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === updatedEdu.id ? updatedEdu : edu
      ),
    }));
  };

  const handleChange = (field, value) => {
    const updatedEdu = { ...eduInfo, [field]: value };
    setEduInfo(updatedEdu);
    updateCvInfo(updatedEdu);
  };

  return (
    <div className="eduField--cont">
      <label>
        School:{" "}
        <input
          type="text"
          value={eduInfo.school || ""}
          onChange={(e) => handleChange("school", e.target.value)}
        />
      </label>
      <label>
        Degree:{" "}
        <input
          type="text"
          value={eduInfo.degree || ""}
          onChange={(e) => handleChange("degree", e.target.value)}
        />
      </label>
      <label>
        Graduation date:{" "}
        <input
          type="date"
          value={eduInfo.date || ""}
          onChange={(e) => handleChange("date", e.target.value)}
        />
      </label>
      <span
        className="deleteEdu"
        onClick={() => {
          setCvInfo((prev) => ({
            ...prev,
            education: prev.education.filter((edu) => edu.id !== id),
          }));
        }}
      >
        <img src={del} />
      </span>
    </div>
  );
}

export default Education;
