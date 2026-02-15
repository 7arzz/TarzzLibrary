import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import cerpen from "../data/cerpen";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const data = cerpen.find((c) => c.id === parseInt(id));
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress((current / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data)
    return (
      <h1 style={{ padding: "40px" }}>
        Cerpen tidak ditemukan <br /> <br />
        <br />
        <Link to="/library" className="cyber-btn" style={link}>
          Library
        </Link>
      </h1>
    );

  return (
    <>
      {/* progress bar */}
      <div className="progress" style={{ width: `${progress}%` }}></div>

      <Navbar />

      <div
        style={{
          maxWidth: "800px",
          margin: "100px auto",
          padding: "20px",
          color: "white",
          lineHeight: "1.8",
          fontSize: "18px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "10px",
            background: "linear-gradient(90deg,#00eaff,#8a2be2)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
          }}
        >
          {data.judul}
        </h1>

        {/* info kecil */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginBottom: "40px",
            fontSize: "14px",
            color: "#9be7ff",
            letterSpacing: "1px",
          }}
        >
          {/* genre */}
          <span
            style={{
              padding: "6px 14px",
              border: "1px solid #00eaff",
              borderRadius: "20px",
              background: "rgba(0,234,255,0.1)",
              boxShadow: "0 0 10px rgba(0,234,255,0.4)",
              fontWeight: "600",
            }}
          >
            {data.genre}
          </span>

          {/* penulis */}
          <span style={{ color: "#ccc" }}>
            ✦ by <span style={{ color: "#00eaff" }}>{data.penulis}</span>
          </span>
        </div>

        <div
          style={{
            lineHeight: "1.9",
            fontSize: "18px",
            color: "#e6f1ff",
            maxWidth: "800px",
            margin: "0 auto",
            paddingTop: "120px",
            textAlign: "justify",
          }}
        >
          {data.isi.split("\n").map((p, i) => (
            <p key={i} style={{ marginBottom: "18px" }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* tombol navigasi */}
      <div style={{ marginTop: "40px" }}>
        <button
          onClick={() => navigate(`/read/${Number(id) - 1}`)}
          className="cyber-btn"
        >
          ⬅ Prev
        </button>

        <button
          style={{ marginLeft: "10px" }}
          className="cyber-btn"
          onClick={() => navigate(`/read/${Number(id) + 1}`)}
        >
          Next ➡
        </button>
      </div>
    </>
  );
}

export default Read;

const link = {
  color: "white",
  textDecoration: "none",
  marginTop: "10px",
};
