require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

async function test() {
  try {
    console.log("URI:", uri);

    const client = new MongoClient(uri);

    await client.connect();

    console.log("✅ Connected Successfully!");

    await client.close();
  } catch (err) {
    console.error(err);
  }
}

test();