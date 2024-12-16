import { useState } from "react";
import "../styles/Form.css";
import del from "../assets/delete.png";
function WorkExp({ id, cvInfo, setCvInfo }) {
  const [workInfo, setWorkInfo] = useState({});
  return (
    <div className="workField--cont">
      <label>
        Job title:{" "}
        <input
          type="text"
          value={workInfo.title || ""}
          onChange={(e) => {
            setWorkInfo({ ...workInfo, title: e.target.value });
          }}
        />
      </label>
      <label>
        Company:{" "}
        <input
          type="text"
          value={workInfo.company || ""}
          onChange={(e) => {
            setWorkInfo({ ...workInfo, company: e.target.value });
          }}
        />
      </label>
      <label>
        Start date:{" "}
        <input
          type="date"
          value={workInfo.start || ""}
          onChange={(e) => {
            setWorkInfo({ ...workInfo, start: e.target.value });
          }}
        />
      </label>
      <label>
        End date:{" "}
        <input
          type="date"
          value={workInfo.end || ""}
          onChange={(e) => {
            setWorkInfo({ ...workInfo, end: e.target.value });
          }}
        />
      </label>
      <span className="deleteJob">
        <img src={del} />
      </span>
    </div>
  );
}

export default WorkExp;
