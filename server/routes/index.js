const router = require("express").Router();
const main = require("./Controller/mainController");
const review = require("./Controller/reviewController");

router.get("/", main.mainView);

// Reivew 생성
router.post("/review", review.reviewPost);

// Reivew 전체 조회
router.get("/review", review.reviewGet);

// Review 성별 데이터 조회
router.get("/review/gender", review.reviewGender);

// Review 연령별 데이터 조회
router.get("/review/age", review.reviewAge);

// Review 개별 조회
router.get("/review/:id", review.reviewDetail);

// Review 개별 삭제
router.delete("/review/:id", review.reviewDelete);

// Review 개별 수정
router.put("/review/:id", review.reviewUpdate);

module.exports = router;
