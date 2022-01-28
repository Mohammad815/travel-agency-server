const express = require('express')
const { MongoClient } = require('mongodb');
const app = express()
require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ns6st.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri)

async function run() {
    try {
      await client.connect();
      console.log('database conntected')
     
    } finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})