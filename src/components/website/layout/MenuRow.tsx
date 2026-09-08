import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function MenuRow({ children }: { children: string }) {
	return (
		<Link
			className="group flex h-[58px] items-center justify-between px-4 font-medium text-[17px] text-foreground transition-colors hover:bg-menu-hover"
			href={`#${children.toLowerCase().replaceAll(" ", "-")}`}
		>
			{children}
			<ChevronRight
				aria-hidden="true"
				className="size-4 transition-transform group-hover:translate-x-1"
			/>
		</Link>
	);
}
