const { default: mongoose } = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const schema = mongoose.Schema;

const Course = new schema(
  {
    name: { type: "string", maxLength: 255 },
    decription: { type: "string", maxLength: 600 },
    image: { type: "string", maxLength: 255 },
    videoId: { type: "string", maxLength: 255 },
    level: { type: "string", maxLength: 255 },
    slug: { type: "string", slug: "name" },
  },
  {
    timestamps: true,
  }
);
//add plugins to mongoose
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

module.exports = mongoose.model("Course", Course);
