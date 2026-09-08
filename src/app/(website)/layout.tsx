import "@/styles/globals.css";
import type { Metadata } from "next";
// import { Geist } from "next/font/google";
import { Host_Grotesk } from "next/font/google";
import { Header } from "@/components/website/layout/Header";
import { StickyFooter } from "@/components/website/layout/sticky-footer";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
	title: "E-works | Bold Digital Partner",
	description:
		"E-works helps businesses unlock their full growth potential through technology, marketing, creative, and content services.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// const geist = Geist({
// 	subsets: ["latin"],
// 	variable: "--font-geist-sans",
// });

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
					<Header />
					{children}
					<StickyFooter />
				</TRPCReactProvider>
			{/* impeccable-live-start */}
<script src="http://localhost:8400/live.js?token=ce8a3aae-1ac5-47c9-8cc0-13c7f733e9a5"></script>
{/* impeccable-live-end */}
</body>
		</html>
	);
}
