import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav style={nav}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={logo} width="90" alt="logo" style={{ borderRadius: "50%" }} />
        <h2 className="glow">Tarzz Library</h2>
      </div>

      <div style={menu}>
        <Link to="/" style={link}>
          Home
        </Link>

        <Link to="/library" style={link}>
          Library
        </Link>

        <Link to="/about" style={link}>
          About
        </Link>
      </div>
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 40px",
  background: "rgba(0,0,20,0.6)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(0,255,255,0.2)",
  position: "sticky",
  top: 0,
  zIndex: 999,
};

const menu = {
  display: "flex",
  gap: "30px",
  alignItems: "center",
  fontSize: "20px",
  fontWeight: "bold",
  justifyContent: "center",
  flexWrap: "wrap",
  color: "white",
  textDecoration: "none",
};

const link = {
  color: "white",
  textDecoration: "none",
};

export default Navbar;
