import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Select Your Department</h1>
      <div className="button-group">
        <button onClick={() => navigate("/semester")} className="button button-primary">IT</button>
        <button onClick={() => navigate("/semester")} className="button button-success">CE</button>
      </div>
    </div>
  );
};

export default Home;
