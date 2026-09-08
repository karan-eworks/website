import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
	className?: string;
	alt?: string;
};

export function Logo({ className, alt = "E-works" }: LogoProps) {
	return (
		<Image
			alt={alt}
			className={cn("h-auto w-[197px]", className)}
			height={60}
			src="/brand-logo.svg"
			width={197}
		/>
	);
}
