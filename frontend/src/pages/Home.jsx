import VideoCard from "../components/VideoCard";
import videos from "../data/videos";

const Home = ({ searchTerm }) => {
  const filteredVideos = videos.filter((video) =>
    video.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

      {filteredVideos.length > 0 ? (
        filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            views={video.views}
            thumbnail={video.thumbnail}
          />
        ))
      ) : (
        <h1 className="text-white text-2xl">
          No videos found
        </h1>
      )}

    </div>
  );
};

export default Home;