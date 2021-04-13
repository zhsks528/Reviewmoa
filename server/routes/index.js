const router = require("express").Router();
const product = require("../controllers/productController");
const review = require("../controllers/reviewController");

// 검색 API
router.get("/search", product.searchGet);
router.get("/search/:name", product.searchDetail);

// 제품 API
router.route("/products").get(product.productAll).post(product.productPost);
router
  .route("/products/:name")
  .get(product.productDetail)
  .put(product.productUpdate)
  .delete(product.prodcutDelete);

// 리뷰 API
router.route("/review").get(review.reviewAll);
router.route("/review/:name").get(review.reviewGet).post(review.reviewPost);
router
  .route("/review/:name/:id")
  .get(review.reviewDetail)
  .put(review.reviewUpdate)
  .delete(review.reviewDelete);

module.exports = router;
