import { useState } from "react";
import "../styles/Form.css";
import del from "../assets/delete.png";

function Certificate({ cvInfo, setCvInfo, id }) {
  const [certInfo, setCertInfo] = useState({
    ...cvInfo.certificates.find((cert) => cert.id === id),
  });
  const updateCvInfo = (updatedCert) => {
    setCvInfo((prev) => ({
      ...prev,
      certificates: prev.certificates.map((cert) =>
        cert.id === updatedCert.id ? updatedCert : cert
      ),
    }));
  };

  const handleChange = (field, value) => {
    const updatedCert = { ...certInfo, [field]: value };
    setCertInfo(updatedCert);
    updateCvInfo(updatedCert);
  };

  return (
    <div className="certField--cont">
      <label>
        Name:{" "}
        <input
          type="text"
          value={certInfo.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </label>
      <label>
        Issuer:{" "}
        <input
          type="text"
          value={certInfo.issuer || ""}
          onChange={(e) => handleChange("issuer", e.target.value)}
        />
      </label>
      <label>
        Date of issue:{" "}
        <input
          type="date"
          value={certInfo.date || ""}
          onChange={(e) => handleChange("date", e.target.value)}
        />
      </label>
      <label>
        URL:{" "}
        <input
          type="text"
          value={certInfo.url || ""}
          onChange={(e) => handleChange("url", e.target.value)}
        />
      </label>
      <span
        className="deleteCert"
        onClick={() => {
          setCvInfo((prev) => ({
            ...prev,
            certificates: prev.certificates.filter((cert) => cert.id !== id),
          }));
        }}
      >
        <img src={del} />
      </span>
    </div>
  );
}
export default Certificate;
