const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:3000';
const DB_NAME = 'Ebyrt';

module.exports = () => 
  MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db(DB_NAME))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
