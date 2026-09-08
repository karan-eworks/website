"use client";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ActionLink, IconButton } from "@/components/ui/action";
import {
	type Menu,
	menuConfigs,
} from "@/components/website/layout/header-data";
import { MegaMenu } from "@/components/website/layout/MegaMenu";
import { Wordmark } from "@/components/website/layout/Wordmark";

export function Header() {
	const [openMenu, setOpenMenu] = useState<Menu | null>(null);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [mobileMenu, setMobileMenu] = useState<Menu | null>(null);
	const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
		undefined,
	);
	const openTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
		undefined,
	);

	const openMenuWithDelay = (menu: Menu) => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		openTimer.current = setTimeout(() => setOpenMenu(menu), 120);
	};
	const keepMenuOpen = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
	};
	const delayedClose = () => {
		if (openTimer.current) clearTimeout(openTimer.current);
		closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
	};
	const showMenu = (menu: Menu) => {
		if (openTimer.current) clearTimeout(openTimer.current);
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setOpenMenu(menu);
	};

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpenMenu(null);
				setMobileOpen(false);
			}
		};
		document.addEventListener("keydown", handleEscape);
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	return (
		<>
			<header className="sticky top-0 z-[60] h-20 bg-menu">
				<div className="grid h-full grid-cols-[1fr_auto] items-center px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
					<Wordmark />
					<nav
						aria-label="Main navigation"
						className="hidden items-center gap-9 font-medium text-[16px] lg:flex"
					>
						<Link className="transition-colors hover:text-accent" href="#top">
							Home
						</Link>
						<Link
							className="transition-colors hover:text-accent"
							href="/about-us"
						>
							About Us
						</Link>
						{(["services", "resources", "company"] as const).map((menu) => (
							<button
								aria-expanded={openMenu === menu}
								aria-haspopup="dialog"
								className="flex items-center gap-1 capitalize transition-colors hover:text-accent"
								key={menu}
								onClick={() => showMenu(menu)}
								onFocus={keepMenuOpen}
								onMouseEnter={() => openMenuWithDelay(menu)}
								onMouseLeave={delayedClose}
								type="button"
							>
								{menu}{" "}
								<ChevronDown
									className={`size-3.5 transition-transform ${openMenu === menu ? "rotate-180" : ""}`}
								/>
							</button>
						))}
					</nav>
					<div className="hidden items-center justify-end gap-6 font-medium text-[16px] lg:flex">
						<Link
							className="transition-colors hover:text-accent"
							href="#contact"
						>
							Contact Us
						</Link>
						<ActionLink className="h-[50px] px-7" href="#contact">
							Start a Project
						</ActionLink>
					</div>
					<IconButton
						aria-expanded={mobileOpen}
						aria-label={mobileOpen ? "Close menu" : "Open menu"}
						className="lg:hidden"
						onClick={() => setMobileOpen((open) => !open)}
					>
						{mobileOpen ? <X /> : <MenuIcon />}
					</IconButton>
				</div>
				{openMenu && (
					<div
						onMouseEnter={keepMenuOpen}
						onMouseLeave={delayedClose}
						role="dialog"
					>
						<MegaMenu menu={openMenu} onClose={() => setOpenMenu(null)} />
					</div>
				)}
			</header>

			{openMenu && (
				<button
					aria-label="Close navigation menu"
					className="fixed inset-x-0 top-20 bottom-0 z-40 cursor-default bg-overlay"
					onClick={() => setOpenMenu(null)}
					type="button"
				/>
			)}

			{mobileOpen && (
				<nav
					aria-label="Mobile navigation"
					className="fixed inset-x-0 top-20 bottom-0 z-50 overflow-y-auto bg-menu px-6 py-6 lg:hidden"
				>
					<Link
						className="block border-border border-b py-5 font-semibold text-xl"
						href="#top"
						onClick={() => setMobileOpen(false)}
					>
						Home
					</Link>
					{(["services", "resources", "company"] as const).map((menu) => (
						<div key={menu}>
							<button
								aria-expanded={mobileMenu === menu}
								className="flex w-full items-center justify-between border-border border-b py-5 font-semibold text-xl capitalize"
								onClick={() => setMobileMenu(mobileMenu === menu ? null : menu)}
								type="button"
							>
								{menu}
								<ChevronDown
									className={`size-5 transition-transform ${mobileMenu === menu ? "rotate-180" : ""}`}
								/>
							</button>
							{mobileMenu === menu && (
								<div className="border-border border-b bg-secondary px-4 py-2">
									{menuConfigs[menu].links.map((item) => (
										<Link
											className="block py-3.5 text-base"
											href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
											key={item}
											onClick={() => setMobileOpen(false)}
										>
											{item}
										</Link>
									))}
								</div>
							)}
						</div>
					))}
					<div className="mt-8 grid gap-3">
						<ActionLink href="#contact" variant="outline">
							Contact Us
						</ActionLink>
						<ActionLink href="#contact">Start a Project</ActionLink>
					</div>
				</nav>
			)}
		</>
	);
}
