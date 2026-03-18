import { Routes, Route, Link } from "react-router-dom";
import Popup from "./practice/Popup";
import Todos from "./practice/Todos";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      
      <Link to="/popup">Pop</Link>
      <Routes>
        <Route path="/" element={<Todos />} />

        <Route path="/popup" element={<Popup />} />
      </Routes>
    </>
  );
}

export default App;
