"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Team } from "@/data/website/teams";

export function TeamCard({
	reducedMotion,
	team,
}: {
	reducedMotion: boolean;
	team: Team;
}) {
	return (
		<motion.article
			className="group flex h-full flex-col overflow-hidden rounded-[1rem] border border-[var(--border-muted)] bg-[var(--surface-default)] transition-[border-color] duration-300 hover:border-[var(--primary)]/45"
			transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
			whileHover={reducedMotion ? undefined : { y: -6 }}
		>
			<div className="relative h-80 overflow-hidden rounded-t-[1rem] bg-[var(--surface-muted)]">
				<Image
					alt=""
					aria-hidden="true"
					className={`object-contain object-left-bottom opacity-80 transition-transform duration-700 ease-out ${reducedMotion ? "" : "group-hover:translate-x-1 group-hover:scale-105"}`}
					fill
					sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 40vw"
					src={team.shadow}
					unoptimized
				/>
				<div className="absolute inset-0 z-10 overflow-hidden">
					<Image
						alt={team.image.alt}
						className={`object-cover object-center transition-transform duration-700 ease-out ${reducedMotion ? "" : "group-hover:scale-[1.03]"}`}
						fill
						sizes="(max-width: 640px) 86vw, (max-width: 1024px) 40vw, 34vw"
						src={team.image.src}
						unoptimized
					/>
				</div>
			</div>
			<div className="flex flex-1 flex-col gap-2 p-6 sm:p-7">
				<h3 className="max-w-[16ch] font-bold text-2xl leading-tight tracking-[-0.03em] sm:text-3xl">
					{team.title}
				</h3>
				<p className="max-w-md text-[var(--text-default)] text-base leading-7">
					{team.description}
				</p>
			</div>
		</motion.article>
	);
}
