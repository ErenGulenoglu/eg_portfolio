import type { JSX } from "react";
import { Link } from "react-router-dom";

function RotatedLabel({ children }: { children: string }): JSX.Element {
	return (
		<div className="flex flex-row items-start gap-2 self-stretch">
			<span className="text-xs tracking-widest text-portal uppercase sticky top-10" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
				{children}
			</span>
			<div className="w-px bg-portal self-stretch" />
		</div>
	);
}

function HorizontalLabel({ children }: { children: string }): JSX.Element {
	return (
		<div className="flex flex-col gap-2 mb-3">
			<span className="text-xs tracking-widest text-portal uppercase">{children}</span>
			<div className="h-px bg-portal w-full" />
		</div>
	);
}

const links = [
	{
		href: "https://drive.google.com/file/d/1FvPGERhikQVmeOl54xbbyEbzgOj9jygP/view",
		label: "Resume",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
				<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
				<polyline points="14 2 14 8 20 8" />
			</svg>
		),
	},
	{
		href: "https://www.linkedin.com/in/eren-gulenoglu-95690627b/",
		label: "LinkedIn",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 850" className="w-6 h-6 fill-current">
				<path d="M165 90q0 35-21 59t-62 24q-37 0-59-24T0 95q0-35 23-61T83 8t60 24t22 58M0 750h165V214H0zm560-528q-32 0-57 8t-45 21t-33 27t-21 27h-4l-9-70H243q0 34 2 74t2 86v355h165V457q0-12 1-22t3-19q4-11 11-23t16-21t22-16t29-6q44 0 64 32t19 83v285h165V445q0-57-14-99t-38-70t-58-41t-72-13" />
			</svg>
		),
	},
	{
		href: "https://github.com/ErenGulenoglu",
		label: "Github",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
				<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
			</svg>
		),
	},
];

function Resources() {
	return (
		<div className="flex flex-col w-full justify-center items-center my-8 lg:w-[58em]">
			{/* Mobile */}
			<div className="flex flex-col w-full px-4 lg:hidden">
				<HorizontalLabel>Social</HorizontalLabel>
				<div className="flex flex-row flex-wrap justify-center items-center gap-4">
					{links.map(({ href, label, icon }) => (
						<Link key={label} to={href} target="_blank">
							<div className="flex flex-col h-18 w-18 justify-center items-center border border-muted-foreground rounded-md hover:bg-[#f5e8e8] transition-colors">
								{icon}
								<span className="flex text-center text-sm text-muted-foreground justify-center items-center">{label}</span>
							</div>
						</Link>
					))}
				</div>
			</div>

			{/* Desktop */}
			<div className="hidden lg:flex flex-row gap-4 w-full">
				<RotatedLabel>SOCIAL</RotatedLabel>
				<div className="flex flex-row flex-wrap w-full justify-center items-center gap-4">
					{links.map(({ href, label, icon }) => (
						<Link key={label} to={href} target="_blank">
							<div className="flex flex-col h-18 w-18 justify-center items-center border border-muted-portal rounded-md hover:bg-muted-portal transition-colors">
								{icon}
								<span className="flex text-center text-sm text-muted-foreground justify-center items-center">{label}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Resources;
