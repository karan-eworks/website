export function DecorativeShapes({ theme }: { theme: string }) {
	if (theme === "pink")
		return (
			<>
				<div className="shape bars" />
				<div className="shape arrow" />
				<div className="shape olives">
					<i />
					<i />
					<i />
				</div>
			</>
		);
	if (theme === "green")
		return (
			<>
				<div className="shape triangle" />
				<div className="shape strokes" />
				<div className="shape green-circles">
					<i />
					<i />
					<i />
					<i />
				</div>
			</>
		);
	return null;
}
