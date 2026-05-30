import { useState } from "react";

const VideoPage = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="text-white p-4">

      <div className="w-full h-[500px] bg-zinc-800 rounded-lg flex items-center justify-center">
        <h1 className="text-3xl">Video Player Area</h1>
      </div>

      <h1 className="text-2xl font-bold mt-4">
        Building a YouTube Clone with React
      </h1>

      <div className="flex gap-4 mt-4">

        <button
          onClick={() => setLikes(likes + 1)}
          className="bg-zinc-800 px-4 py-2 rounded"
        >
          👍 {likes}
        </button>

        <button
          onClick={() => setDislikes(dislikes + 1)}
          className="bg-zinc-800 px-4 py-2 rounded"
        >
          👎 {dislikes}
        </button>

      </div>

    </div>
  );
};

export default VideoPage;