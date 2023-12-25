const Course = require("../models/courses");
const mongooseToObject = require("../../until/mongoose");

class CourseController {
  // [get] /
  index(req, res, next) {
    // course.findOne({slug: req.query.course}).then(course => {
    //   course = mongooseToObject.simpleMongooseToObject(course);
    //   res.render("courses/detail" , {course});
    // })
    // .catch(err => {
    //   res.send("Error");
    // });
    res.send("COURSE HOME PAGE");

  }
  show(req, res, next) {
    Course.findOne({slug: req.params.slug}).then(course => {
      course = mongooseToObject.simpleMongooseToObject(course);
      res.render("courses/detail" , {course});
    })
    .catch(err => {
      res.send("Error");
    });
  }
  edit(req, res, next) {
    Course.findById(req.params.id).then(course => {
      course = mongooseToObject.simpleMongooseToObject(course);
      res.render("courses/edit", {course});
    });
  }
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/default.jpg`;
    var course = new Course(formData);
    course.save()
    .then(()=> {
      res.redirect("/");
    }).catch(err => {
      res.send(err);
    });
  }
  new(req, res, next) {
    res.render("courses/new");
  }

  //PUT courses/:id
  update(req, res, next) {
    Course.updateOne({id: req.params.id}, req.body)
    .then(()=> {
      res.redirect("/me/stored/course");
    });
  };
}
module.exports = new CourseController();
