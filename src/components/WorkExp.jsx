import { useState } from "react";
import "../styles/Form.css";
import del from "../assets/delete.png";
function WorkExp({ id, cvInfo, setCvInfo }) {
  const [workInfo, setWorkInfo] = useState({
    ...cvInfo.works.find((work) => work.id === id),
  });
  const updateCvInfo = (updatedWork) => {
    setCvInfo((prev) => ({
      ...prev,
      works: prev.works.map((work) =>
        work.id === updatedWork.id ? updatedWork : work
      ),
    }));
  };

  const handleChange = (field, value) => {
    const updatedWork = { ...workInfo, [field]: value };
    setWorkInfo(updatedWork);
    updateCvInfo(updatedWork);
  };

  return (
    <div className="workField--cont">
      <label>
        Job title:{" "}
        <input
          type="text"
          value={workInfo.title || ""}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </label>
      <label>
        Company:{" "}
        <input
          type="text"
          value={workInfo.company || ""}
          onChange={(e) => handleChange("company", e.target.value)}
        />
      </label>
      <label>
        Start date:{" "}
        <input
          type="date"
          value={workInfo.start || ""}
          onChange={(e) => handleChange("start", e.target.value)}
        />
      </label>
      <label>
        End date:{" "}
        <input
          type="date"
          value={workInfo.end || ""}
          onChange={(e) => handleChange("end", e.target.value)}
        />
      </label>
      <span
        className="deleteJob"
        onClick={() => {
          setCvInfo((prev) => ({
            ...prev,
            works: prev.works.filter((work) => work.id !== id),
          }));
        }}
      >
        <img src={del} />
      </span>
    </div>
  );
}

export default WorkExp;
