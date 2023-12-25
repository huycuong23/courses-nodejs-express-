const { default: mongoose } = require("mongoose");
const slug = require("mongoose-slug-generator");
const schema = mongoose.Schema;

mongoose.plugin(slug);
const course = new schema({
    name: { type: "string", maxLength: 255 },
    decription: { type: "string", maxLength: 600 },
    image: { type: "string", maxLength: 255 },
    videoId: { type: "string", maxLength: 255 },
    level: { type: "string", maxLength: 255 },
    slug: { type: "string", slug: "name"},
},{
    timestamps: true
})

module.exports = mongoose.model("Course", course);
