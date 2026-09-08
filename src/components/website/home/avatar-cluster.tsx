import { motion } from "framer-motion";
import Image from "next/image";
import { avatars } from "@/data/website/home";

export function AvatarCluster({ reducedMotion }: { reducedMotion: boolean }) {
	return (
		<motion.div
			aria-hidden="true"
			className="relative mx-auto aspect-square w-full max-w-[540px]"
			initial={reducedMotion ? false : { opacity: 0, scale: 0.94, y: 28 }}
			transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
			viewport={{ once: true, amount: 0.25 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
		>
			<div className="absolute inset-[14%] rounded-full bg-[var(--secondary)]/70" />
			<div className="absolute top-[5%] right-[12%] h-20 w-20 rounded-full bg-[var(--primary)] sm:h-28 sm:w-28" />
			<div className="absolute bottom-[8%] left-[8%] h-24 w-24 rotate-12 bg-[var(--text-strong)] sm:h-32 sm:w-32" />
			<div className="absolute inset-[8%] grid grid-cols-3 grid-rows-3 place-items-center">
				{avatars.map((avatar, index) => (
					<div
						className={`${avatar.className} relative overflow-hidden rounded-full border-4 border-[var(--background)] shadow-[0_8px_24px_oklch(0.2077_0.0398_265.7549_/_0.12)] ${
							index === 0
								? "col-start-1 row-start-2 -translate-x-2"
								: index === 1
									? "col-start-2 row-start-1 translate-x-2"
									: index === 2
										? "col-start-3 row-start-2 translate-x-1"
										: index === 3
											? "col-start-2 row-start-3 -translate-x-3"
											: "col-start-1 row-start-1 translate-x-4"
						}`}
						key={avatar.src}
					>
						<Image
							alt=""
							className="object-cover"
							fill
							sizes="(max-width: 640px) 30vw, 180px"
							src={avatar.src}
						/>
					</div>
				))}
			</div>
		</motion.div>
	);
}
