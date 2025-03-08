import { useNavigate } from "react-router-dom";

const Subjects = () => {
  const navigate = useNavigate();
  const subjects = ["Math", "Physics", "Chemistry", "Programming"];

  return (
    <div className="container">
      <h1>Select Your Subject</h1>
      <div className="button-group">
        {subjects.map((subject, index) => (
          <button key={index} onClick={() => navigate("/materials")} className="button button-danger">
            {subject}
          </button>
        ))}
      </div>
      <button onClick={() => navigate(-1)} className="button button-back">Back</button>
    </div>
  );
};

export default Subjects;

  