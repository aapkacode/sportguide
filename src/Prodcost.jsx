import { useState } from "react";
import { X, Play } from "lucide-react";
import "./index.css";
import { Assest } from "./assets/Assest";

function Podcast() {
  const [selectedVideo, setSelectedVideo] = useState(null);

const videos = [
  {
    id: 1,
    title: "Trishant Priyavrat Interview",
    video: Assest.podcost,
  },
  {
    id: 2,
    // title: "Trishant Priyavrat Interview",
     title: "Journey & Achievements",
    video: Assest.video1,
  },
  {
    id: 3,
    title: "Journey & Achievements",
    video: Assest.video2,
  },
];
  return (
    <>
      <section id="podcast" className="podcast-section">
        <div className="podcast-container">

          <div className="podcast-heading">
            <span>WATCH & LISTEN</span>

            <h2>
              Podcast & <strong>Interviews</strong>
            </h2>

            <p>
              Watch conversations, interviews and memorable moments
              from the journey of Trishant Priyavrat.
            </p>
          </div>

          <div className="podcast-grid">
            {videos.map((item) => (
              <div
                className="podcast-card"
                key={item.id}
                onClick={() => setSelectedVideo(item)}
              >
                <div className="podcast-video">

                  <video
                    src={item.video}
                    poster={item.thumbnail}
                    muted
                    preload="metadata"
                  />

                  <div className="podcast-overlay">
                    <div className="play-button">
                      <Play size={28} fill="currentColor" />
                    </div>
                  </div>

                </div>

                <div className="podcast-card-content">
                  <h3>{item.title}</h3>
                  <span>Watch Video →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div
          className="video-modal"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="video-close"
            onClick={() => setSelectedVideo(null)}
            aria-label="Close video"
          >
            <X size={30} />
          </button>

          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo.video}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Podcast;