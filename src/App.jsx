import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  const [cvInfo, setCvInfo] = useState({});
  return (
    <>
      <Navbar />
      <section id="inputs-cont">
        <Form cvInfo={cvInfo} setCvInfo={setCvInfo} />
      </section>
      <section id="final-cont"></section>
    </>
  );
}

export default App;
