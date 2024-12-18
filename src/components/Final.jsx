import "../styles/final.css";
import ProfileHeader from "./ProfileHeader";
import phonePng from "../assets/phone.png";
import emailPng from "../assets/mail.png";
import locationPng from "../assets/location.png";
import circle from "../assets/circle.png";
import emptyCircle from "../assets/empty.png";

function Final({ cvInfo, setSubmitted }) {
  console.log(cvInfo);
  const {
    address,
    education,
    email,
    firstName,
    lastName,
    phone,
    skills,
    summary,
    works,
    languages,
    certificates,
    title,
    pic,
  } = cvInfo;
  const previewUrl = pic
    ? typeof pic === "string"
      ? pic
      : URL.createObjectURL(pic)
    : null;
  const allSkills = skills.map((skill) => {
    return <li key={skill}>{skill}</li>;
  });

  const renderProficiencies = function (n) {
    return Array.from({ length: 5 }, (_, index) => (
      <img
        className="languageCircle"
        src={index < n ? circle : emptyCircle}
        key={index}
      />
    ));
  };

  const renderLanguages = languages.map((lang) => {
    return (
      <div className="language-cont">
        <span className="language">
          {lang.language[0].toUpperCase(0) + lang.language.slice(1)}
        </span>
        <div className="circles">{renderProficiencies(lang.proficiency)}</div>
      </div>
    );
  });

  const formatDate = function (string) {
    const split = string.split("-");
    const result = `${split[1]}/${split[2]}/${split[0]}`;
    return result;
  };

  const renderWorks = works.map((work) => {
    return (
      <div className="workCont">
        <h3>{work.title}</h3>
        <p>At {work.company}</p>
        <p>
          {formatDate(work.start)} to {formatDate(work.end)}
        </p>
      </div>
    );
  });

  const renderEdu = education.map((edu) => {
    return (
      <div className="eduCont">
        <h3>{edu.school}</h3>
        <p>{edu.degree}</p>
        <p>{formatDate(edu.date)}</p>
      </div>
    );
  });

  const renderCerts = certificates.map((cert) => {
    return (
      <div className="cert">
        <h3>{cert.name}</h3>
        <p>{cert.issuer}</p>
        <p>{cert.url}</p>
        <p>{formatDate(cert.date)}</p>
      </div>
    );
  });

  return (
    <section className="final--cont">
      <ProfileHeader
        fullName={`${firstName[0].toUpperCase() + firstName.slice(1)} ${
          lastName[0].toUpperCase() + lastName.slice(1)
        }`}
        title={title[0].toUpperCase() + title.slice(1)}
        pic={previewUrl}
      />

      <section id="contactInfo">
        <div id="phone--cont">
          <img src={phonePng} />
          <span>{phone}</span>
        </div>
        <div id="email--cont">
          <img src={emailPng} />
          <span>{email}</span>
        </div>
        <div id="location--cont">
          <img src={locationPng} />
          <span>{address[0].toUpperCase() + address.slice(1)}</span>
        </div>
      </section>

      <section id="professionalSummary">
        <h2>Professional Summary</h2>
        <p>{summary}</p>
      </section>

      <section id="coreSkills">
        <h2>Core Skills</h2>
        <ul>{allSkills}</ul>
      </section>

      <section id="languages">
        <h2>Languages</h2>
        {renderLanguages}
      </section>

      <section id="work">
        <h2>Work Experience</h2>
        {renderWorks}
      </section>

      <section id="education">
        <h2>Education</h2>
        {renderEdu}
      </section>

      <section id="certificates">
        <h2>Certificates</h2>
        {renderCerts}
      </section>

      <button
        className="back--btn"
        onClick={() => {
          setSubmitted(false);
        }}
      >
        Go back
      </button>
    </section>
  );
}

export default Final;
