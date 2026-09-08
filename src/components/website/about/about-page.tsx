import { ActionLink } from "@/components/ui/action";
import { AboutVisual } from "@/components/website/about/about-visual";
import { TeamSection } from "@/components/website/about/team-section";
import { about } from "@/data/website/about";

export function AboutPage() {
	return (
		<main className="relative isolate z-10 min-h-screen bg-background text-foreground">
			<section
				aria-labelledby="about-page-title"
				className="mx-auto grid max-w-[1600px] gap-20 px-6 py-28 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:items-center lg:gap-24 lg:px-16 lg:py-40"
			>
				<AboutVisual />

				<div>
					<h1
						className="max-w-xl font-bold text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
						id="about-page-title"
					>
						{about.title}
					</h1>
					<div className="mt-8 max-w-xl space-y-5 text-[var(--text-default)] text-lg leading-8">
						<p>{about.intro}</p>
						{about.body.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
					<ActionLink className="mt-10" href="/#services">
						Explore what we offer
					</ActionLink>
				</div>
			</section>
			<TeamSection />
		</main>
	);
}
