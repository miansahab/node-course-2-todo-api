const ObjectID = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bbd9668b4781a100846d8e';

// if(!ObjectID.isValid(id)){
//   console.log('Id not found');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo ', todo);
// });
//
// Todo.findById(id).then((todos) => {
//   if(!todos) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id ', todos);
// }). catch ((e) => console.log(e));

User.findById('5bbd99da72b505102ddcf041').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
