const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Successful response.");
});

app.get("/api/getAllItems", (req, res) => {
	// Implement logic to call MongoDB or any other actions needed
	// Return data as JSON
	const data = {
		items: [
			{ id: 1, name: "Item 1" },
			{ id: 2, name: "Item 2" },
		],
	};
	res.json(data);
});

app.listen(3001, () => console.log("Example app is listening on port 3001."));
