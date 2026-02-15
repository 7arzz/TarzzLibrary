import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="container text-center" style={{ marginTop: "120px" }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="fw-bold mb-3 glow">Tarzz Library</h1>
            <p className="text-secondary fs-5 mb-4 glow">
              Kumpulan cerpen digital terbaik ✨
            </p>

            <img
              src={logo}
              alt="logo"
              className="rounded-circle shadow-lg mb-4"
              style={{ width: "260px" }}
            />

            <br />

            <button
              onClick={() => navigate("/library")}
              className="btn btn-primary btn-lg fw-bold px-5 py-3 shadow "
              style={{ borderRadius: "40px" }}
            >
              📚 Mulai Baca
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
