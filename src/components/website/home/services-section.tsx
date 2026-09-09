"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ServiceOffering } from "@/components/website/home/service-offering";
import { serviceOfferings } from "@/data/website/services";

export function ServicesSection() {
	const [activeId, setActiveId] = useState("organic-growth");
	const reducedMotion = Boolean(useReducedMotion());

	return (
		<section
			aria-labelledby="services-title"
			className="mx-auto flex max-w-[1600px] flex-col px-6 sm:px-10 lg:px-16"
		>
			<motion.div
				initial={reducedMotion ? false : { opacity: 0, y: 24 }}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
				viewport={{ once: true, amount: 0.2 }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				<h2
					className="max-w-4xl font-bold text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
					id="services-title"
				>
					What we offer
				</h2>
				<p className="mt-8 max-w-2xl text-[var(--text-default)] text-lg leading-8">
					We connect digital presence, products, organic growth, demand
					generation, brand experience, and content around the business outcome
					that matters.
				</p>
			</motion.div>

			<div className="mt-16 grid gap-3 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
				{serviceOfferings.map((offering, index) => (
					<motion.div
						initial={reducedMotion ? false : { opacity: 0, y: 18 }}
						key={offering.id}
						transition={{
							delay: reducedMotion ? 0 : 0.08 + index * 0.06,
							duration: 0.55,
							ease: [0.22, 1, 0.36, 1],
						}}
						viewport={{ once: true, amount: 0.2 }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<ServiceOffering
							active={activeId === offering.id}
							offering={offering}
							onActivate={() => setActiveId(offering.id)}
							reducedMotion={reducedMotion}
						/>
					</motion.div>
				))}
			</div>
		</section>
	);
}
