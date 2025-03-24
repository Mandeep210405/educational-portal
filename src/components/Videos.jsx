import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Videos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const subcode = location.state?.subcode; // Prevent error if state is undefined
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // Track the selected video

  useEffect(() => {
    if (subcode) {
      fetch("http://localhost/nexushub/videos.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sub_code: subcode }),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => setVideos(data))
        .catch((error) => console.error("Videos fetching error:", error));
    }
  }, [subcode]);

  // Function to handle video selection
  const handleWatchVideo = (videoLink) => {
    // Extract the video ID from the YouTube URL
    const url = new URL(videoLink);
    const videoId = url.searchParams.get("v"); // Get the value of the "v" parameter
    if (videoId) {
      // Construct the embed URL with the video ID
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      setSelectedVideo(embedUrl); // Set the selected video embed URL
    } else {
      console.error("Invalid YouTube URL");
    }
  };

  return (
    <div>
      <h1>Video List</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Unit</th>
            <th>Video</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video.vid}>
              <td>Unit {video.unit}</td>
              <td>
                <button
                  onClick={() => handleWatchVideo(video.vlink)} // Set the selected video
                  style={{ cursor: "pointer" }}
                >
                  Watch Video
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display the selected video */}
      {selectedVideo && (
        <div style={{ marginTop: "20px" }}>
          <h2>Now Playing</h2>
          <iframe
            width="560"
            height="315"
            src={selectedVideo}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <button onClick={() => navigate(-1)} className="button button-back">
        Back
      </button>
    </div>
  );
};

export default Videos;