import "../styles/Form.css";
import add from "../assets/add.png";
import Skills from "./Skills";
import WorkExp from "./WorkExp";
function Personal({ cvInfo, setCvInfo }) {
  console.log(cvInfo);
  function addWork() {
    setCvInfo((prev) => ({
      ...prev,
      works: [...(prev.works || []), { id: Date.now() }],
    }));
  }
  const allWorks = cvInfo.works?.map((work) => (
    <WorkExp
      key={Date.now()}
      id={Date.now()}
      cvInfo={cvInfo}
      setCvInfo={setCvInfo}
    />
  ));
  return (
    <div id="personal-cont">
      <h2>Personal information</h2>
      <div className="input-cont">
        <label htmlFor="firstName">First name:</label>
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
        <label htmlFor="lastName">Last name:</label>
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

      <div className="input-cont">
        <label htmlFor="dob">Date of birth:</label>
        <input
          name="dob"
          id="dob"
          type="date"
          value={cvInfo.dob || ""}
          onChange={(e) => {
            setCvInfo({ ...cvInfo, dob: e.target.value });
          }}
        />
      </div>

      <h2>Contact information</h2>

      <div className="input-cont">
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          id="email"
          type="email"
          value={cvInfo.email || ""}
          onChange={(e) => {
            setCvInfo({ ...cvInfo, email: e.target.value });
          }}
        />
      </div>

      <div className="input-cont">
        <label htmlFor="phone">Phone:</label>
        <input
          name="phone"
          id="phone"
          type="tel"
          value={cvInfo.phone || ""}
          onChange={(e) => {
            setCvInfo({ ...cvInfo, phone: e.target.value });
          }}
        />
      </div>

      <div className="input-cont">
        <label htmlFor="address">Address:</label>
        <input
          name="address"
          id="address"
          type="text"
          value={cvInfo.address || ""}
          onChange={(e) => {
            setCvInfo({ ...cvInfo, address: e.target.value });
          }}
        />
      </div>

      <h2>Professional summary</h2>
      <div className="input-cont">
        <textarea
          name="summary"
          id="summary"
          value={cvInfo.address || ""}
          onChange={(e) => {
            setCvInfo({ ...cvInfo, address: e.target.value });
          }}
          placeholder="A brief overview (2-3 sentences) highlighting work experience, and career goals."
          cols={40}
          rows={5}
        ></textarea>
      </div>

      <h2>Skills</h2>
      <Skills cvInfo={cvInfo} setCvInfo={setCvInfo} />

      <h2>Work Experience</h2>
      <button className="addWork--btn" onClick={addWork}>
        <img src={add} />
      </button>
      <div id="workExp--cont">{allWorks}</div>
    </div>
  );
}

export default Personal;
