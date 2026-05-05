import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
// const client = new MongoClient("mongodb+srv://dragon-news:dragon-news@cluster0.1oyxlzy.mongodb.net/?appName=Cluster0")
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),

  emailAndPassword: { 
    enabled: true, 
  },
});