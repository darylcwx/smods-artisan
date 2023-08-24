import connectToDB from "../../middleware/connection";
export default async function handler(req, res) {
	try {
		const client = await connectToDB();
		const db = client.db("SMA");
		const prices = await db.collection("Prices").find({}).toArray();
		res.status(200).json({ data: prices });
	} catch (error) {
		console.error("An error occurred:", error);
		res.status(500).json({ error: "An error occurred:" });
	}
}
