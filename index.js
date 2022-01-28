const express = require('express')
const { MongoClient } = require('mongodb');
const app = express()
require('dotenv').config()
const cors = require('cors');
const ObjectId = require("mongodb").ObjectId;
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ns6st.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri)

async function run() {
    try {
      await client.connect();
      console.log('database conntected')

      const database = client.db('travel_agency');
      const productsCollection = database.collection('users_experience');
     
      app.post("/AddExperience", async (req, res) => {
        // console.log(req.body);
        const result = await productsCollection.insertOne(req.body);
        res.send(result);
     });

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