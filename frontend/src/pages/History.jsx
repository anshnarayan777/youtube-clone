import { useEffect, useState } from "react";

const History = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("history")) || [];

    setVideos(savedHistory);
  }, []);

  const removeFromHistory = (id) => {
    const updatedVideos = videos.filter(
      (video) => video.id !== id
    );

    localStorage.setItem(
      "history",
      JSON.stringify(updatedVideos)
    );

    setVideos(updatedVideos);
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Watch History
      </h1>

      {videos.length === 0 ? (
        <p>No watched videos yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-zinc-900 rounded-lg overflow-hidden"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full"
              />

              <div className="p-4">
                <h2 className="font-bold">
                  {video.title}
                </h2>

                <p className="text-gray-400">
                  {video.channel}
                </p>

                <p className="text-gray-500">
                  {video.views} views
                </p>

                <button
                  onClick={() => removeFromHistory(video.id)}
                  className="mt-3 w-full bg-red-600 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default History;