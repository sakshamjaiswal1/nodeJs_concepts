const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/SakshamJaiswal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

const playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});
const Playlist = new mongoose.model("Playlist", playlistSchema);
const createDocument = async () => {
  try {
    const cssPlaylist = new Playlist({
      name: "Saksham Jaiswal",
      ctype: "css",
      videos: 10,
      author: "Saksham",
      active: true,
    });
    const dbPlaylist = new Playlist({
      name: "Saksham Jaiswal",
      ctype: "database",
      videos: 20,
      author: "Saksham",
      active: true,
    });
    const mongoosePlaylist = new Playlist({
      name: "Saksham Jaiswal",
      ctype: "mongoose",
      videos: 30,
      author: "Saksham",
      active: true,
    });
    const expressPlaylist = new Playlist({
      name: "Saksham Jaiswal",
      ctype: "express",
      videos: 5,
      author: "Saksham",
      active: true,
    });
    const result = await Playlist.insertMany([
      cssPlaylist,
      dbPlaylist,
      mongoosePlaylist,
      expressPlaylist,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// createDocument()

const getDocument = async () => {
  const result = await Playlist.find({ctype:{$nin:['express','mongoose']}});
  console.log(result);
};
getDocument()