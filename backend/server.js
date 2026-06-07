const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://pandeyansh662_db_user:jayansh@youtube-clone.lgbsoeu.mongodb.net/?appName=youtube-clone"
)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((error) => {
    console.log("❌ MongoDB Error:");
    console.log(error);
  });

// Video Schema
const videoSchema = new mongoose.Schema({
  title: String,
  channel: String,
  views: String,
  thumbnail: String,
  videoUrl: String,
});

// Video Model
const Video = mongoose.model("Video", videoSchema);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

// Get Videos
app.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching videos",
    });
  }
});

// Start Server
app.listen(5000, () => {
  console.log(
    "🚀 Server running on http://localhost:5000"
  );
});