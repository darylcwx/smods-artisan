import connectToDB from "../../middleware/connection";

export default async (req, res) => {
	try {
		const client = await connectToDB();
		const db = client.db("SMA");
		const prices = await db.collection("Prices").find({}).toArray();
		return prices;
	} catch (error) {
		console.error(error);
		return;
	}
};
