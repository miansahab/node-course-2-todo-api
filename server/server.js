var express = require('express');
var {mongoose} = require('./db/mongoose');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

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

app.get('/todos', (req, res) => {

    Todo.find().then((todos) => {
      res.send({todos});
    });

}, (e) => {
    res.status(400).send(e);
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, () =>{
  console.log(`app is listening on ${port}`);
})

module.exports = app;

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
