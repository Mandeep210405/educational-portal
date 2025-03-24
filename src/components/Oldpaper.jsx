import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Oldpaper = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const subcode = location.state?.subcode; // Prevent error if state is undefined
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    if (subcode) {
      fetch("http://localhost/nexushub/oldpaper.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sub_code: subcode }),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => setvideos(data))
        .catch((error) => console.error("oldpaper fetching error:", error));
    }
  }, [subcode]);
  return (
    <div>
      <h1>oldpaper List</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Summer/winter</th>
            <th>paper</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((paper) => (
            <tr key={paper.pid}>
              <td> {paper.pdate}</td>
              <td>
                <button
                  onClick={() => window.open(paper.plink, "_blank")} // Open video in new tab
                  style={{ cursor: "pointer" }}
                >
                  download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate(-1)} className="button button-back">Back</button>
    </div>
  );
};

export default Oldpaper;
