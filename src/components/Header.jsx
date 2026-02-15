import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div style={hero}>
        <h1 className="glow title">TARZZ LIBRARY</h1>
        <p className="sub">Futuristic Digital Story Archive</p>

        <Link to="/library">
          <button className="cyber-btn big">ENTER LIBRARY</button>
        </Link>
      </div>
    </>
  );
}

const hero = {
  height: "85vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

export default Home;
