import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const Semester = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const departmentid = location.state.departmentid;

  const [allsemester,setallsemester] = useState([]);

  useEffect(()=>{

    if(departmentid){

      fetch("http://localhost/nexushub/semesters.php",{method:"POST",headers:{"Content-Type":"application/json",},body: JSON.stringify({department_id:departmentid}),})
      .then((delivery)=>delivery.json())
      .then((delivery_data)=>setallsemester(delivery_data))
      .catch((error)=>console.error('error in fetching sem',error));
    }

  },[])

  console.log(allsemester);
  return (
    <div className="container">
      <h1>Select Your Semester</h1>
      <div className="grid-container">
        {allsemester.map((sem) => (
          <button key={sem.semid} onClick={() => navigate("/subjects",{state:{semid:sem.semid}})} className="button button-warning">
            Semester {sem.sem}
          </button>
        ))}
      </div>  
      <button onClick={() => navigate(-1)} className="button button-back">Back</button>
    </div>
  );
};

export default Semester;
