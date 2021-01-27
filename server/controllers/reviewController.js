// Model
const Review = require("../model/review");
const Product = require("../model/products");

// Controller
exports.reviewAll = (req, res) => {
  Product.find((err, data) => {
    if (err) {
      res.status(500).send(errpr);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.reviewGet = (req, res) => {
  const products = req.params.name;
  Product.find(
    { name: products },
    null,
    { sort: { createdAt: -1 } },
    (err, data) => {
      if (err) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    }
  );
};

exports.reviewPost = async (req, res) => {
  const productName = req.params.name;

  console.log(req.body);
  const reviewModel = new Review({
    reviewState: req.body.reviewState,
    surveyState: req.body.surveyState,
  });

  reviewModel
    .save()
    .then((newReview) => {
      Product.findOne({ name: productName }, (err, product) => {
        if (product) {
          product.reviews.push(newReview);
          product.save();
          res.status(201).json(product);
        }
      });
    })
    .catch((error) => {
      res.status(500).json(error);
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
    console.log(data);
    if (err) {
      return res.status(500).send("리뷰를 삭제하지 못했습니다.");
    }

    res
      .status(200)
      .send(`"Review 제목 : ${data.reviewState.title}가 삭제되었습니다`);
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
