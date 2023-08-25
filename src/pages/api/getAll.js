import connectToDB from "../../middleware/connection";
export default async function handler(req, res) {
	//const { title, content } = req.body;
	try {
		const client = await connectToDB();
		const db = client.db("SMA");
		const watches = await db.collection("Watches").find({}).toArray();
		return watches;
	} catch (error) {
		console.error("An error occurred:", error);
	}
}
