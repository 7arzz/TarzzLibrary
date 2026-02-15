import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "120px" }}>
        <h1>Tarzz Library</h1>
        <p>Kumpulan cerpen digital</p>
        <button onClick={() => navigate("/library")} className="cyber-btn">
          Mulai Baca
        </button>
      </div>
    </>
  );
}

export default Home;
