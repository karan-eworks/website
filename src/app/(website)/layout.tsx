import "@/styles/globals.css";
import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import WebLayout from "@/components/website/layout/WebLayout";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
	title: "E-works | Bold Digital Partner",
	description:
		"E-works helps businesses unlock their full growth potential through technology, marketing, creative, and content services.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};


const host_grotesk = Host_Grotesk({
	subsets: ["latin"],
	variable: "--font-host-grotesk",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${host_grotesk.variable}`} lang="en">
			<body>
				<TRPCReactProvider>
					<WebLayout>{children}</WebLayout>
				</TRPCReactProvider>
				{/* impeccable-live-start */}
				<script src="http://localhost:8400/live.js?token=ce8a3aae-1ac5-47c9-8cc0-13c7f733e9a5"></script>
				{/* impeccable-live-end */}
			</body>
		</html>
	);
}
