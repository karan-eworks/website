"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ActionLink } from "@/components/ui/action";
import { AboutVisual } from "@/components/website/about/about-visual";
import { about } from "@/data/website/about";

export function AboutSection() {
	const reducedMotion = Boolean(useReducedMotion());

	return (
		<section
			aria-labelledby="about-title"
			className="mx-auto grid max-w-[1600px] gap-20 px-6 py-28 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:items-center lg:gap-24 lg:px-16 lg:py-40"
			id="about"
		>
			<AboutVisual />

			<motion.div
				initial={reducedMotion ? false : { opacity: 0, y: 24 }}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
				viewport={{ once: true, amount: 0.2 }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				<h2
					className="max-w-xl font-bold text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
					id="about-title"
				>
					{about.title}
				</h2>
				<p className="mt-8 max-w-xl text-[var(--text-default)] text-lg leading-8">
					{about.intro}
				</p>
				<p className="mt-5 max-w-xl text-[var(--text-default)] text-lg leading-8">
					{about.body[0]}
				</p>
				<ActionLink className="mt-10" href={about.cta.href}>
					{about.cta.label}
				</ActionLink>
			</motion.div>
		</section>
	);
}
