"use client";

import { AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ActionLink } from "@/components/ui/action";
import { HeroScene } from "@/components/website/home/HeroScene";
import { slides } from "@/components/website/home/hero-data";

export function Hero() {
	const [index, setIndex] = useState(0);
	const reduced = Boolean(useReducedMotion());
	useEffect(() => {
		if (reduced) return;
		const timer = window.setInterval(
			() => setIndex((current) => (current + 1) % slides.length),
			4000,
		);
		return () => window.clearInterval(timer);
	}, [reduced]);

	return (
		<main className="hero-shell" id="top">
			<section aria-labelledby="hero-title" className="hero-copy">
				<h1 id="hero-title">
					Empowering Businesses with
					<br className="hidden sm:block" /> Innovative IT Solutions
				</h1>
				<p>
					We bring strategy, technology, marketing, creative, and content
					together to help ambitious businesses grow with confidence.
				</p>
				<div className="mt-5 flex justify-center">
					<ActionLink href="#contact">Start a Project</ActionLink>
				</div>
			</section>
			<div aria-live="off" className="hero-art">
				<AnimatePresence mode="sync">
					<HeroScene index={index} reduced={reduced} />
				</AnimatePresence>
			</div>
		</main>
	);
}
