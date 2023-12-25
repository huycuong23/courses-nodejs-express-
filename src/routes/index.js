const newsRouter = require("../routes/news")
const siteRouter = require("../routes/site")
const courseRouter = require("../routes/course")
const meRouter = require("../routes/me")

function route(app) {
    app.use("/me", meRouter);
    app.use("/news", newsRouter);
    app.use("/course", courseRouter);
    app.use("/", siteRouter);
}
module.exports = route;
