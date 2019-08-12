// mongodb+srv://<username>:<password>@mycluster-9dlye.mongodb.net/test?retryWrites=true&w=majority

const MongoClient = require('mongodb').MongoClient;

const log = {
  dbName: 'Todo',
  username: 'giedrius1989',
  password: 'b1o1n1i1s'
};

const url = `mongodb+srv://${log.username}:${
  log.password
}@mycluster-9dlye.mongodb.net/${log.dbName}?retryWrites=true&w=majority`;

const mongoConnect = callback => {
  MongoClient.connect(url, { useNewUrlParser: true })
    .then(response => {
      callback(response.db());
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;
