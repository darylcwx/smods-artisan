function contact(values) {
	var token = "6042304491:AAG0Oh1Y9wqccUaHc51M_a07i5JZwSXX62o";
	var chatID = "-1001815908809";
	var text = JSON.stringify(values);
	var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${text}`;
	let api = new XMLHttpRequest();
	api.open("GET", url, true);
	api.send();
}
