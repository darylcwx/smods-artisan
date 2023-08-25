import { MongoClient, ServerApiVersion } from "mongodb";
// Vercel's env variables
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});
export default function connectToDB() {
	try {
		client.connect();
		console.log("Successfully connected to MongoDB!");
		return client;
	} catch (error) {
		console.log(error.message);
	}
}
