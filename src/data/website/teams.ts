export const teams = [
	{
		title: "Web & Engineering Team",
		description:
			"We turn business ideas into clear digital experiences, reliable products, and practical tools built to grow with you.",
		image: {
			src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2ZWxvcG1lbnQlMjB0ZWFtfGVufDB8fDB8fHww",
			alt: "Web and engineering team collaborating around a table",
		},
		shadow: "/shadow/shadow3.png",
	},
	{
		title: "Digital Marketing Team",
		description:
			"Focused campaigns and growth strategy that turn attention into qualified interest and measurable momentum.",
		image: {
			src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80",
			alt: "Digital marketing team in a planning session",
		},
		shadow: "/shadow/shadow2.png",
	},
	{
		title: "Creative Team",
		description:
			"Visual direction and campaign assets that give your business a distinctive, recognizable point of view.",
		image: {
			src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=80",
			alt: "Creative team discussing ideas in a meeting",
		},
		shadow: "/shadow/shadow3.png",
	},
	{
		title: "Content Creation Team",
		description:
			"Useful stories, pages, and editorial content that build trust and support long-term discoverability.",
		image: {
			src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&auto=format&fit=crop&q=80",
			alt: "Content team working together in an office",
		},
		shadow: "/shadow/shadow1.png",
	},
] as const;

export type Team = (typeof teams)[number];
