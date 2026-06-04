import videos from "../data/videos";

const Channel = () => {
  const channelVideos = videos.filter(
    (video) => video.channel === "CodeWithHarry"
  );

  return (
    <div className="text-white p-6">

      <div className="bg-zinc-900 p-6 rounded-lg">

        <h1 className="text-4xl font-bold">
          CodeWithHarry
        </h1>

        <p className="text-gray-400 mt-2">
          1.2M Subscribers
        </p>

        <p className="mt-4">
          Welcome to the CodeWithHarry channel.
          Learn React, JavaScript, Node.js and
          modern web development.
        </p>

      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Videos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {channelVideos.map((video) => (
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

              <h3 className="font-bold">
                {video.title}
              </h3>

              <p className="text-gray-400">
                {video.views} views
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Channel;