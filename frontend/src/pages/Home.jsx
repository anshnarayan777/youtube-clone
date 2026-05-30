import VideoCard from "../components/VideoCard";

const Home = () => {

  const videos = [
    {
      title: "React Tutorial",
      channel: "CodeWithHarry",
      views: "10K",
      thumbnail: "https://picsum.photos/400/250?random=1"
    },
    {
      title: "Node.js Crash Course",
      channel: "Traversy Media",
      views: "25K",
      thumbnail: "https://picsum.photos/400/250?random=2"
    },
    {
      title: "MongoDB Guide",
      channel: "Programming Guru",
      views: "7K",
      thumbnail: "https://picsum.photos/400/250?random=3"
    },
    {
      title: "Tailwind CSS",
      channel: "Frontend Master",
      views: "15K",
      thumbnail: "https://picsum.photos/400/250?random=4"
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
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