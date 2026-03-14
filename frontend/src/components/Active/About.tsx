import { useRef, useEffect, useCallback, type JSX } from "react";
import { Search, Code, Component } from "lucide-react";

type PastLink = {
	label: string;
	href: string;
};

const SEGMENTS = 16;
const GRAVITY = 0.45;
const DAMPING = 0.965;
const ITERATIONS = 8;
const ROPE_COLOR = "#ff9a00";
const HIGHLIGHT_BG = "#ff9a00";
const HIGHLIGHT_TEXT = "#fff";
const SLACK = 1.25;

type RopeNode = { x: number; y: number; px: number; py: number };

class Rope {
	nodes: RopeNode[];
	segLen: number;
	x1 = 0;
	y1 = 0;
	x2 = 0;
	y2 = 0;
	alpha = 0;

	constructor(x1: number, y1: number, x2: number, y2: number) {
		const dist = Math.hypot(x2 - x1, y2 - y1);
		this.segLen = (dist * SLACK) / SEGMENTS;
		this.nodes = Array.from({ length: SEGMENTS + 1 }, (_, i) => {
			const t = i / SEGMENTS;
			return { x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t, px: x1 + (x2 - x1) * t, py: y1 + (y2 - y1) * t };
		});
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
	}

	reset(x1: number, y1: number, x2: number, y2: number) {
		const dist = Math.hypot(x2 - x1, y2 - y1);
		this.segLen = (dist * SLACK) / SEGMENTS;
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.alpha = 0;
		this.nodes.forEach((n, i) => {
			const t = i / SEGMENTS;
			n.x = x1 + (x2 - x1) * t;
			n.y = y1 + (y2 - y1) * t - 80 * Math.sin(Math.PI * t);
			n.px = n.x;
			n.py = n.y - 3;
		});
	}

	update() {
		for (let i = 1; i < this.nodes.length - 1; i++) {
			const n = this.nodes[i];
			const vx = (n.x - n.px) * DAMPING;
			const vy = (n.y - n.py) * DAMPING;
			n.px = n.x;
			n.py = n.y;
			n.x += vx;
			n.y += vy + GRAVITY;
		}
		for (let iter = 0; iter < ITERATIONS; iter++) {
			this.nodes[0].x = this.x1;
			this.nodes[0].y = this.y1;
			this.nodes[SEGMENTS].x = this.x2;
			this.nodes[SEGMENTS].y = this.y2;
			for (let i = 0; i < this.nodes.length - 1; i++) {
				const a = this.nodes[i],
					b = this.nodes[i + 1];
				const dx = b.x - a.x,
					dy = b.y - a.y;
				const dist = Math.hypot(dx, dy) || 0.001;
				const diff = (dist - this.segLen) / dist / 2;
				const ox = dx * diff,
					oy = dy * diff;
				if (i !== 0) {
					a.x += ox;
					a.y += oy;
				}
				if (i + 1 !== SEGMENTS) {
					b.x -= ox;
					b.y -= oy;
				}
			}
		}
		this.alpha = Math.min(this.alpha + 0.06, 1);
	}

	getSmoothPath(): string {
		const pts = this.nodes;
		if (pts.length < 2) return "";
		let d = `M ${pts[0].x},${pts[0].y}`;
		for (let i = 0; i < pts.length - 1; i++) {
			const p0 = pts[Math.max(i - 1, 0)];
			const p1 = pts[i];
			const p2 = pts[i + 1];
			const p3 = pts[Math.min(i + 2, pts.length - 1)];
			const cp1x = p1.x + (p2.x - p0.x) / 6;
			const cp1y = p1.y + (p2.y - p0.y) / 6;
			const cp2x = p2.x - (p3.x - p1.x) / 6;
			const cp2y = p2.y - (p3.y - p1.y) / 6;
			d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
		}
		return d;
	}
}

function getEdge(el: HTMLElement, container: HTMLElement, side: "right" | "left") {
	const er = el.getBoundingClientRect();
	const cr = container.getBoundingClientRect();
	return {
		x: side === "right" ? er.right - cr.left : er.left - cr.left,
		y: er.top + er.height / 2 - cr.top,
	};
}

function applyHighlight(el: HTMLElement | null) {
	if (!el) return;
	el.style.backgroundColor = HIGHLIGHT_BG;
	el.style.color = HIGHLIGHT_TEXT;
	el.style.transition = "background-color 0.2s, color 0.2s";
}

