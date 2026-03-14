import { memo, useEffect, type JSX } from "react";
import { Link } from "react-router";
import NavigationBar from "../../components/Active/NavigationBar";

import work4 from "../../assets/CinemaBookingUI/cinemabooking.png";

function HorizontalLabel({ children }: { children: string }): JSX.Element {
	return (
		<div className="flex flex-col gap-2 mb-3">
			<span className="text-xs tracking-widest text-muted-foreground uppercase">{children}</span>
			<div className="h-px bg-foreground w-full" />
		</div>
	);
}

function RotatedLabel({ children }: { children: string }): JSX.Element {
	return (
		<div className="flex flex-row items-start gap-2 self-stretch shrink-0">
			<span className="text-xs tracking-widest text-muted-foreground uppercase sticky top-10" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
				{children}
			</span>
			<div className="w-px bg-foreground self-stretch" />
		</div>
	);
}

function CinemaBookingUI() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - Cinema Booking UI";
	});

	return (
		<div>
			<div className="w-full flex justify-center items-center">
				<main className="flex flex-col justify-center items-center w-full lg:w-[60em]">
					<NavigationBar className="mb-8" />

					{/* ── Header ── */}
					<div className="flex flex-col gap-6 w-full px-4 lg:px-0 lg:w-[57em] mb-8">
						<h1 className="text-4xl lg:text-5xl font-light text-foreground">Cinema Booking UI</h1>
						<p className="text-sm text-muted-foreground leading-relaxed max-w-prose">
							A Figma UI design exercise built by following tutorials to strengthen core design skills. The project covers linear gradients, frames and groups for layout and spacing, original shape
							creation with the Bend tool, and integrating plugins and design kits into the workflow.
						</p>
						<Link
							to="https://www.figma.com/design/CRpyDi99kyQcW7WqSDmKXy/Cinema-Booking-App?node-id=0-1&t=6kpPb9y8G3bODYsZ-1"
							target="_blank"
							className="flex justify-center items-center bg-foreground text-background w-30 h-10 text-sm hover:opacity-80 transition-opacity cursor-pointer"
						>
							<span className="text-md">View Design ↗</span>
						</Link>
					</div>

					{/* ── Preview ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-16 lg:hidden">
						<HorizontalLabel>Preview</HorizontalLabel>
						<img src={work4} alt="Cinema Booking UI preview" className="w-full object-cover object-center border border-foreground" />
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-16">
						<RotatedLabel>Preview</RotatedLabel>
						<div className="flex flex-col gap-6 w-full py-2">
							<img src={work4} alt="Cinema Booking UI preview" className="w-full object-cover object-center border border-foreground" />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default memo(CinemaBookingUI);
