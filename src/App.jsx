import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Semester from "./components/Semester";
import Subjects from "./components/Subjects";
import StudyMaterials from "./components/StudyMaterials";
import PracticalList from "./components/PracticalList";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar is added here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/semester" element={<Semester />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/materials" element={<StudyMaterials />} />
        <Route path="/practicals" element={<PracticalList />} />
      </Routes>
    </Router>
  );
};

export default App;
