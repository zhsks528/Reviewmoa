// Model
const Review = require("../../model/review");

// Controller
exports.reviewGet = (req, res) => {
  Review.find((err, data) => {
    if (err) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.reviewPost = (req, res) => {
  const { data } = req.body;

  console.log(data);
  const reviewModel = new Review();
  reviewModel.reviewState = data.reviewState;
  reviewModel.surveyState = data.surveyState;

  reviewModel
    .save()
    .then((newReview) => {
      console.log("리뷰가 생겼습니다.");
      res.status(201).json({
        message: "리뷰 생성 완료",
        data: {
          review: newReview,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: errr,
      });
    });
};

exports.reviewDetail = (req, res) => {
  Review.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).json({ error: err });
    }

    if (!data) {
      res.status(404).json({ error: "데이터를 찾지 못했습니다." });
    }

    console.log(data);
    res.status(200).json(data);
  });
};

exports.reviewDelete = (req, res) => {
  Review.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).send("리뷰를 삭제하지 못했습니다.");
    }

    res.status(200).send(`"Review 제목 : ${data.name}가 삭제되었습니다`);
  });
};

exports.reviewUpdate = (req, res) => {
  Review.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },

    (err, data) => {
      if (err) {
        return res.status(500).json("Review를 수정하지 못했습니다.");
      }

      res.status(200).send(data);
    }
  );
};

exports.reviewGender = (req, res) => {
  Review.find({}, { "reviewState.gender": 1 }, (err, data) => {
    if (err) {
      res.status(500).json("error");
    } else {
      res.status(200).json(data);
    }
  });
};

exports.reviewAge = (req, res) => {
  Review.find({}, { "reviewState.age": 1 }, (err, data) => {
    if (err) {
      res.status(500).json("error");
    } else {
      res.status(200).json(data);
    }
  });
};
