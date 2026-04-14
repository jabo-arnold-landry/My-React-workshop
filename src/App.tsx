import { lazy } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./RouterPractice/Home"));
const About = lazy(() => import("./RouterPractice/About"));
const Postings = lazy(() => import("./RouterPractice/Postings"));

function App() {
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/postings">Postings</NavLink>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/postings" element={<Postings />} />
      </Routes>
    </>
  );
}

export default App;
