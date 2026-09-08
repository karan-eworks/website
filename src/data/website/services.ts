export const serviceOfferings = [
	{
		id: "digital-presence",
		title: "Digital Presence",
		description:
			"Clear, conversion-focused digital experiences that make your business easier to understand, trust, and choose.",
		work: ["Strategy", "UX / UI", "Web Experiences"],
		accent: "blue",
	},
	{
		id: "digital-products",
		title: "Digital Products",
		description:
			"Reliable platforms, applications, and internal tools built around how your business operates and grows.",
		work: ["Product Strategy", "Applications", "Internal Tools"],
		accent: "lime",
	},
	{
		id: "organic-growth",
		title: "Organic Growth",
		description:
			"Search and content systems that help the right people discover your business without relying only on paid reach.",
		work: ["Technical SEO", "Search Strategy", "Content Discovery"],
		accent: "navy",
	},
	{
		id: "demand-generation",
		title: "Demand Generation",
		description:
			"Focused campaigns and acquisition systems that turn attention into qualified interest and measurable momentum.",
		work: ["Campaigns", "Paid Media", "Acquisition"],
		accent: "lime",
	},
	{
		id: "brand-experience",
		title: "Brand Experience",
		description:
			"Visual direction and brand assets that make your business easier to recognize and remember.",
		work: ["Art Direction", "Brand Systems", "Visual Design"],
		accent: "blue",
	},
	{
		id: "content-communications",
		title: "Content & Communications",
		description:
			"Useful stories, pages, and communications that build trust and keep your brand relevant across channels.",
		work: ["Editorial", "Social Content", "Storytelling"],
		accent: "navy",
	},
] as const;

export type ServiceOffering = (typeof serviceOfferings)[number];
