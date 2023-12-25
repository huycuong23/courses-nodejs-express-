const Course = require("../models/courses");
const mongooseToObject = require("../../until/mongoose");

class SiteController {
  // [get] /
  index(req, res, next) {
    Course
      .find({})
      .then(function (courses) {
        courses = mongooseToObject.muntipleMongooseToObject(courses);
        if (req.query.course) {
          courses.map((course,ind) => {
            if (!course.name.includes(req.query.course)) {
              courses.splice(ind, 1);
            }
          });
        }
        res.render("home", { courses });
      })
      .catch(next);
  }
  // [get] /search
  search(req, res) {
    res.send("search not found");
  }
}
module.exports = new SiteController();
