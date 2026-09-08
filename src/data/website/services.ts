export const serviceOfferings = [
	{
		id: "website-development",
		title: "Website Development",
		description:
			"Clear, conversion-focused websites that give your business a stronger digital foundation.",
		work: ["Strategy", "UX / UI", "Web Development"],
		accent: "blue",
	},
	{
		id: "product-engineering",
		title: "Product Engineering",
		description:
			"Reliable digital products and internal tools built around how your business works.",
		work: ["Product Strategy", "Frontend", "Backend"],
		accent: "lime",
	},
	{
		id: "seo",
		title: "SEO",
		description:
			"Structured search visibility that helps the right people discover your business.",
		work: ["Technical SEO", "Content Strategy", "Search Visibility"],
		accent: "navy",
	},
	{
		id: "digital-marketing",
		title: "Digital Marketing",
		description:
			"Focused campaigns that turn attention into qualified interest and useful momentum.",
		work: ["Campaigns", "Paid Media", "Growth Strategy"],
		accent: "lime",
	},
	{
		id: "creative-services",
		title: "Creative Services",
		description:
			"Visual direction and brand assets that make your business easier to recognize and remember.",
		work: ["Art Direction", "Brand Systems", "Visual Design"],
		accent: "blue",
	},
	{
		id: "content-creation",
		title: "Content Creation",
		description:
			"Useful, consistent content that keeps your brand visible and gives your audience reasons to return.",
		work: ["Editorial", "Social Content", "Storytelling"],
		accent: "navy",
	},
] as const;

export type ServiceOffering = (typeof serviceOfferings)[number];
