import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import cerpen from "../data/cerpen";

function Library() {
  return (
    <>
      <Navbar />

      <div className="container" style={{ marginTop: "60px" }}>
        <h1 className="text-center fw-bold mb-5 glow">📚 Tarzz Library</h1>

        <div className="row g-5 justify-content-center">
          {cerpen.map((c) => (
            <div key={c.id} className="col-md-4 col-sm-6">
              <div
                className="card h-100 shadow-lg border-0"
                style={{
                  borderRadius: "20px",
                  background: "linear-gradient(145deg, #0f172a, #020617)",
                  color: "white",
                }}
              >
                <div className="card-body text-center d-flex flex-column">
                  <h4 className="fw-bold">{c.judul}</h4>
                  <p className="text-info mb-4">{c.genre}</p>

                  <Link to={`/read/${c.id}`} className="mt-auto">
                    <button className="btn btn-light fw-bold px-4">
                      ✨ Baca Cerpen
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Library;
