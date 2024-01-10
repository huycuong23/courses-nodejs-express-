const Course = require("../models/courses");
const mongooseToObject = require("../../until/mongoose");

class MeController {
  // [get] /stored/course
  storedCourse(req, res) {
    Promise.all([
      Course.find({}),
      Course.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([course, deletedCount]) => {
        const courses = mongooseToObject.muntipleMongooseToObject(course);
        res.render("me/stored-courses", {
          courses,
          deletedCount,
          helpers: {
            sum: (a, b) => a + b,
          },
        });
      })
      .catch((err) => {
        res.send("error: " + err.message);
      });
  }
  // [get] /stored/news
  storedNews(req, res) {
    res.send("storedNews");
  }
  trashCourse(req, res) {
    Course.findWithDeleted({ deleted: true })
      .then((course) => {
        const courses = mongooseToObject.muntipleMongooseToObject(course);
        res.render("me/trash-courses", {
          courses,
          helpers: {
            sum: (a, b) => a + b,
          },
        });
      })
      .catch((err) => {
        res.send("error: " + err.message);
      });
  }
}
module.exports = new MeController();
