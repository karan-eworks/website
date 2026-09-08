import Link from "next/link";
import { Logo } from "@/components/website/layout/Logo";

export function Wordmark() {
	return (
		<Link aria-label="E-works home" className="flex items-center" href="#top">
			<Logo className="w-[197px]" />
		</Link>
	);
}
