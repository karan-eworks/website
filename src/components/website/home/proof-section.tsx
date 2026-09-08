"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AvatarCluster } from "@/components/website/home/avatar-cluster";
import { proofPoints } from "@/data/website/home";

export function ProofSection() {
	const reducedMotion = Boolean(useReducedMotion());

	return (
		<section
			aria-labelledby="proof-title"
			className="mx-auto grid max-w-[1600px] gap-14 px-6 py-28 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:items-center lg:gap-24 lg:px-16 lg:py-40"
		>
			<motion.div
				initial={reducedMotion ? false : { opacity: 0, y: 28 }}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
				viewport={{ once: true, amount: 0.25 }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				<h2
					className="max-w-2xl font-bold text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
					id="proof-title"
				>
					Proven strategies, real results.
				</h2>
				<p className="mt-7 max-w-xl text-[var(--text-default)] text-lg leading-8">
					We connect strategy, technology, marketing, creative, SEO, and content
					into one focused growth system—so your business can move from
					potential to progress.
				</p>
				<div className="mt-12 divide-y divide-[var(--border-muted)] border-[var(--border-muted)] border-y">
					{proofPoints.map((point, index) => (
						<motion.div
							className="grid gap-2 py-5 sm:grid-cols-[minmax(170px,0.7fr)_1fr] sm:gap-8"
							initial={reducedMotion ? false : { opacity: 0, y: 18 }}
							key={point.title}
							transition={{
								delay: reducedMotion ? 0 : 0.12 + index * 0.08,
								duration: 0.55,
								ease: [0.22, 1, 0.36, 1],
							}}
							viewport={{ once: true, amount: 0.25 }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<strong className="font-semibold text-[var(--text-strong)] text-base">
								{point.title}
							</strong>
							<span className="max-w-[42ch] text-[var(--text-muted)] text-base leading-6">
								{point.copy}
							</span>
						</motion.div>
					))}
				</div>
			</motion.div>

			<AvatarCluster reducedMotion={reducedMotion} />
		</section>
	);
}
