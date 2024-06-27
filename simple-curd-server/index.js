const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// MiddleWare

app.use(cors());
app.use(express.json());

// niazmorshedrafi
//

const uri =
  "mongodb+srv://niazmorshedrafi:2gp0mGaGex6vk9X5@cluster0.pyoefad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();  --=============== ====           =============================
    const database = client.db("UsersDB");
    const userCollection = database.collection("Users");

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log("New User -", user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      console.log(id, user);
      const filter = { _id: new ObjectId(id) };
      // const options = { upsert: true };
      const updatedUser = {
        $set : {
          name : user.name,
          mail : user.mail
        }
      }

      const result = await userCollection.updateOne(filter, updatedUser, options);
      res.send(result)
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log("Please delete from database", id);
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 }); ------------------------------ ---  ---
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("SIMPLE CURD IS RUNNING");
});

app.listen(port, (req, res) => {
  console.log(`SIMPLE CURD IS RUNNING ON PORT, - ${port}`);
});
