//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) =>{
//console.log(err);
  if(err) {
  return console.log('Unable to connect Mongo Database Server');
  }
  console.log('Connected to Mongo Database Server');
  const db = client.db('TodoApp');



  // db.collection('Todos').insertOne({
  //   text: 'something to do it differently',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     console('Unable to Insert data', err);
  //   } else {
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // });
  db.collection('Users').insertOne({
    email: 'msa413@gmail.com',
    password: 'asdasdas'
  }, (err, result) => {
    if (err) {
      console('Unable to Insert data', err);
    } else {
      console.log(result.ops[0]._id.getTimestamp());
    }
  });
  client.close();
});
