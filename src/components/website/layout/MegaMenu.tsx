import Image from "next/image";
import Link from "next/link";
import {
	type Menu,
	menuConfigs,
} from "@/components/website/layout/header-data";
import { MenuRow } from "@/components/website/layout/MenuRow";

export function MegaMenu({
	menu,
	onClose,
}: {
	menu: Menu;
	onClose: () => void;
}) {
	const config = menuConfigs[menu];

	return (
		<div
			aria-label={`${menu} menu`}
			className="mega-menu grid w-full grid-cols-[0.94fr_1fr] bg-menu p-7 text-foreground shadow-2xl"
			role="dialog"
		>
			<article className="overflow-hidden bg-company-blue text-primary-foreground">
				<div className="p-6 pb-7">
					<h2 className="font-display text-[40px] leading-none">
						{config.introTitle}
					</h2>
					<p className="mt-4 font-semibold text-[17px]">
						{config.introDescription}
					</p>
					<Link
						className="mt-5 inline-flex items-center gap-3 font-semibold text-[16px] text-primary"
						href="#about"
						onClick={onClose}
					>
						Learn More <span aria-hidden="true">→</span>
					</Link>
				</div>
				<Image
					alt="A diverse creative team gathered together"
					className="h-[252px] w-full object-cover"
					height={600}
					sizes="(max-width: 1100px) calc(100vw - 64px), 520px"
					src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85"
					width={900}
				/>
			</article>

			<section className="px-7 pt-4">
				<h2 className="font-display text-[30px] leading-none">
					{config.sectionTitle}
				</h2>
				<p className="mt-4 max-w-[300px] text-[16px] text-muted-foreground leading-5">
					{config.sectionDescription}
				</p>
				<nav aria-label={`${menu} links`} className="mt-7">
					{config.links.map((link) => (
						<MenuRow key={link}>{link}</MenuRow>
					))}
				</nav>
			</section>
		</div>
	);
}
