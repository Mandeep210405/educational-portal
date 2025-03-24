import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Subjects = () => {
  const navigate = useNavigate();
  const [subjects,setsubjects] = useState([]);
  const location = useLocation();
  const semid = location.state.semid;

  useEffect(()=>{

      if(semid){

        fetch("http://localhost/nexushub/subjects.php",{method:"POST",headers:{"Content-Type":"application/json"},body: JSON.stringify({sem_id:semid})})
        .then((delivery)=>delivery.json())
        .then((delivery_data)=>setsubjects(delivery_data))
        .catch((error)=>console.error("error in subjects",error));
      }

  },[semid])

  console.log(subjects);
  return (
    <div className="container">
      <h1>Select Your Subject</h1>
      <div className="button-group">
        {subjects.map((sub) => (
          <button key={sub.subid} onClick={() => navigate("/materials",{state:{sub_code:sub.subcode}})} className="button button-danger">
            {sub.subname}
          </button>
        ))}
      </div>
      <button onClick={() => navigate(-1)} className="button button-back">Back</button>
    </div>
  );
};

export default Subjects;

  