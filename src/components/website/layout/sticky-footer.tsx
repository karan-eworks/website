"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FooterNavigation } from "@/components/website/layout/FooterNavigation";
import { FooterSocialLinks } from "@/components/website/layout/FooterSocialLinks";
import { Logo } from "@/components/website/layout/Logo";

export function StickyFooter() {
	return (
		<footer className="sticky bottom-0 z-0 overflow-hidden bg-[#0d0d0d] text-white">
			<div className="mx-auto flex min-h-180 max-w-[1600px] flex-col px-6 pt-16 pb-8 sm:px-10 lg:px-16 lg:pt-24">
				<div className="grid flex-1 gap-16 lg:grid-cols-[1.2fr_1fr]">
					<motion.div
						className="flex max-w-xl flex-col justify-between gap-14"
						initial={{ opacity: 0, y: 30 }}
						transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
						viewport={{ once: true, amount: 0.2 }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<div>
							<Link
								className="inline-flex items-center gap-3 font-semibold text-2xl tracking-tight"
								href="/"
							>
								<Logo className="w-41.25" />
							</Link>
							<h2 className="mt-10 max-w-lg font-medium text-4xl tracking-[-0.04em] sm:text-5xl lg:text-6xl">
								Build the next stage
								<span className="text-neutral-500"> of your growth.</span>
							</h2>
							<p className="mt-6 max-w-md text-base text-neutral-400 leading-7">
								A bold digital partner for businesses ready to reach their full
								potential.
							</p>
						</div>
						<Link
							className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 font-medium text-black text-sm transition-all duration-300 hover:px-7"
							href="#contact"
						>
							Start a project
							<ArrowUpRight
								className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								size={17}
							/>
						</Link>
					</motion.div>
					<motion.div
						className="flex-1"
						initial={{ opacity: 0, y: 30 }}
						transition={{
							duration: 0.7,
							delay: 0.1,
							ease: [0.22, 1, 0.36, 1],
						}}
						viewport={{ once: true, amount: 0.2 }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<FooterNavigation />
					</motion.div>
				</div>
				<div className="mt-16 flex flex-col gap-8 border-white/10 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
					<FooterSocialLinks />
					<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-neutral-500 text-sm">
						<Link
							className="transition-colors hover:text-white"
							href="#privacy"
						>
							Privacy
						</Link>
						<Link className="transition-colors hover:text-white" href="#terms">
							Terms
						</Link>
						<span>© {new Date().getFullYear()} E-works</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
