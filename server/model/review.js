const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 스키마 정의
const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    satisfaction: {
      tech: { type: String },
      price: { type: String },
      brand: { type: String },
    },
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
