import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Read from "./pages/Read";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/library" element={<Library />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}
export default App;
