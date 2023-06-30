import { useState, useEffect } from "react";
import Head from "next/head";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
	Button,
	Text,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Nav from "@/components/nav.js";
import "../styles/globals.css";
import { CartProvider } from "@/context/cartContext.js";
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
				<link rel="icon" href="/svgs/filled v2.svg" />
			</Head>
			<CartProvider>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						colorScheme: "dark",
						globalStyles: (theme) => ({
							body: {
								marginTop: "60px",
							},
						}),
					}}
				>
					<Nav />
					<Notifications />

					<Component {...pageProps} />
				</MantineProvider>
			</CartProvider>
			{/* </ColorSchemeProvider> */}
		</>
	);
}
