const Course = require("../models/courses");
const mongooseToObject = require("../../until/mongoose");

class MeController {
  // [get] /stored/course
  storedCourse(req, res) {
    Course.find({}).then((course) => {
      const courses = mongooseToObject.muntipleMongooseToObject(course);
      res.render("me/stored-courses", { courses, helpers: {
        sum: (a, b) => a + b,
    } });
    })
    .catch((err) => {
        res.send("error: " + err.message)
    })
  }
  // [get] /stored/news
  storedNews(req, res) {
    res.send("storedNews");
  }
}
module.exports = new MeController();
