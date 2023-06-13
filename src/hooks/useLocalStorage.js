import { useState, useEffect } from "react";
export default function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		//console.log("useEffect getItem and setValue");
		if (typeof window !== "undefined" && window.localStorage) {
			const stored = localStorage.getItem(key);
			setValue(stored ? JSON.parse(stored) : initialValue);
		}
	}, [key, initialValue]);

	useEffect(() => {
		//console.log("useEffect setItem");
		if (typeof window !== "undefined" && window.localStorage) {
			localStorage.setItem(key, JSON.stringify(value));
		}
	}, [key, value]);

	return [value, setValue];
}
