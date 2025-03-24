import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const StudyMaterials = () => {
  const navigate = useNavigate();
  const materials = ["Practicals", "Videos", "Old Papers", "Projects"];
  const location = useLocation()
  const subcode = location.state.sub_code;
  return (
    <div className="container">
      <h1>Study Materials</h1>
      <div className="button-group">
          <button onClick={() => navigate("/practicals",{state:{subcode:subcode}})} className="button button-info">Practicals</button>
          <button onClick={() => navigate("/videos",{state:{subcode:subcode}})} className="button button-info">Videos</button>
          <button onClick={() => navigate("/oldpaper",{state:{subcode:subcode}})} className="button button-info">Old Papers</button>
      </div>
      <button onClick={() => navigate(-1)} className="button button-back">Back</button>
    </div>
  );
};

export default StudyMaterials;
