const Course = require('../models/Course');
const { mutipleMongooseToOject } = require('../../util/mongoose');
class SiteController {
    // [GET] /Home || //
    index(req, res, next) {

        Course.find({

        }).then(courses => {
            courses = courses.map(course => course.toObject());
            res.render('home', { courses }); //courses: mutipleMongooseToOject(courses)
        }).catch(next);
        //res.render('home');


    }

    // [GET] /Search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
