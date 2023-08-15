import { useEffect, useState } from "react";
import { getAllVideos } from "../services/VideosService";

function Homepage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getAllVideos().then((videos) => {
      setVideos(videos);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="header">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">TokpedPlay</a>
          </div>
          <div className="flex-none">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="grid grid-cols-6 gap-4 mt-6">
          {videos.map((video) => {
            return (
              <div className="card" key={video._id}>
              <figure className="relative max-w-sm cursor-pointer">
                <a href={`/videos/${video._id}`}>
                  <img
                    className="rounded-lg"
                    src={video.thumbnailUrl}
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute px-4 text-lg text-white bottom-6">
                  <p>
                   {video.title}
                  </p>
                </figcaption>
              </figure>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
