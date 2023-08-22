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
const connectToDB = async () => {
	try {
		await client.connect();
		console.log("Successfully connected to MongoDB!");
		return client;
	} catch (error) {
		console.log(error.message);
	}
};

export default connectToDB;
