import {
	AboutSection,
	CtaSection,
	ProcessSection,
	ProofSection,
	ServicesSection,
	TeamSection,
	WhyChooseUsSection,
} from "@/components/website/home";
import { Hero } from "@/components/website/home/Hero";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
	// const session = await getSession();

	// if (session) {
	// 	void api.post.getLatest.prefetch();
	// }

	return (
		<HydrateClient>
			<main className="relative isolate z-10 flex min-h-screen flex-col gap-28 bg-background text-foreground lg:gap-40">
				<Hero />
				<ServicesSection />
				<WhyChooseUsSection />
				{/* <ProcessSection /> */}
				<ProofSection />
				<AboutSection />
				<TeamSection />
			</main>
		</HydrateClient>
	);
}
