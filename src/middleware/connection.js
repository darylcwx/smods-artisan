import { MongoClient, ServerApiVersion } from "mongodb";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});
const connectToDB = async () => {
	try {
		// Connect the client to the server
		await client.connect();
		// Send a ping to confirm a successful connection
		console.log("Successfully connected to MongoDB!");
		return client;
	} catch (error) {
		console.log(error.message);
	}
};

export default connectToDB;
