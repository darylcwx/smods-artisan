import connectToDB from "../../middleware/connection";
export default async function handler(req, res) {
	//const { title, content } = req.body;
	try {
		const client = await connectToDB();
		const db = client.db("SMA");
		const watches = await db
			.collection("Watches")
			.updateMany({}, { $set: { likes: 0 } });
		return watches;
	} catch (error) {
		console.error("An error occurred:", error);
	}
}
