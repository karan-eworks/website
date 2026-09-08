import Link from "next/link";
import { socialLinks } from "@/components/website/layout/footer-data";

export function FooterSocialLinks() {
	return (
		<div className="flex items-center gap-2">
			{socialLinks.map(({ label, href, icon: Icon }) => (
				<Link
					aria-label={label}
					className="group flex size-11 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
					href={href}
					key={label}
				>
					<Icon
						className="transition-transform duration-300 group-hover:-translate-y-0.5"
						size={17}
						strokeWidth={1.8}
					/>
				</Link>
			))}
		</div>
	);
}
