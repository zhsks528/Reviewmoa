// Importing
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Pusher = require("pusher");
const routes = require("./routes/");

// App Config
const app = express();
const port = process.env.PORT || 8000;

const pusher = new Pusher({
  appId: "1139743",
  key: "1ce835c5a0bc771a63a7",
  secret: "1558c503e54e2d5ebcba",
  cluster: "ap3",
  useTLS: true,
});

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// DB Config
const connection_url =
  "mongodb+srv://Seongmin:547956juju!@reviewmoa-cluster.v1czn.mongodb.net/reviewmoa?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB 연결");

  const reviewCollection = db.collection("reviews");
  const changeStream = reviewCollection.watch();

  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const { reviewState, surveyState } = change.fullDocument;
      pusher.trigger("review", "inserted", {
        reviewState: reviewState,
        surveyState: surveyState,
      });
    } else {
      console.log("pusher trigger 오류");
    }
  });
});

// API Routes
app.use(routes);

// Listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
