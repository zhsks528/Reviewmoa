// Model
const Product = require("../model/products");

// Controller
exports.searchGet = (req, res) => {
  Product.find((err, data) => {
    if (err) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.searchDetail = (req, res) => {
  const products = req.params.name;

  Product.find({ name: { $regex: products } }, (err, data) => {
    if (err) {
      res.status(500).json("error");
    } else {
      res.status(200).json(data);
    }
  });
};

// 전체 제품 목록 조회
exports.productAll = (req, res) => {
  Product.find((err, data) => {
    if (err) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.productDetail = (req, res) => {
  Product.findOne({ name: req.params.name })
    .populate("reviews")
    .then((result) => {
      res.json(result);
    })
    .catch((error) => res.status(500).json(error));
};

// 제품 생성
exports.productPost = (req, res) => {
  // 제품 모델 생성
  const productModel = new Product({
    name: req.body.name,
    stars: req.body.stars,
  });

  // 제품 모델 저장
  productModel
    .save()
    .then((newProduct) => {
      console.log("제품이 생겼습니다.");
      res.status(201).json({
        product: newProduct,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: errr,
      });
    });
};

// 제품 삭제
exports.prodcutDelete = (req, res) => {
  Product.findByIdAndDelete(req.params.name, (err, data) => {
    console.log(req.params);
    if (err) {
      return res.status(500).send("제품을 삭제하지 못했습니다.");
    }

    res.status(200).send(`"제품 제목 : ${data.name}가 삭제되었습니다`);
  });
};

// 제품 수정
exports.productUpdate = (req, res) => {
  Product.findByIdAndUpdate(
    req.params.name,
    req.body,
    { new: true },

    (err, data) => {
      if (err) {
        return res.status(500).json("제품을 수정하지 못했습니다.");
      }

      res.status(200).send(data);
    }
  );
};
