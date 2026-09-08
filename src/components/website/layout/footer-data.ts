import { ExternalLink, X } from "lucide-react";

export const footerLinks = [
	{
		title: "Product",
		links: [
			{ label: "Features", href: "#features" },
			{ label: "Integrations", href: "#integrations" },
			{ label: "Pricing", href: "#pricing" },
			{ label: "Changelog", href: "#changelog" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "About", href: "#about" },
			{ label: "Careers", href: "#careers" },
			{ label: "Blog", href: "#blog" },
			{ label: "Contact", href: "#contact" },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "Documentation", href: "#docs" },
			{ label: "Help Center", href: "#help" },
			{ label: "Community", href: "#community" },
			{ label: "Status", href: "#status" },
		],
	},
] as const;

export const socialLinks = [
	{ label: "External link", href: "#", icon: ExternalLink },
	{ label: "Twitter", href: "#", icon: X },
	{ label: "Instagram", href: "#", icon: ExternalLink },
	{ label: "Facebook", href: "#", icon: ExternalLink },
	{ label: "GitHub", href: "#", icon: ExternalLink },
] as const;
