import { useNavigate } from "react-router-dom";

const StudyMaterials = () => {
  const navigate = useNavigate();
  const materials = ["Practicals", "Videos", "Old Papers", "Projects"];

  return (
    <div className="container">
      <h1>Study Materials</h1>
      <div className="button-group">
        {materials.map((material, index) => (
          <button key={index} onClick={() => navigate("/practicals")} className="button button-info">
            {material}
          </button>
        ))}
      </div>
      <button onClick={() => navigate(-1)} className="button button-back">Back</button>
    </div>
  );
};

export default StudyMaterials;
