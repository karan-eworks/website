import { Hero } from "@/components/website/home/Hero";
import { HydrateClient } from "@/trpc/server";


export default async function Home() {

	// const session = await getSession();

	// if (session) {
	// 	void api.post.getLatest.prefetch();
	// }

	return (
		<HydrateClient>
			<main className="relative z-10 isolate min-h-screen bg-background text-foreground">
				<Hero />
    		</main>
		</HydrateClient>
	);
}
