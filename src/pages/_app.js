import { useState, useEffect } from "react";
import Head from "next/head";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
	Button,
	Text,
} from "@mantine/core";
import Nav from "@/pages/nav.js";

export default function App({ Component, pageProps }) {
	const [colorScheme, setColorScheme] = useState(ColorScheme);
	// const toggleColorScheme = () =>
	// 	setColorScheme(colorScheme === "dark" ? "light" : "dark");
	return (
		<>
			<Head>
				<title>Page title</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: "dark",
				}}
			>
				<Nav />

				<Component {...pageProps} />
			</MantineProvider>

			<style jsx global>
				{`body {
						margin-top: 60px;
					}`}
			</style>
			{/* </ColorSchemeProvider> */}
		</>
	);
}
