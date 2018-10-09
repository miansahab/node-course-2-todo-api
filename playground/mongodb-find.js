//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) =>{
//console.log(err);
  if(err) {
  return console.log('Unable to connect Mongo Database Server');
  }
  console.log('Connected to Mongo Database Server');
  const db = client.db('TodoApp');

  db.collection('Todos').find().count().then((count) => {
    console.log('Total Count: ',count);
  }, (err) => {
    console.log('Unable to fetch data', err);
  });

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     console('Unable to Insert data', err);
  //   } else {
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // });
  // db.collection('Users').insertOne({
  //   name: 'Shahbaz',
  //   age: 30,
  //   location: 'Lahore'
  // }, (err, result) => {
  //   if (err) {
  //     console('Unable to Insert data', err);
  //   } else {
  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  // });
  client.close();
});
