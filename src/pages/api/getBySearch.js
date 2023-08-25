import connectToDB from "../../middleware/connection";
export default async function handler(req, res) {
	const content = req.body;
	console.log(content);
	try {
		const client = await connectToDB();
		const db = client.db("SMA");
		const watches = await db
			.collection("Watches")
			.find({
				$or: [
					{ insert: { $regex: content, $options: "i" } },
					{ shell: { $regex: content, $options: "i" } },
					{ crown: { $regex: content, $options: "i" } },
					{ strap: { $regex: content, $options: "i" } },
					{ clasp: { $regex: content, $options: "i" } },
					{ crystal: { $regex: content, $options: "i" } },
					{ cRing: { $regex: content, $options: "i" } },
					{ dial: { $regex: content, $options: "i" } },
					{ hands: { $regex: content, $options: "i" } },
					{ movement: { $regex: content, $options: "i" } },
				],
			})
			.toArray();
		console.log(watches);
		return res.status(200).json(watches);
	} catch (error) {
		console.error("An error occurred:", error);
		return res.status(404).json({ message: "Not found." });
	}
}
