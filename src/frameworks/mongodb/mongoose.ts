import mongoose from 'mongoose';

// Mongoose DB connection
function connectMongoDB(DB_NAME: string, DB_USER: string, DB_PASS: string) {
  let MONGO_URI: string = 'mongodb+srv://' + DB_USER + ':' + DB_PASS + '@cluster0.ca0jy.mongodb.net/' + DB_NAME + '?retryWrites=true&w=majority'
  return new Promise((resolve, reject) => {
      // mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(
      mongoose.connect(MONGO_URI).then(
      () => {
        resolve(console.log('Connection to DB ' +  DB_NAME + ' succesfully '))
      },
      err => {
        reject(console.log('Connection error: ' + err))
      }
    );
  })

}

async function disconnectMongoDB(){
    await mongoose.disconnect();
}

export default {
  connectMongoDB,
  disconnectMongoDB
}
