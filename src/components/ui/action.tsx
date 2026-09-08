import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
	primary:
		"border-primary bg-primary text-primary-foreground hover:bg-primary-hover hover:border-primary-hover",
	outline:
		"border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
	ghost: "border-transparent bg-transparent text-foreground hover:text-accent",
};

type ActionProps = {
	children: ReactNode;
	className?: string;
	variant?: keyof typeof variants;
} & Omit<ComponentProps<typeof Link>, "children" | "className">;

export function ActionLink({
	children,
	className,
	variant = "primary",
	...props
}: ActionProps) {
	return (
		<Link
			className={cn(
				"inline-flex h-12 items-center justify-center border px-7 font-semibold text-[15px] transition-all duration-200 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
				variants[variant],
				className,
			)}
			{...props}
		>
			{children}
		</Link>
	);
}

export function IconButton({
	children,
	className,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			className={cn(
				"grid size-11 shrink-0 place-items-center text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
