import type { JSX } from "react";

function RotatedLabel({ children }: { children: string }): JSX.Element {
	return (
		<div className="flex flex-row items-start gap-2">
			<span className="text-xs tracking-widest text-muted-foreground uppercase" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
				{children}
			</span>
			<div className="w-px bg-foreground self-stretch" />
		</div>
	);
}

function Projects() {
	return (
		<div className="flex flex-col w-full justify-start items-start lg:w-[58em]">
			<div className="flex flex-row gap-4 w-full">
				<RotatedLabel>UI/UX PROJECTS</RotatedLabel>
				<div className="w-full">
					<header className={`sticky top-0 flex flex-row w-full justify-between items-center px-8 bg-foreground`}></header>
					<span className="text-foreground font-bold text-2xl py-4">UTM Connect</span>
					<p className="text-sm text-muted-foreground leading-relaxed">
						Founder of . Investor in and other Energy, AI, Robotics ideas. Founder of . Investor in and other Energy, AI, Robotics ideas.Founder of . Investor in and other Energy, AI, Robotics
						ideas.Founder of . Investor in and other Energy, AI, Robotics ideas.Founder of . Investor in and other Energy, AI, Robotics ideas.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Projects;
