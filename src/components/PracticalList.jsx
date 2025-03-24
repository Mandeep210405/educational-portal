import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PracticalList = () => {
  const [practicals, setPracticals] = useState([]);
  const [error, setError] = useState(null);

  const location = useLocation();
const subcode = location.state.subcode; // Use optional chaining to avoid errors

  useEffect(() => {

    fetch("http://localhost/nexushub/fetch_practicals.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sub_code: subcode }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        setPracticals(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  },
); // Add subcode to the dependency array

  useEffect(() => {
    if (window.hljs) {
      window.hljs.highlightAll();
    }
  }, [practicals]);

  if (error) {
    return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      {practicals.map((practical, index) => (
        <div key={index}>
          <h2>{practical.pnum}. {practical.question}</h2>
          <p>{practical.description}</p>
          <pre>
            <code className="language-c">{practical.pcode}</code>
          </pre>
        </div>
      ))}
    </div>
  );
};

export default PracticalList;