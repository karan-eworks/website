"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TeamCard } from "@/components/website/about/team-card";
import { teams } from "@/data/website/teams";

const gridPositions = [
	"lg:col-span-7",
	"lg:col-span-5",
	"lg:col-span-6",
	"lg:col-span-6",
] as const;

const sectionReveal = {
	hidden: { opacity: 0, y: 26 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
	},
};

const cardReveal = {
	hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
	},
};

const gridReveal = {
	hidden: {},
	visible: {
		transition: { delayChildren: 0.12, staggerChildren: 0.08 },
	},
};

export function TeamSection() {
	const reducedMotion = Boolean(useReducedMotion());

	return (
		<section
			aria-labelledby="teams-title"
			className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16"
			id="teams"
		>
			<motion.div
				initial={reducedMotion ? false : "hidden"}
				variants={sectionReveal}
				viewport={{ once: true, amount: 0.2 }}
				whileInView="visible"
			>
				<h2
					className="max-w-4xl font-bold text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
					id="teams-title"
				>
					One connected team for every part of your growth.
				</h2>
				<p className="mt-8 max-w-2xl text-[var(--text-default)] text-lg leading-8">
					E-works brings digital presence, products, organic growth, demand
					generation, brand experience, and content together around the same
					business goals.
				</p>
			</motion.div>

			<motion.div
				className="mt-16 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12 lg:gap-6"
				initial={reducedMotion ? false : "hidden"}
				variants={gridReveal}
				viewport={{ once: true, amount: 0.12 }}
				whileInView="visible"
			>
				{teams.map((team, index) => (
					<motion.div
						className={gridPositions[index]}
						key={team.title}
						variants={cardReveal}
					>
						<TeamCard reducedMotion={reducedMotion} team={team} />
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
