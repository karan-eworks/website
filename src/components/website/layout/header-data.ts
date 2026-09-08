const companyLinks = ["Careers", "Contact", "Legal Information"];
const serviceLinks = [
	"Websites",
	"Engineering",
	"SEO",
	"Digital Marketing",
	"Creative",
	"Content Creation",
];
const resourceLinks = ["Blogs", "Articles", "News"];

export const menuConfigs = {
	services: {
		introTitle: "How We Help",
		introDescription:
			"One coordinated team across the disciplines that move a business forward.",
		sectionTitle: "Our Capabilities",
		sectionDescription:
			"Practical digital services built around your business goals.",
		links: serviceLinks,
	},
	resources: {
		introTitle: "Resources",
		introDescription:
			"Ideas and insights for building a stronger digital business.",
		sectionTitle: "Explore",
		sectionDescription: "Keep learning with the latest from E-works.",
		links: resourceLinks,
	},
	company: {
		introTitle: "About E-works",
		introDescription: "Our vision, mission, and impact.",
		sectionTitle: "Company Information",
		sectionDescription:
			"Careers, contact information, legal documents, and more.",
		links: companyLinks,
	},
} as const;

export type Menu = keyof typeof menuConfigs;
