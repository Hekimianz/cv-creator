import { useState } from "react";
import Navbar from "./components/Navbar";
import Personal from "./components/Personal";

function App() {
  const [cvInfo, setCvInfo] = useState({});
  return (
    <>
      <Navbar />
      <section id="inputs-cont">
        <Personal cvInfo={cvInfo} setCvInfo={setCvInfo} />
      </section>
      <section id="final-cont"></section>
    </>
  );
}

export default App;
