var express = require('express');
var router = express.Router();
var Schema = require('./models/schema')

router.get('/get',function (request,response) {
  Schema.find({},function (error,result) {
    if(error)
      throw error;
    else
      response.send(result);
  })
});

router.post('/post',function (request,response) {
  schema = new Schema({
    FirstName: request.body.FirstName,
    LastName: request.body.LastName
  });
  
  schema.save(function (error,result) {
    if(error)
      throw error;
    else
      response.send(result);
  });
});

router.post('/put/:id',function (request,response) {
  Schema.findByIdAndUpdate({_id:request.params.id},{$set:{FirstName:request.body.FirstName, LastName: request.body.LastName}},function (error,result) {
    if(error)
      throw error;
    else
      response.send(result);
  })
});

router.delete('/delete/:id',function (request,response) {
  Schema.remove({_id:request.params.id},function (error,result) {
    if(error)
      throw error;
    else
      response.json({message: 'Successfully deleted'})
  })
})
module.exports = router;