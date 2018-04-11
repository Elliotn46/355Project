var express = require ('express');
var router = express.Router();
var director_dal = require('../dal/director_dal');

router.get('/all',function(req,res, next)
{
    director_dal.getDirector(function (err,result) {
        if(err) {

            console.log(err);
            res.send(err);

        }else {
            console.log(result);
            res.render('director/director_view_all', {directors: result});
        }


    })


});

module.exports = router;