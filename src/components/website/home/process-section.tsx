"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/data/website/process";

const sectionReveal = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
	},
};

const stepsReveal = {
	hidden: {},
	visible: {
		transition: { delayChildren: 0.12, staggerChildren: 0.08 },
	},
};

const stepReveal = {
	hidden: { opacity: 0, y: 16 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
	},
};

export function ProcessSection() {
	const reducedMotion = Boolean(useReducedMotion());

	return (
		<section
			aria-labelledby="process-title"
			className="mx-auto grid max-w-[1600px] gap-16 px-6 py-28 sm:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(520px,1fr)] lg:gap-24 lg:px-16 lg:py-40"
			id="process"
		>
			<motion.div
				initial={reducedMotion ? false : "hidden"}
				variants={sectionReveal}
				viewport={{ once: true, amount: 0.2 }}
				whileInView="visible"
			>
				<h2
					className="max-w-xl font-bold text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
					id="process-title"
				>
					How we work
				</h2>
				<p className="mt-8 max-w-xl text-[var(--text-default)] text-lg leading-8">
					Every engagement starts with your business context, then brings the
					right disciplines together to create useful momentum.
				</p>
			</motion.div>

			<motion.div
				className="relative before:absolute before:top-8 before:bottom-8 before:left-1 before:w-px before:bg-[var(--border-muted)]"
				initial={reducedMotion ? false : "hidden"}
				variants={stepsReveal}
				viewport={{ once: true, amount: 0.2 }}
				whileInView="visible"
			>
				{processSteps.map((step) => (
					<motion.div
						className="relative grid gap-3 border-[var(--border-muted)] border-t py-6 pl-8 sm:grid-cols-[minmax(190px,0.72fr)_1fr] sm:gap-8 sm:py-7"
						key={step.title}
						variants={stepReveal}
					>
						<span
							aria-hidden="true"
							className="absolute top-8 left-0 size-2.5 bg-[var(--secondary)]"
						/>
						<h3 className="font-semibold text-[var(--text-strong)] text-lg leading-6">
							{step.title}
						</h3>
						<p className="max-w-[42ch] text-[var(--text-muted)] text-base leading-7">
							{step.description}
						</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
