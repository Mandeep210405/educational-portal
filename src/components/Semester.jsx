import { useNavigate } from "react-router-dom";

const Semester = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Select Your Semester</h1>
      <div className="grid-container">
        {[...Array(8)].map((_, i) => (
          <button key={i + 1} onClick={() => navigate("/subjects")} className="button button-warning">
            Semester {i + 1}
          </button>
        ))}
      </div>
      <button onClick={() => navigate(-1)} className="button button-back">Back</button>
    </div>
  );
};

export default Semester;
