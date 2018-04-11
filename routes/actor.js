var express = require ('express');
var router = express.Router();
var actor_dal = require('../dal/actor_dal');

router.get('/all',function(req,res, next)
{
    actor_dal.getActor(function (err,result) {
        if(err) {

            console.log(err);
            res.send(err);

        }else {
            console.log(result);
            res.render('actor/actor_view_all', {actors: result});
        }


    })


});

module.exports = router;