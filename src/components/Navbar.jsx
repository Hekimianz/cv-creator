import "../styles/navbar.css";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <section id="navbar-cont">
      <img id="logo" src={logo} />
      <h1>CV FORGE</h1>
    </section>
  );
}

export default Navbar;
