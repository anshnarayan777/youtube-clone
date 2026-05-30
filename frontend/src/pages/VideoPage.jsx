import { useState } from "react";

const VideoPage = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment.trim() === "") return;

    setComments([
      ...comments,
      {
        text: comment,
      },
    ]);

    setComment("");
  };

  return (
    <div className="text-white p-4">

      <div className="w-full h-[500px] bg-zinc-800 rounded-lg flex items-center justify-center">
        <h1 className="text-3xl">Video Player Area</h1>
      </div>

      <h1 className="text-2xl font-bold mt-4">
        Building a YouTube Clone
      </h1>

      <div className="mt-8">

        <h2 className="text-xl font-bold mb-4">
          Comments
        </h2>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 bg-zinc-900 p-3 rounded outline-none"
          />

          <button
            onClick={addComment}
            className="bg-red-500 px-4 rounded"
          >
            Post
          </button>

        </div>

        <div className="mt-6 space-y-3">

          {comments.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-3 rounded"
            >
              <p className="font-bold">
                Mrityunjay
              </p>

              <p>
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default VideoPage;