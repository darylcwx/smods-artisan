import connectToDB from "../../middleware/connection";
export default async function handler(req, res) {
  try {
    const client = await connectToDB();
    const db = client.db("SMA");
    const watch = await db
      .collection("Watches")
      .find({ name: req.query.name })
      .toArray();
    client.close();
    res.status(200).json({ data: watch });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
