const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    info: { type: String, required: true },
    stars: { type: Number },
    reviews: [{ type: Schema.Types.ObjectId, ref: "review" }],
  },
  {
    timestamps: true,
  }
);

productSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("product", productSchema);
