import priceList from "@/constants/pricelist";
/*
[type][item]
0 - 
1 - Rolex
2 - Actual GMT [20X]
3 - Patek Phillipe
4 - Audemars Piguet
5 - SKX007s
6 - Skeletons / Open balance wheels / Other
F - Female
R - Repair jobs

*/
const watches = [
	{
		name: "105",
		price: priceList.regular,
		image: ["105.jpg", "105-f.jpg"],
		insert: "Fluted bezel",
		shell: "41mm case",
		crown: "Standard crown",
		strap: "Jubilee strap",
		clasp: "Standard clasp",
		crystal: "Sapphire crystal w cyclops",
		cRing: "Built-in rehaut",
		dial: "Rhodium Seiko Dial",
		hands: "Baton hands",
		movement: "NH35A",
		date: "",
	},
	{
		name: "104",
		price: priceList.regular,
		image: ["104.jpg", "104-f.jpg"],
		insert: "Fluted bezel",
		shell: "41mm case",
		crown: "Standard crown",
		strap: "Jubilee strap",
		clasp: "Standard clasp",
		crystal: "Sapphire crystal w cyclops",
		cRing: "Built-in rehaut",
		dial: "Grand Seiko Dial with motif",
		hands: "Dagger hands",
		movement: "NH35A",
		date: "",
	},
	{
		name: "F01",
		price: priceList.ladies,
		image: "F01.jpg",
		insert: "Fluted bezel",
		shell: "36mm oyster case",
		crown: "Standard crown",
		strap: "Jubilee strap",
		clasp: "Standard clasp",
		crystal: "Flat sapphire crystal",
		cRing: "Built-in rehaut",
		dial: "White Seiko dial with leaf motif",
		hands: "Baton hands",
		movement: "NH35A",
		date: "",
	},
	{
		name: "103",
		price: priceList.regular,
		image: "103.jpg",
		insert: "Embossed Black Submariner",
		shell: "Standard case",
		crown: "Standard crown",
		strap: "Oysterflex strap",
		clasp: "Standard clasp",
		crystal: "Flat sapphire crystal",
		cRing: "Built-in rehaut",
		dial: "Seiko Marine Master",
		hands: "Mercedes hands",
		movement: "NH35A",
		date: "",
	},
	{
		name: "301",
		price: priceList.regular,
		image: "301.jpg",
		insert: "",
		shell: "Case resembling Patek Aquanaut",
		crown: "Standard crown",
		strap: "Strap resembling Patek Aquanaut",
		clasp: "Butterfly clasp",
		crystal: "Flat sapphire",
		cRing: "",
		dial: "Seiko dial resembling Patek Aquanaut",
		hands: "Sword hands",
		movement: "NH35A",
		date: "",
	},
	{
		name: "102",
		price: priceList.regular,
		image: "102.jpg",
		insert: "Black Submariner w additional markers",
		shell: "Standard case",
		crown: "Standard crown",
		strap: "Oyster strap",
		clasp: "Standard clasp",
		crystal: "Flat sapphire crystal",
		cRing: "Built-in rehaut",
		dial: "Seiko slanted double bars in blue",
		hands: "Sword hands",
		movement: "NH35A with white date wheel",
		date: "",
	},
	{
		name: "101",
		price: priceList.regular,
		image: "101.jpg",
		insert: "Ceramic black-brown 12-hour GMT bezel insert",
		shell: "Standard case",
		crown: "Seiko gold crown",
		strap: "Silver and gold jubilee strap",
		clasp: "Silver and gold seiko clasp",
		crystal: "Flat sapphire crystal",
		cRing: "Built-in rehaut",
		dial: "Rhodium Seiko dial",
		hands: "Syringe hands",
		movement: "NH35A",
		date: "",
	},
	{
		name: "501",
		price: priceList.regular,
		image: "501.jpeg",
		insert: "Embossed Black Submariner",
		shell: "SKX007 case",
		crown: "Seiko crown",
		strap: "Rubber strap",
		clasp: "Buckle",
		crystal: "Double domed with blue AR",
		cRing: "Black with white markers",
		dial: "Off-White stealth Seiko Day Date",
		hands: "Black mercedes hands",
		movement: "NH36A",
		date: "",
	},
	{
		name: "R01 (NFS)",
		price: " -",
		image: "R01.jpeg",
		insert: "Embossed Black Submariner",
		shell: "Rose gold case",
		crown: "Standard crown",
		strap: "Rubber strap",
		clasp: "Rose gold clasp",
		date: "",
	},
];
export default watches;