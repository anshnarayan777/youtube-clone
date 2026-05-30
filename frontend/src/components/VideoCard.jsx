const VideoCard = ({ title, channel, views, thumbnail }) => {
  return (
    <div className="cursor-pointer">
      <img
        src={thumbnail}
        alt={title}
        className="w-full rounded-lg"
      />

      <div className="mt-2">
        <h3 className="text-white font-semibold">
          {title}
        </h3>

        <p className="text-gray-400 text-sm">
          {channel}
        </p>

        <p className="text-gray-500 text-sm">
          {views} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;