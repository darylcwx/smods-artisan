import connectToDB from "../../middleware/connection";

const getAll = async (req, res) => {
	try {
		const client = await connectToDB();
		const db = client.db("SMA");
		const watches = await db.collection("Watches").find({}).toArray();
		return watches;
	} catch (error) {
		console.error(error);
		return [];
	}
};
export default getAll;
