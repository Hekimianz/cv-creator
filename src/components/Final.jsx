import "../styles/final.css";
function Final({ cvInfo, setSubmitted }) {
  console.log(cvInfo);
  const {
    address,
    dob,
    education,
    email,
    firstName,
    lastName,
    phone,
    skills,
    summary,
    works,
  } = cvInfo;
  return (
    <section className="final--cont">
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
