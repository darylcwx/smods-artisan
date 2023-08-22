import connectToDB from "../../middleware/connection";

export default async (req, res) => {
	try {
		const client = await connectToDB();
		const db = client.db("SMA");
		const price = await db.collection("Prices").find({ name: { req.name }}).toArray();
		// res.statusCode = 200;
		// res.setHeader("Content-Type", "application/json");
		res.json(price);
	} catch (error) {
		console.error(error);
		res.json(error);
	}
};
