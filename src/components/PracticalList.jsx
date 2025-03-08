import { useNavigate } from "react-router-dom";

const PracticalList = () => {
  const navigate = useNavigate();
  const practicals = ["Practical 1", "Practical 2", "Practical 3"];

  return (
    <div className="container">
      <h1>Practical List</h1>
      <div className="button-group">
        {practicals.map((practical, index) => (
          <div key={index} className="card">{practical}</div>
        ))}
      </div>
      <button onClick={() => navigate(-1)} className="button button-back">Back</button>
    </div>
  );
};

export default PracticalList;
