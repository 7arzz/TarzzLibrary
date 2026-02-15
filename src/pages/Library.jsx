import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import cerpen from "../data/cerpen";

function Library() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <h1 className="glow">Library</h1>

        <div className="grid">
          {cerpen.map((c) => (
            <div key={c.id} className="card">
              <h2>{c.judul}</h2>
              <p>{c.genre}</p>

              <Link to={`/read/${c.id}`}>
                <button className="cyber-btn">Baca</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Library;
