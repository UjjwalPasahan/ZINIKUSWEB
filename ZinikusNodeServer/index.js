const express = require("express");
const server = express();
// const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet =require("helmet")

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://technologyzinikus:RlqAholaDWONzoRS@cluster0.byasjtz.mongodb.net/zinikus"
  );
  console.log("db connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// for Newsletter
const newsletterSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  tick: Boolean, // This field represents the checkbox value
});

const newsletter = mongoose.model("newsletter", newsletterSchema);
// server.use(cors());
server.use(bodyParser.json());
server.use(helmet());

server.post("/zinikus", async (req, res) => {
  let news = new newsletter();
  news.name = req.body.name;
  news.email = req.body.email;
  news.phone = req.body.phone;
  news.tick = req.body.tick;

  const doc = await news.save();
  console.log(doc);
  res.json(doc);
});

server.get("/zinikus", async (req, res) => {
  const docs = await newsletter.find({});
  res.json(docs);
});

// for Feedback
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  opinions: String,
  suggestions: String,
  rating: Number,
});

const feedback = mongoose.model("feedback", feedbackSchema);
// server.use(cors());
server.use(helmet());
server.use(bodyParser.json());

server.post("/zinikusFeedback", async (req, res) => {
  let feed = new feedback();
  feed.name = req.body.name;
  feed.email = req.body.email;
  feed.opinions = req.body.opinions;
  feed.suggestions = req.body.suggestions;
  feed.rating = req.body.rating; // Include the rating from the request

  const doc = await feed.save();
  console.log(doc);
  res.json(doc);
});

server.get("/zinikusFeedback", async (req, res) => {
  const docs = await feedback.find({});
  res.json(docs);
});

server.listen(8080, () => {
  console.log("server started");
});
