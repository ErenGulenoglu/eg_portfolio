import type { JSX } from "react";

type IconType = "target" | "chat" | "star";

type NowItem = {
	title: string;
	desc: string;
	icon: IconType;
};

type PastLink = {
	label: string;
	href: string;
};

const nowItems: NowItem[] = [
	{
		title: "Pervasive",
		desc: "prototyping the missing piece between AI and deterministic UI. Looking for better ergonomics and ultimately — new OS.",
		icon: "target",
	},
	{
		title: "Go-Sip",
		desc: "weaving new social fabric. Connecting worlds by bringing social features to everything, instead of giving up everything to particular social media.",
		icon: "chat",
	},
	{
		title: "Founder Class",
		desc: "founders' members club. Britain can get tremendous growth through unique cultural, geographical position and open competition.",
		icon: "star",
	},
];

function NowIcon({ type }: { type: IconType }): JSX.Element {
	if (type === "target") {
		return (
			<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
				<circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" />
				<circle cx="8" cy="8" r="2" fill="currentColor" />
			</svg>
		);
	}
	if (type === "chat") {
		return (
			<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
				<path d="M3 6c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z" stroke="currentColor" strokeWidth="1.5" />
				<circle cx="6" cy="6" r="1" fill="currentColor" />
			</svg>
		);
	}
	return (
		<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
			<path d="M8 2l1.5 3.5L13 6l-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
		</svg>
	);
}

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

function HorizontalLabel({ children }: { children: string }): JSX.Element {
	return (
		<div className="flex flex-col gap-2 mb-3">
			<span className="text-xs tracking-widest text-muted-foreground uppercase">{children}</span>
			<div className="h-px bg-foreground w-full" />
		</div>
	);
}

function LinkedName({ label, href }: PastLink): JSX.Element {
	return (
		<a href={href} className="font-medium text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity">
			{label}
		</a>
	);
}

function NowCard({ title, desc, icon }: NowItem): JSX.Element {
	return (
		<div className="flex items-start gap-3">
			<div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">
				<NowIcon type={icon} />
			</div>
			<p className="text-sm leading-relaxed text-foreground">
				<span className="font-medium">{title}</span> — {desc}
			</p>
		</div>
	);
}

export default function AboutSection(): JSX.Element {
	return (
		<>
			{/* Mobile */}
			<div className="flex flex-col gap-8 px-4 lg:hidden">
				<div className="flex flex-col">
					<HorizontalLabel>Who</HorizontalLabel>
					<p className="text-sm leading-relaxed text-muted-foreground">Digital Designer. Shaping tech that increases productivity, grows economy and improves culture.</p>
				</div>

				<div className="flex flex-col">
					<HorizontalLabel>Past</HorizontalLabel>
					<div className="space-y-4">
						<p className="text-sm text-muted-foreground leading-relaxed">
							Founder of <LinkedName label="Super Clear" href="#" />. Investor in <LinkedName label="Anthropic" href="#" />, <LinkedName label="Neuralink" href="#" />,{" "}
							<LinkedName label="FigureAI" href="#" />, <LinkedName label="Phantom Space" href="#" />, <LinkedName label="Haply" href="#" /> and other Energy, AI, Robotics ideas.
						</p>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Launched products, projects, platforms and companies. Leading creative and product teams for consumer industry. Contributed to <LinkedName label="Grammarly" href="#" />,{" "}
							<LinkedName label="Spark" href="#" />, <LinkedName label="Mistral" href="#" /> and hundreds of others.
						</p>
					</div>
				</div>

				<div className="flex flex-col">
					<HorizontalLabel>Now</HorizontalLabel>
					<div className="space-y-6">
						{nowItems.map((item) => (
							<NowCard key={item.title} {...item} />
						))}
					</div>
				</div>
			</div>

			{/* Desktop */}
			<div className="hidden lg:grid grid-cols-2 gap-0 w-[57em]">
				{/* Left */}
				<div className="flex flex-col gap-4 pr-8">
					<div className="flex flex-row gap-4">
						<RotatedLabel>Who</RotatedLabel>
						<div className="space-y-6 py-2">
							<p className="text-sm leading-relaxed text-muted-foreground">Digital Designer. Shaping tech that increases productivity, grows economy and improves culture.</p>
						</div>
					</div>
					<div className="flex flex-row gap-4">
						<RotatedLabel>Past</RotatedLabel>
						<div className="space-y-6 py-2">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Founder of <LinkedName label="Super Clear" href="#" />. Investor in <LinkedName label="Anthropic" href="#" />, <LinkedName label="Neuralink" href="#" />,{" "}
								<LinkedName label="FigureAI" href="#" />, <LinkedName label="Phantom Space" href="#" />, <LinkedName label="Haply" href="#" /> and other Energy, AI, Robotics ideas.
							</p>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Launched products, projects, platforms and companies. Leading creative and product teams for consumer industry. Contributed to <LinkedName label="Grammarly" href="#" />,{" "}
								<LinkedName label="Spark" href="#" />, <LinkedName label="Mistral" href="#" /> and hundreds of others.
							</p>
						</div>
					</div>
				</div>

				{/* Right */}
				<div className="flex flex-row gap-4 pl-8">
					<RotatedLabel>Now</RotatedLabel>
					<div className="space-y-6 py-2">
						{nowItems.map((item) => (
							<NowCard key={item.title} {...item} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
