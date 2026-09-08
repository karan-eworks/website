"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ActionLink } from "@/components/ui/action";
import { cta } from "@/data/website/cta";

export function CtaSection() {
	const reducedMotion = Boolean(useReducedMotion());

	return (
		<section
			aria-labelledby="cta-title"
			className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
			id="contact"
		>
			<motion.div
				className="relative isolate overflow-hidden bg-[var(--foreground)] px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24"
				initial={reducedMotion ? false : { opacity: 0, y: 24 }}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
				viewport={{ once: true, amount: 0.2 }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				<div
					aria-hidden="true"
					className="absolute -top-24 right-[-3rem] size-64 rounded-full bg-[var(--secondary)] sm:right-8"
				/>
				<div
					aria-hidden="true"
					className="absolute right-24 bottom-[-5rem] size-44 rotate-12 bg-[var(--primary)]/80"
				/>

				<div className="relative z-10 max-w-4xl">
					<h2
						className="max-w-3xl font-bold text-5xl text-white leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
						id="cta-title"
					>
						{cta.title}
					</h2>
					<p className="mt-8 max-w-2xl text-lg text-white/70 leading-8 sm:text-xl">
						{cta.description}
					</p>
					<ActionLink
						className="mt-10 border-[var(--secondary)] bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:border-[var(--secondary-hover)] hover:bg-[var(--secondary-hover)]"
						href={cta.action.href}
					>
						{cta.action.label}
					</ActionLink>
				</div>
			</motion.div>
		</section>
	);
}
