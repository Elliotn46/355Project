var express = require ('express');
var router = express.Router();
var movie_dal = require('../dal/movie_dal');

router.get('/all',function(req,res, next)
{
    movie_dal.getMovie(function (err,result) {
        if(err) {

            console.log(err);
            res.send(err);

        }else {
            console.log(result);
            res.render('movie/movie_view_all', {movies: result});
        }


    })


});

module.exports = router;