import "../styles/Personal.css";
function Personal({ cvInfo, setCvInfo }) {
  return (
    <div id="personal-cont">
      <h2>Personal information</h2>
      <div className="input-cont">
        <label htmlFor="firstName">First name: </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={cvInfo.firstName || ""}
          onChange={(e) => {
            setCvInfo({ ...cvInfo, firstName: e.target.value });
          }}
        />
      </div>

      <div className="input-cont">
        <label htmlFor="lastName">Last name: </label>
        <input
          name="lastName"
          id="lastName"
          type="text"
          value={cvInfo.lastName || ""}
          onChange={(e) => {
            setCvInfo({ ...cvInfo, lastName: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default Personal;
