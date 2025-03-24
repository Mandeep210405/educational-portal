import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = (props) => {
  const navigate = useNavigate();
  const departments = props.dept_data;
  return (
    <div className="container"> 
      <h1>Select Your Department</h1>
      <div className="button-group">
        {
          departments.map((dept) => (<button key={dept.dptid} onClick={()=>navigate("/semester", {state: {departmentid:dept.dptid}})} className="button button-primary">{dept.dptname}</button>))
        } 
      </div>
    </div>
  );
};

export default Home;
