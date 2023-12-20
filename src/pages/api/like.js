import connectToDB from "../../middleware/connection";
export default async function handler(req, res) {
  const content = req.body;
  try {
    const client = await connectToDB();
    const db = client.db("SMA");
    const like = await db
      .collection("Watches")
      .updateOne({ name: content }, { $inc: { likes: 1 } });
    res.status(200).json({ data: like });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(404).json({ message: "Not found." });
  }
}
