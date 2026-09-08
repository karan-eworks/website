import Link from "next/link";
import { footerLinks } from "@/components/website/layout/footer-data";

export function FooterNavigation() {
	return (
		<div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3">
			{footerLinks.map((section) => (
				<div key={section.title}>
					<p className="mb-5 font-medium text-neutral-500 text-xs uppercase tracking-[0.18em]">
						{section.title}
					</p>
					<div className="flex flex-col gap-3">
						{section.links.map((link) => (
							<Link
								className="group relative w-fit text-[15px] text-neutral-300 transition-colors duration-300 hover:text-white"
								href={link.href}
								key={link.label}
							>
								{link.label}
								<span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
