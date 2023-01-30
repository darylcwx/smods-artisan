import { useState } from "react";
import Head from "next/head";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import Nav from "@/pages/nav.js";

export default function App({ Component, pageProps }) {
	const [colorScheme, setColorScheme] = useState(ColorScheme);
	const toggleColorScheme = () =>
		setColorScheme(colorScheme === "dark" ? "light" : "dark");
	return (
		<>
			{/* <ColorSchemeProvider
				colorScheme={ColorScheme}
				toggleColorScheme={toggleColorScheme}
			> */}
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
				<NotificationsProvider>
					<Nav />
					<Component {...pageProps} />
				</NotificationsProvider>
			</MantineProvider>
			{/* </ColorSchemeProvider> */}
		</>
	);
}
