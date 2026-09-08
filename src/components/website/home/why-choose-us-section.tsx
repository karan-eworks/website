"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhyChooseUsVisual } from "@/components/website/home/why-choose-us-visual";
import { whyChooseUs } from "@/data/website/why-choose-us";

export function WhyChooseUsSection() {
	const reducedMotion = Boolean(useReducedMotion());

	return (
		<section
			aria-labelledby="why-choose-us-title"
			className="mx-auto grid max-w-[1600px] gap-20 px-6 py-28 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:items-center lg:gap-24 lg:px-16 lg:py-40"
		>
			<WhyChooseUsVisual />

			<motion.div
				initial={reducedMotion ? false : { opacity: 0, y: 24 }}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
				viewport={{ once: true, amount: 0.2 }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				<h2
					className="max-w-xl font-bold text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
					id="why-choose-us-title"
				>
					Why businesses choose us
				</h2>
				<p className="mt-8 max-w-xl text-[var(--text-default)] text-lg leading-8">
					{whyChooseUs.intro}
				</p>

				<div className="mt-12 divide-y divide-[var(--border-muted)] border-[var(--border-muted)] border-y">
					{whyChooseUs.reasons.map((reason, index) => (
						<motion.div
							className="grid gap-2 py-6 sm:grid-cols-[minmax(170px,0.7fr)_1fr] sm:gap-8"
							initial={reducedMotion ? false : { opacity: 0, y: 16 }}
							key={reason.title}
							transition={{
								delay: reducedMotion ? 0 : 0.12 + index * 0.08,
								duration: 0.55,
								ease: [0.22, 1, 0.36, 1],
							}}
							viewport={{ once: true, amount: 0.25 }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<strong className="font-semibold text-[var(--text-strong)] text-base">
								{reason.title}
							</strong>
							<span className="max-w-[42ch] text-[var(--text-muted)] text-base leading-6">
								{reason.copy}
							</span>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
