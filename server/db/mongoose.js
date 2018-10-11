var mongoose = require('mongoose');

mongoose.promise = global.promise;

mongoose.set('useCreateIndex', true);       //https://stackoverflow.com/questions/51916630/mongodb-mongoose-collection-find-options-deprecation-warning
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
