import connectToDB from "../../middleware/connection";
export default async function handler(req, res) {
  try {
    const client = await connectToDB();
    const db = client.db("SMA");
    const watches = await db.collection("Watches").find({}).toArray();
    res.status(200).json({ data: watches });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
