const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 스키마 정의
const reviewSchema = new Schema(
  {
    reviewState: {
      title: { type: String, required: true },
      content: { type: String, required: true },
      gender: { type: String, required: true },
      age: { type: Number, required: true },
    },
    surveyState: {
      tech: { type: Number },
      price: { type: Number },
      brand: { type: Number },
    },
    product: { type: Schema.Types.ObjectId, ref: "product" },
  },
  {
    timestamps: true,
  }
);

reviewSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("review", reviewSchema);
