import Image from "next/image";
import { about } from "@/data/website/about";

export function AboutVisual() {
	return (
		<div className="relative mx-auto w-full max-w-[620px] lg:mx-0">
			<div className="relative aspect-[1.08] overflow-hidden rounded-[1.25rem] bg-[var(--surface-muted)] shadow-[0_18px_48px_oklch(0.2077_0.0398_265.7549_/_0.14)]">
				<Image
					alt={about.image.alt}
					className="object-cover"
					fill
					sizes="(max-width: 1024px) 92vw, 50vw"
					src={about.image.src}
					unoptimized
				/>
			</div>
		</div>
	);
}
