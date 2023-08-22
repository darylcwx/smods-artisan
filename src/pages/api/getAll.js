import connectToDB from "../../middleware/connection";

export default async (req, res) => {
	try {
		const client = await connectToDB();
		const db = client.db();
		const movies = await db.collection("people").find({}).toArray();
		// res.statusCode = 200;
		// res.setHeader("Content-Type", "application/json");
		res.json(movies);
	} catch (error) {
		console.error(error);
		res.json(error);
	}
};