function clearHighlight(el: HTMLElement | null) {
	if (!el) return;
	el.style.backgroundColor = "";
	el.style.color = "";
}

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

function LinkedName({ label, href }: PastLink): JSX.Element {
	return (
		<a href={href} className="font-medium text-portal underline underline-offset-2 hover:opacity-70 transition-opacity">
			{label}
		</a>
	);
}

export default function AboutSection(): JSX.Element {
	const containerRef = useRef<HTMLDivElement>(null);
	const svgRef = useRef<SVGSVGElement>(null);
	const triggerRef = useRef<HTMLElement | null>(null);
	const uxResearchRef = useRef<HTMLElement | null>(null);
	const uxDesignRef = useRef<HTMLElement | null>(null);

	const polylineRefs = useRef<Record<string, SVGPolylineElement | null>>({});
	const ropesRef = useRef<Record<string, Rope>>({});
	const animRef = useRef<number | null>(null);
	const activeRef = useRef<Set<string>>(new Set());

	useEffect(() => {
		const svg = svgRef.current;
		if (!svg) return;
		["ux-research", "ux-design"].forEach((id) => {
			const pl = document.createElementNS("http://www.w3.org/2000/svg", "path");
			pl.setAttribute("fill", "none");
			pl.setAttribute("stroke", ROPE_COLOR);
			pl.setAttribute("stroke-width", "1.5");
			pl.setAttribute("stroke-linecap", "round");
			pl.setAttribute("stroke-linejoin", "round");
			pl.style.opacity = "0";
			svg.appendChild(pl);
			polylineRefs.current[id] = pl as unknown as SVGPolylineElement;
		});
		return () => {
			svg.innerHTML = "";
		};
	}, []);

	const loop = useCallback(() => {
		if (activeRef.current.size === 0) {
			animRef.current = null;
			return;
		}
		activeRef.current.forEach((id) => {
			const rope = ropesRef.current[id];
			const pl = polylineRefs.current[id];
			if (!rope || !pl) return;
			rope.update();
			pl.setAttribute("d", rope.getSmoothPath());
			pl.style.opacity = String(rope.alpha);
		});
		animRef.current = requestAnimationFrame(loop);
	}, []);

	const showRopes = useCallback(() => {
		const container = containerRef.current;
		const trigger = triggerRef.current;
		if (!container || !trigger) return;

		const src = getEdge(trigger, container, "right");

		const targets: Record<string, HTMLElement | null> = {
			"ux-research": uxResearchRef.current,
			"ux-design": uxDesignRef.current,
		};

		Object.entries(targets).forEach(([id, titleEl]) => {
			if (!titleEl) return;
			const dst = getEdge(titleEl, container, "left");
			if (!ropesRef.current[id]) {
				ropesRef.current[id] = new Rope(src.x, src.y, dst.x, dst.y);
			}
			ropesRef.current[id].reset(src.x, src.y, dst.x, dst.y);
			activeRef.current.add(id);
			applyHighlight(titleEl);
		});

		applyHighlight(trigger);

		if (!animRef.current) animRef.current = requestAnimationFrame(loop);
	}, [loop]);

	const hideRopes = useCallback(() => {
		activeRef.current.clear();
		Object.values(polylineRefs.current).forEach((pl) => {
			if (pl) pl.style.opacity = "0";
		});
		clearHighlight(triggerRef.current);
		clearHighlight(uxResearchRef.current);
		clearHighlight(uxDesignRef.current);
	}, []);

	return (
		<>
			{/* Mobile */}
			<div className="flex flex-col gap-8 px-4 lg:hidden">
				<div className="flex flex-col">
					<HorizontalLabel>Who</HorizontalLabel>
					<p className="text-sm leading-relaxed text-muted-foreground">
						<strong>UI/UX Designer & Researcher.</strong> Shaping digital experiences by bridging human psychology with intuitive, research-backed interface design.
					</p>
				</div>
				<div className="flex flex-col">
					<HorizontalLabel>Past</HorizontalLabel>
					<div className="space-y-4">
						<p className="text-sm text-muted-foreground leading-relaxed">
							<strong>Research Assistant</strong> in <LinkedName label="Stigma and Motivation Lab" href="https://www.neellab.ca/people.html" />. Conducted literature reviews, managed data collection
							in R, and programmed experimental studies.
						</p>
						<p className="text-sm text-muted-foreground leading-relaxed">
							<strong>Marketing Coordinator</strong> at UTM TSA. Designed high-engagement promotional assets and visual materials using Canva and Photoshop to enhance digital reach.
						</p>
					</div>
				</div>
				<div className="flex flex-col">
					<HorizontalLabel>Now</HorizontalLabel>
					<div className="space-y-6">
						<div className="flex items-start gap-3">
							<div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-foreground">
								<Search size={14} />
							</div>
							<p className="text-sm leading-relaxed text-foreground">
								<strong>UX Research</strong> — Leading qualitative research through Contextual Inquiry, Participatory Design, and user journey mapping. Identifying systemic breakdowns and friction via
								usability testing and emotion mapping.
							</p>
						</div>
						<div className="flex items-start gap-3">
							<div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-foreground">
								<Component size={14} />
							</div>
							<p className="text-sm leading-relaxed text-foreground">
								<strong>UI/UX Design</strong> — Architecting user-centric designs and high-fidelity prototypes using Figma and Adobe XD.
							</p>
						</div>
						<div className="flex items-start gap-3">
							<div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-foreground">
								<Code size={14} />
							</div>
							<p className="text-sm leading-relaxed text-foreground">
								<strong>Digital Development</strong> — Developing digital solutions and building responsive interfaces through TypeScript, Python, and React.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Desktop */}
			<div ref={containerRef} className="hidden lg:grid grid-cols-2 gap-0 w-[57em] mb-4 relative">
				{/* SVG overlay */}
				<svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10, overflow: "visible" }} />

				{/* Left */}
				<div className="flex flex-col gap-4 pr-8">
					<div className="flex flex-row gap-4">
						<RotatedLabel>Who</RotatedLabel>
						<div className="space-y-6 py-2">
							<p className="text-sm leading-relaxed text-muted-foreground">
								<strong
									ref={(el) => {
										triggerRef.current = el;
									}}
									className="cursor-default border-b border-dotted border-current"
									onMouseEnter={showRopes}
									onMouseLeave={hideRopes}
								>
									UI/UX Designer & Researcher.
								</strong>{" "}
								Shaping digital experiences by bridging human psychology with intuitive, research-backed interface design.
							</p>
						</div>
					</div>

					<div className="flex flex-row gap-4">
						<RotatedLabel>Past</RotatedLabel>
						<div className="space-y-6 py-2">
							<p className="text-sm text-muted-foreground leading-relaxed">
								<strong>Research Assistant</strong> in <LinkedName label="Stigma and Motivation Lab" href="https://www.neellab.ca/people.html" />. Conducted literature reviews, managed data collection
								in R, and programmed experimental studies.
							</p>
							<p className="text-sm text-muted-foreground leading-relaxed">
								<strong>Marketing Coordinator</strong> at UTM TSA. Designed high-engagement promotional assets and visual materials using Canva and Photoshop to enhance digital reach.
							</p>
						</div>
					</div>
				</div>

				{/* Right */}
				<div className="flex flex-row gap-4 pl-8">
					<RotatedLabel>Now</RotatedLabel>
					<div className="space-y-6 py-2">
						<div className="flex items-start gap-3">
							<div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-foreground">
								<Search size={14} />
							</div>
							<p className="text-sm leading-relaxed text-foreground">
								<strong
									ref={(el) => {
										uxResearchRef.current = el;
									}}
								>
									UX Research
								</strong>{" "}
								— Leading qualitative research through Contextual Inquiry, Participatory Design, and user journey mapping. Identifying systemic breakdowns and friction via usability testing and
								emotion mapping.
							</p>
						</div>
						<div className="flex items-start gap-3">
							<div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-foreground">
								<Component size={14} />
							</div>
							<p className="text-sm leading-relaxed text-foreground">
								<strong
									ref={(el) => {
										uxDesignRef.current = el;
									}}
								>
									UI/UX Design
								</strong>{" "}
								— Architecting user-centric designs and high-fidelity prototypes using Figma and Adobe XD.
							</p>
						</div>
						<div className="flex items-start gap-3">
							<div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-foreground">
								<Code size={14} />
							</div>
							<p className="text-sm leading-relaxed text-foreground">
								<strong>Digital Development</strong> — Developing digital solutions and building responsive interfaces through TypeScript, Python, and React.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
