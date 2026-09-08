"use client";

import type React from "react";
import { Header } from "./Header";
import { StickyFooter } from "./sticky-footer";

interface WebLayoutProps {
	children: React.ReactNode;
}

function WebLayout({ children }: WebLayoutProps) {
	return (
		<div>
			<Header />
			{children}
			<StickyFooter />
		</div>
	);
}

export default WebLayout;
