import connectToDB from "../../middleware/connection";
export default async function handler(req, res) {
	try {
		const client = await connectToDB();
		const db = client.db("SMA");
		const prices = await db.collection("Prices").find({}).toArray();
		return prices;
	} catch (error) {
		console.error("An error occurred:", error);
	}
}
