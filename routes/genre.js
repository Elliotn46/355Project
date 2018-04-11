var express = require ('express');
var router = express.Router();
var genre_dal = require('../dal/genre_dal');

router.get('/all',function(req,res, next)
{
    genre_dal.getGenre(function (err,result) {
        if(err) {

            console.log(err);
            res.send(err);

        }else {
            console.log(result);
            res.render('genre/genre_view_all', {genres: result});
        }


    })


});

module.exports = router;