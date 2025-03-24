import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(null); // Track open menu
  const [deptOpen, setDeptOpen] = useState(null); // Track open department
  const [allsemester, setallsemester] = useState([]); // Store semesters for the selected department

  const toggleMenu = (menu) => {
    if (menuOpen === menu) {
      
      setMenuOpen(null);
      setDeptOpen(null);
      setallsemester([]);
    } else {
      setMenuOpen(menu);
      setDeptOpen(null);
      setallsemester([]);
    }
  };


  const toggleDept = (dept, dptid) => {
    if (deptOpen === dept) {
  
      setDeptOpen(null);
      setallsemester([]);
    } else {

      setDeptOpen(dept);
      if (dptid) {
        fetch("http://localhost/nexushub/semesters.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ department_id: dptid }),
        })
          .then((delivery) => delivery.json())
          .then((delivery_data) => {
            console.log("Fetched semesters:", delivery_data); // Debugging
            setallsemester(delivery_data);
          })
          .catch((error) => console.error("Error fetching semesters:", error));
      }
    }
  };

 
  const handleNavigation = (semid) => {
    navigate("/subjects", { state: { semid } });
    setMenuOpen(null); 
    setDeptOpen(null);
    setallsemester([]);
  };

  const departments = props.dept_data;

  useEffect(() => {
    console.log("Menu Open:", menuOpen);
    console.log("Department Open:", deptOpen);
    console.log("All Semesters:", allsemester);
  }, [menuOpen, deptOpen, allsemester]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">My Website</Link>
      </div>

      <div className="nav-links">
        <Link to="/" className="nav-item">
          Home
        </Link>

        {/* Dropdown Menus */}
        {["syllabus", "practicals", "oldpapers"].map((category) => (
          <div className="dropdown" key={category}>
            <button className="dropbtn" onClick={() => toggleMenu(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)} ▾
            </button>
            {menuOpen === category && (
              <div className="dropdown-content">
                {departments.map((dept) => (
                  <div key={dept.dptid} className="nested-dropdown">
                    <button onClick={() => toggleDept(dept.dptname, dept.dptid)}>
                      {dept.dptname} ▸
                    </button>
                    {deptOpen === dept.dptname && (
                      <div className="nested-content">
                        {allsemester.map((allsem) => (
                          <button
                            key={allsem.semid}
                            onClick={() => handleNavigation(allsem.semid)}
                          >
                            Semester {allsem.sem}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;