import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Semester from "./components/Semester";
import Subjects from "./components/Subjects";
import StudyMaterials from "./components/StudyMaterials";
import PracticalList from "./components/PracticalList";
import Videos from "./components/videos";
import Oldpaper from "./components/Oldpaper";
import { useState, useEffect } from "react";

const App = () => {

    const [departments, setdepartments] = useState([]);

  useEffect(()=>{
    fetch('http://localhost/nexushub/home.php') //chnage with home page api
    .then((delivery)=>{
      if(!delivery.ok){
        alert("tooow tooowww");
        throw new Error(`https error status: ${delivery.status}`);
    }
      return delivery.json();
    })
    .then((data)=>setdepartments(data))
    .catch((error) => console.error(error));
  },[]);




  return (
    <Router>
      <Navbar dept_data = {departments} /> {/* Navbar is added here */}
      <Routes>
        <Route path="/" element={<Home dept_data = {departments} />} />
        <Route path="/semester" element={<Semester />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/materials" element={<StudyMaterials />} />
        <Route path="/practicals" element={<PracticalList />} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/oldpaper" element={<Oldpaper/>} />
      </Routes>
    </Router>
  );
};

export default App;
