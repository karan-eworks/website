"use client";

import { motion } from "framer-motion";
import type { ServiceOffering as ServiceOfferingData } from "@/data/website/services";

const accentStyles = {
	blue: {
		active: "bg-[var(--primary)] text-white",
		default:
			"bg-[var(--primary)]/20 text-[var(--text-strong)] hover:bg-[var(--primary)] hover:text-white",
		shape: "border-white/45 bg-white/10",
	},
	lime: {
		active: "bg-[var(--secondary)] text-[var(--text-strong)]",
		default:
			"bg-[var(--secondary)]/30 text-[var(--text-strong)] hover:bg-[var(--secondary)]",
		shape: "border-[var(--text-strong)]/35 bg-[var(--text-strong)]/10",
	},
	navy: {
		active: "bg-[var(--text-strong)] text-white",
		default:
			"bg-[var(--text-strong)]/10 text-[var(--text-strong)] hover:bg-[var(--text-strong)] hover:text-white",
		shape: "border-[var(--secondary)]/70 bg-[var(--secondary)]/10",
	},
} as const;

export function ServiceOffering({
	active,
	onActivate,
	reducedMotion,
	offering,
}: {
	active: boolean;
	onActivate: () => void;
	reducedMotion: boolean;
	offering: ServiceOfferingData;
}) {
	const accent = accentStyles[offering.accent];

	return (
		<motion.button
			animate={{ y: active ? -5 : 0 }}
			aria-pressed={active}
			className={`group relative flex min-h-[340px] w-full flex-col justify-between overflow-hidden p-6 text-left transition-colors duration-500 sm:min-h-[380px] sm:p-8 ${active ? accent.active : accent.default}`}
			onClick={onActivate}
			onFocus={onActivate}
			onMouseEnter={onActivate}
			type="button"
			whileHover={reducedMotion ? undefined : { y: -5 }}
			whileTap={reducedMotion ? undefined : { scale: 0.99 }}
		>
			<div
				aria-hidden="true"
				className={`absolute -right-8 -bottom-12 size-48 rounded-full border-[18px] transition-transform duration-700 sm:size-64 ${accent.shape} ${active ? "rotate-12 scale-110" : "-rotate-12 scale-75"}`}
			/>
			<div className="relative z-10 mt-12">
				<h3 className="max-w-[14ch] font-bold text-4xl leading-none tracking-[-0.05em] sm:text-5xl">
					{offering.title}
				</h3>
				<p className="mt-5 max-w-sm text-base leading-7 opacity-85">
					{offering.description}
				</p>
			</div>
			<ul className="relative z-10 mt-10 flex flex-wrap gap-x-4 gap-y-2 border-current/20 border-t pt-4 text-sm opacity-85">
				{offering.work.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</motion.button>
	);
}
