import connectToDB from "../../middleware/connection";
export default async function addWatch(req, res) {
  try {
    const client = await connectToDB();
    const db = client.db("SMA");

    const watchesCollection = db.collection("Watches");
    const result = await watchesCollection.insertOne(req.body);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
