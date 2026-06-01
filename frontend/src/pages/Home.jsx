import VideoCard from "../components/VideoCard";
import videos from "../data/videos";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          thumbnail={video.thumbnail}
        />
      ))}
    </div>
  );
};

export default Home;