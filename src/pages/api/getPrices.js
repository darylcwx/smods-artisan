import connectToDB from "../../middleware/connection";
export default async function handler(req, res) {
  try {
    const client = await connectToDB();
    const db = client.db("SMA");
    const prices = await db.collection("Prices").find({}).toArray();
    const result = {};
    for (const item of prices) {
      result[item.name] = item.price;
    }
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
