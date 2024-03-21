// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DashBoard } from "./componet/dashboard/Dashboard";
import { Editorpage } from "./componet/EditorPage/EditorPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/editorpage" element={<Editorpage />} />
      </Routes>
    </div>
  );
}

export default App;
