//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) =>{
//console.log(err);
  if(err) {
  return console.log('Unable to connect Mongo Database Server');
  }
  console.log('Connected to Mongo Database Server');
  const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'something to do it differently'}).then((result) => {
    //   console.log(result);
    // });
    // db.collection('Todos').deleteOne({text: 'second text entry'}).then((result) => {
    //   console.log(result);
    // });
    db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
      console.log(result);
    });

  client.close();
});
