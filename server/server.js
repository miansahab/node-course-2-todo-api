var express = require('express');
var {mongoose} = require('./db/mongoose');
var bodyParser = require('body-parser');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(req.body);
    var todo = new Todo({
      text: req.body.text
    });
    todo.save().then((doc) => {
      res.send(doc)
    }, (e) => {
      res.status(404).send(e);
    });
});



app.listen(3000, () =>{
  console.log('app is listening on 3000');
})

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((docs) => {
//   console.log(docs);
// }, (e) => {
//   console.log('Unable to save Todp');
// });

// var OtherTodo = new Todo({
//   text: 'Cook murgh chohlay'
// });
//
// OtherTodo.save().then((docs) => {
//   console.log(JSON.stringify(docs));
// }, (e) => {
//   console.log('Unable to save Todp');
// });

// User
// email - require it - trim it - set type - set min length of 1


// var user = new User({
//   email: 'msa413@gmail.com   '
// });
//
// user.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// });
