class NewsController {

    // [get] /
    index(req, res) {
        res.render("news");
    }
}
module.exports = new NewsController;