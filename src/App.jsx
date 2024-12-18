import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Final from "./components/Final";

function App() {
  const [cvInfo, setCvInfo] = useState({});
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      {submitted ? null : <Navbar />}
      <section id="inputs-cont">
        {!submitted ? (
          <Form
            cvInfo={cvInfo}
            setCvInfo={setCvInfo}
            setSubmitted={setSubmitted}
          />
        ) : (
          <Final cvInfo={cvInfo} setSubmitted={setSubmitted} />
        )}
      </section>
      <section id="final-cont"></section>
    </>
  );
}

export default App;
