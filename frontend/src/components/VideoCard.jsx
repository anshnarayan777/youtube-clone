import { Link } from "react-router-dom";

const VideoCard = ({ id, title, channel, views, thumbnail }) => {
  const addToWatchLater = () => {
    const savedVideos =
      JSON.parse(localStorage.getItem("watchLater")) || [];

    const alreadyExists = savedVideos.find(
      (video) => video.id === id
    );

    if (alreadyExists) {
      alert("Video already in Watch Later");
      return;
    }

    savedVideos.push({
      id,
      title,
      channel,
      views,
      thumbnail,
    });

    localStorage.setItem(
      "watchLater",
      JSON.stringify(savedVideos)
    );

    alert(`${title} added to Watch Later`);
  };

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg">

      <Link to={`/video/${id}`}>
        <img
          src={thumbnail}
          alt={title}
          className="w-full rounded-t-lg"
        />

        <div className="p-3">
          <h3 className="text-white font-semibold">
            {title}
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            {channel}
          </p>

          <p className="text-gray-500 text-sm">
            {views} views
          </p>
        </div>
      </Link>

      <div className="p-3">
        <button
          onClick={addToWatchLater}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded"
        >
          Watch Later
        </button>
      </div>

    </div>
  );
};

export default VideoCard;