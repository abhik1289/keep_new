
import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
const client = new MongoClient("mongodb://localhost:27017/test");

client.connect().then(() => {
  console.log("Connected to MongoDB");
});

export default client;




