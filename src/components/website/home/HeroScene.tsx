import { motion } from "framer-motion";
import Image from "next/image";
import { DecorativeShapes } from "@/components/website/home/DecorativeShapes";
import { slides } from "@/components/website/home/hero-data";
import { cn } from "@/lib/utils";

const MotionImage = motion(Image);

export function HeroScene({
	index,
	reduced,
}: {
	index: number;
	reduced: boolean;
}) {
	const slide = slides[index] ?? slides[0];
	return (
		<motion.div
			animate={{ opacity: 1 }}
			className={cn("scene", `scene-${slide.theme}`)}
			exit={{ opacity: 0 }}
			initial={reduced ? false : { opacity: 0 }}
			key={slide.id}
			transition={{ duration: 0.45 }}
		>
			<motion.div
				animate={{ opacity: 1, scaleX: 1, x: "-50%" }}
				className="hero-grid"
				initial={reduced ? false : { opacity: 0, scaleX: 0.88, x: "-50%" }}
				transition={{ duration: 0.55 }}
			/>
			<motion.div
				animate={{ opacity: 1, x: 0 }}
				className="shapes"
				initial={reduced ? false : { opacity: 0, x: 24 }}
				transition={{ duration: 0.5, delay: 0.08 }}
			>
				<DecorativeShapes theme={slide.theme} />
			</motion.div>
			<MotionImage
				alt={slide.alt}
				animate={{ opacity: 1, y: 0, x: "-50%" }}
				className="hero-person"
				exit={{ opacity: 0, y: 20, x: "-50%" }}
				height={900}
				initial={reduced ? { x: "-50%" } : { opacity: 0, y: 50, x: "-50%" }}
				sizes="900px"
				src={slide.person}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				width={900}
			/>
			<motion.div
				animate={{ opacity: 1, x: 0 }}
				className="message-card"
				initial={reduced ? false : { opacity: 0, x: -40 }}
				transition={{ duration: 0.45, delay: 0.12 }}
			>
				<span className="info-mark">i</span>
				<p>
					{slide.card.map((line) => (
						<span key={line}>
							{line}
							<br />
						</span>
					))}
				</p>
			</motion.div>
		</motion.div>
	);
}
