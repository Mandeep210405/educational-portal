import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(null); // Track open menu
  const [deptOpen, setDeptOpen] = useState(null); // Track open department

  const toggleMenu = (menu) => {
    setMenuOpen(menuOpen === menu ? null : menu);
    setDeptOpen(null); // Close department dropdown when switching menu
  };

  const toggleDept = (dept) => {
    setDeptOpen(deptOpen === dept ? null : dept);
  };

  const handleNavigation = (category, dept, sem) => {
    navigate(`/${category}/${dept}/sem${sem}`);
    setMenuOpen(null);
    setDeptOpen(null);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">My Website</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>

        {/* Dropdown Menus */}
        {['syllabus', 'materials', 'practicals', 'oldpapers'].map((category) => (
          <div className="dropdown" key={category}>
            <button className="dropbtn" onClick={() => toggleMenu(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)} ▾
            </button>
            {menuOpen === category && (
              <div className="dropdown-content">
                {['IT', 'CE'].map((dept) => (
                  <div key={dept} className="nested-dropdown">
                    <button onClick={() => toggleDept(dept)}>{dept} ▸</button>
                    {deptOpen === dept && (
                      <div className="nested-content">
                        {[...Array(8)].map((_, i) => (
                          <button key={i} onClick={() => handleNavigation(category, dept.toLowerCase(), i + 1)}>
                            Semester {i + 1}
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
