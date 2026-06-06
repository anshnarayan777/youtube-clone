import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import videos from "../data/videos";

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const video = videos.find(
    (video) => video.id === Number(id)
  );

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [subscribed, setSubscribed] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    if (!video) return;

    const history =
      JSON.parse(localStorage.getItem("history")) || [];

    const alreadyExists = history.find(
      (item) => item.id === video.id
    );

    if (!alreadyExists) {
      history.push(video);

      localStorage.setItem(
        "history",
        JSON.stringify(history)
      );
    }
  }, [video]);

  const addComment = () => {
    if (comment.trim() === "") return;

    const regex = /^[a-zA-Z0-9\s]+$/;

    if (!regex.test(comment)) {
      alert("Special characters are not allowed!");
      return;
    }

    setComments([
      ...comments,
      {
        text: comment,
        city: "Lucknow",
        likes: 0,
        dislikes: 0,
      },
    ]);

    setComment("");
  };

  const handleLike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].likes += 1;
    setComments(updatedComments);
  };

  const handleDislike = (index) => {
    const updatedComments = [...comments];

    updatedComments[index].dislikes += 1;

    if (updatedComments[index].dislikes >= 2) {
      const filteredComments = updatedComments.filter(
        (_, i) => i !== index
      );

      setComments(filteredComments);
    } else {
      setComments(updatedComments);
    }
  };

  const deleteComment = (index) => {
    const updatedComments = comments.filter(
      (_, i) => i !== index
    );

    setComments(updatedComments);
  };

  if (!video) {
    return (
      <div className="text-white text-3xl">
        Video not found
      </div>
    );
  }

  return (
    <div className="flex gap-6 text-white p-4">

      {/* LEFT SIDE */}

      <div className="flex-1">

        <div className="w-full">
          <iframe
            width="100%"
            height="500"
            src={video.videoUrl}
            title={video.title}
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        <div className="mt-4">

          <h1 className="text-2xl font-bold">
            {video.title}
          </h1>

          <div className="flex justify-between items-center mt-4">

            <div>
              <h2
                className="font-bold text-lg cursor-pointer hover:text-red-500"
                onClick={() => navigate("/channel")}
              >
                {video.channel}
              </h2>

              <p className="text-gray-400 text-sm">
                {video.views} views
              </p>
            </div>

            <button
              onClick={() =>
                setSubscribed(!subscribed)
              }
              className={`px-5 py-2 rounded-full ${
                subscribed
                  ? "bg-gray-600"
                  : "bg-red-600"
              }`}
            >
              {subscribed
                ? "Subscribed"
                : "Subscribe"}
            </button>

          </div>

          <div className="flex gap-4 mt-4">

            <button
              onClick={() =>
                setLikes(likes + 1)
              }
              className="bg-zinc-800 px-4 py-2 rounded-full"
            >
              👍 {likes}
            </button>

            <button
              onClick={() =>
                setDislikes(dislikes + 1)
              }
              className="bg-zinc-800 px-4 py-2 rounded-full"
            >
              👎 {dislikes}
            </button>

            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  window.location.href
                );

                alert("Video link copied!");
              }}
              className="bg-zinc-800 px-4 py-2 rounded-full"
            >
              Share
            </button>

          </div>

          <div className="bg-zinc-900 p-4 rounded-lg mt-4">

            <p>
              {video.views} views
            </p>

            <p className="mt-2">
              This is a YouTube-inspired
              application built using React,
              React Router, Tailwind CSS and
              localStorage.
            </p>

          </div>

        </div>

        {/* COMMENTS */}

        <div className="mt-8">

          <h2 className="text-xl font-bold mb-4">
            Comments
          </h2>

          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) =>
                setComment(e.target.value)
              }
              className="flex-1 bg-zinc-900 p-3 rounded outline-none"
            />

            <button
              onClick={addComment}
              className="bg-red-500 px-4 rounded"
            >
              Post
            </button>

          </div>

          <div className="mt-6 space-y-4">

            {comments.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-4 rounded"
              >
                <p className="font-bold">
                  Mrityunjay • {item.city}
                </p>

                <p className="mt-2">
                  {item.text}
                </p>

                <div className="flex gap-3 mt-3">

                  <button
                    onClick={() =>
                      handleLike(index)
                    }
                    className="bg-zinc-800 px-3 py-1 rounded"
                  >
                    👍 {item.likes}
                  </button>

                  <button
                    onClick={() =>
                      handleDislike(index)
                    }
                    className="bg-zinc-800 px-3 py-1 rounded"
                  >
                    👎 {item.dislikes}
                  </button>

                  <button
                    onClick={() =>
                      deleteComment(index)
                    }
                    className="bg-red-600 px-3 py-1 rounded"
                  >
                    🗑 Delete
                  </button>

                </div>

                <p className="text-xs text-gray-400 mt-2">
                  Comment will be auto-deleted
                  after 2 dislikes
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="w-80">

        <h2 className="text-xl font-bold mb-4">
          Recommended Videos
        </h2>

        {videos
          .filter((item) => item.id !== video.id)
          .map((item) => (
            <div
              key={item.id}
              onClick={() =>
                navigate(`/video/${item.id}`)
              }
              className="mb-4 cursor-pointer bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full"
              />

              <div className="p-3">

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.channel}
                </p>

              </div>

            </div>
          ))}

      </div>

    </div>
  );
};

export default VideoPage;