"use client";

import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { whyChooseUs } from "@/data/website/why-choose-us";

export function WhyChooseUsVisual() {
	const visualRef = useRef<HTMLDivElement>(null);
	const reducedMotion = Boolean(useReducedMotion());
	const { scrollYProgress } = useScroll({
		target: visualRef,
		offset: ["start end", "end start"],
	});
	const circleY = useTransform(scrollYProgress, [0, 1], [24, -36]);
	const squareY = useTransform(scrollYProgress, [0, 1], [30, -24]);

	return (
		<div
			className="relative mx-auto w-full max-w-[620px] lg:mx-0"
			ref={visualRef}
		>
			<motion.div
				aria-hidden="true"
				className="absolute -top-5 right-8 z-10 h-16 w-16 rounded-full bg-[var(--secondary)] will-change-transform sm:h-24 sm:w-24"
				style={{ y: reducedMotion ? 0 : circleY }}
			/>
			<div className="relative aspect-[1.08] overflow-hidden bg-[var(--surface-muted)] shadow-[0_18px_48px_oklch(0.2077_0.0398_265.7549_/_0.14)]">
				<Image
					alt={whyChooseUs.images.primary.alt}
					className="object-cover"
					fill
					sizes="(max-width: 1024px) 92vw, 50vw"
					src={whyChooseUs.images.primary.src}
				/>
			</div>
			<motion.div
				aria-hidden="true"
				className="absolute right-6 bottom-6 h-20 w-20 bg-[var(--primary)] will-change-transform sm:right-10 sm:bottom-10 sm:h-28 sm:w-28"
				style={{ y: reducedMotion ? 0 : squareY }}
			/>
		</div>
	);
}
