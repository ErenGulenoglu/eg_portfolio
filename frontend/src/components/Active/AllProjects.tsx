import type { JSX } from "react";
import { Link } from "react-router";
import utmconnect_image from "../../assets/CCT305/preview_305.png";
import hazelux_image from "../../assets/CCT477/Utm477.jpg";
import unilink_image from "../../assets/CCT434/unilinkpreview.png";
import cinameapp_image from "../../assets/CinemaBookingUI/cinemabooking.png";

function RotatedLabel({ children }: { children: string }): JSX.Element {
	return (
		<div className="flex flex-row items-start gap-2 self-stretch">
			<span className="text-xs tracking-widest text-muted-foreground uppercase sticky top-10" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
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

export default function ProjectsSection(): JSX.Element {
	return (
		<>
			{/* Mobile */}
			<div className="flex flex-col gap-8 px-4 mb-8 lg:hidden">
				<div className="flex flex-col gap-10">
					<HorizontalLabel>PORTFOLIO</HorizontalLabel>

					{/* Project 1 */}
					<div className="flex flex-col gap-3">
						<div className="w-full rounded-sm overflow-hidden border border-black">
							<img src={utmconnect_image} alt="UTM Connect" className="w-full h-auto object-cover object-center" />
						</div>
						<span className="text-foreground font-bold text-lg leading-snug">UTM Connect - High Fidelity UI/UX Design Case Study</span>
						<p className="text-sm text-muted-foreground leading-relaxed">
							UTM Connect is a mobile app concept designed to help UTM students discover student clubs, stay informed about events, and connect with campus communities. Built through user research and
							iterative prototyping, the project addresses common challenges such as scattered club information, low engagement, and difficulty balancing academic and social life. The final design
							emphasizes clarity, accessibility, and familiar social interactions to support meaningful participation in campus life.
						</p>
						<Link to="/utm-connect-ux" className="flex bg-foreground text-white hover:cursor-pointer w-28 h-10 text-center items-center justify-center">
							<span>View Project</span>
						</Link>
					</div>

					<div className="h-px bg-foreground/20 w-full" />

					{/* Project 2 */}
					<div className="flex flex-col gap-3">
						<div className="w-full rounded-sm overflow-hidden border border-black">
							<img src={hazelux_image} alt="Mississaugua Library UX Research" className="w-full h-auto object-cover object-center" />
						</div>
						<span className="text-foreground font-bold text-lg leading-snug">Improving Transparency in the Mississauga Library Makerspace</span>
						<p className="text-sm text-muted-foreground leading-relaxed">
							This project investigates the user experience of 3D printing services at the Hazel McCallion Central Library's makerspace, focusing on how transparency, staff dependency, and unclear
							wait times shape user frustration. Using Contextual Inquiry, I observed how experienced makers navigate a structured and time-limited library environment while preparing and submitting
							3D prints.
						</p>
						<Link to="/hazel-mccallion-ux" className="flex bg-foreground text-white hover:cursor-pointer w-28 h-10 text-center items-center justify-center">
							<span>View Project</span>
						</Link>
					</div>

					<div className="h-px bg-foreground/20 w-full" />

					{/* Project 3 */}
					<div className="flex flex-col gap-3">
						<div className="w-full rounded-sm overflow-hidden border border-black">
							<img src={unilink_image} alt="UniLink" className="w-full h-auto object-cover object-center" />
						</div>
						<span className="text-foreground font-bold text-lg leading-snug">UniLink - Mid Fidelity UI/UX Design Project</span>
						<p className="text-sm text-muted-foreground leading-relaxed">
							UniLink is a mobile app that helps University of Toronto Mississauga students form meaningful friendships and romantic connections in a safe, verified environment. By using UofT
							credentials, the app ensures all users are real students while focusing on interest-based and academic matching rather than superficial swiping. Designed with an intuitive interface and
							low-pressure interactions, UniLink encourages authentic connections, in-person meetups, and cross-cultural communication, making it easier for students to expand their social networks
							and navigate campus life.
						</p>
						<Link to="/unilink-ux" className="flex bg-foreground text-white hover:cursor-pointer w-28 h-10 text-center items-center justify-center">
							<span>View Project</span>
						</Link>
					</div>

					{/* Project 4 */}
					<div className="flex flex-col gap-3">
						<div className="w-full rounded-sm overflow-hidden border border-black">
							<img src={cinameapp_image} alt="Cinema Booking App" className="w-full h-auto object-cover object-center" />
						</div>
						<span className="text-foreground font-bold text-lg leading-snug">Cinema Booking App - User Interface Design Project</span>
						<p className="text-sm text-muted-foreground leading-relaxed">
							I created this project by following tutorials to strengthen my skills in Figma’s design tools. Through this process, I learned how to create and apply linear gradients, effectively use
							frames and groups to improve spacing and layout, design original shapes using the Bend tool, and integrate plugins and design kits into my workflow.
						</p>
						<Link to="/cinema-booking-ui" className="flex bg-foreground text-white hover:cursor-pointer w-28 h-10 text-center items-center justify-center">
							<span>View Project</span>
						</Link>
					</div>
				</div>
			</div>

			{/* Desktop */}
			<div className="hidden lg:flex flex-col w-full justify-start items-start gap-8 mb-8 lg:w-[58em]">
				<div className="flex flex-row gap-6 w-full">
					<RotatedLabel>PORTFOLIO</RotatedLabel>

					<div className="flex flex-col gap-12 w-full">
						{/* Project 1 */}
						<div className="flex flex-col gap-4 w-full">
							<span className="text-foreground font-bold text-2xl">UTM Connect - High Fidelity UI/UX Design Case Study</span>
							<div className="w-full flex flex-row justify-between items-start gap-4">
								<div className="w-[50%] flex flex-col gap-4">
									<p className="text-sm text-muted-foreground leading-relaxed">
										UTM Connect is a mobile app concept designed to help UTM students discover student clubs, stay informed about events, and connect with campus communities. Built through user
										research and iterative prototyping, the project addresses common challenges such as scattered club information, low engagement, and difficulty balancing academic and social life.
										The final design emphasizes clarity, accessibility, and familiar social interactions to support meaningful participation in campus life.
									</p>
									<Link to="/utm-connect-ux" className="flex bg-foreground text-white hover:cursor-pointer w-28 h-10 text-center items-center justify-center">
										<span>View Project</span>
									</Link>
								</div>
								<div className="w-[50%] h-[16em] rounded-sm overflow-hidden border border-black">
									<img src={utmconnect_image} alt="UTM Connect" className="w-full h-full object-cover object-center" />
								</div>
							</div>
						</div>

						{/* Project 2 */}
						<div className="flex flex-col gap-4 w-full">
							<span className="text-foreground font-bold text-2xl">Improving Transparency in the Mississauga Library Makerspace - UX Research Case Study</span>
							<div className="w-full flex flex-row justify-between items-start gap-4">
								<div className="w-[50%] flex flex-col gap-4">
									<p className="text-sm text-muted-foreground leading-relaxed">
										This project investigates the user experience of 3D printing services at the Hazel McCallion Central Library's makerspace, focusing on how transparency, staff dependency, and
										unclear wait times shape user frustration. Using Contextual Inquiry, I observed how experienced makers navigate a structured and time-limited library environment while preparing
										and submitting 3D prints.
									</p>
									<Link to="/hazel-mccallion-ux" className="flex bg-foreground text-white hover:cursor-pointer w-28 h-10 text-center items-center justify-center">
										<span>View Project</span>
									</Link>
								</div>
								<div className="w-[50%] h-[16em] rounded-sm overflow-hidden border border-black">
									<img src={hazelux_image} alt="Mississauga Library UX Research" className="w-full h-full object-cover object-center" />
								</div>
							</div>
						</div>

						{/* Project 3 */}
						<div className="flex flex-col gap-4 w-full">
							<span className="text-foreground font-bold text-2xl">UniLink - Mid Fidelity UI/UX Design Project</span>
							<div className="w-full flex flex-row justify-between items-start gap-4">
								<div className="w-[50%] flex flex-col gap-4">
									<p className="text-sm text-muted-foreground leading-relaxed">
										UniLink is a mobile app that helps University of Toronto Mississauga students form meaningful friendships and romantic connections in a safe, verified environment. By using UofT
										credentials, the app ensures all users are real students while focusing on interest-based and academic matching rather than superficial swiping. Designed with an intuitive
										interface and low-pressure interactions, UniLink encourages authentic connections, in-person meetups, and cross-cultural communication, making it easier for students to expand
										their social networks and navigate campus life.
									</p>
									<Link to="/unilink-ux" className="flex bg-foreground text-white hover:cursor-pointer w-28 h-10 text-center items-center justify-center">
										<span>View Project</span>
									</Link>
								</div>
								<div className="w-[50%] h-[16em] rounded-sm overflow-hidden border border-black">
									<img src={unilink_image} alt="UniLink" className="w-full h-full object-cover object-center" />
								</div>
							</div>
						</div>

						{/* Project 4 */}
						<div className="flex flex-col gap-4 w-full">
							<span className="text-foreground font-bold text-2xl">Cinema Booking App - User Interface Design Project</span>
							<div className="w-full flex flex-row justify-between items-start gap-4">
								<div className="w-[50%] flex flex-col gap-4">
									<p className="text-sm text-muted-foreground leading-relaxed">
										I created this project by following tutorials to strengthen my skills in Figma’s design tools. Through this process, I learned how to create and apply linear gradients, effectively
										use frames and groups to improve spacing and layout, design original shapes using the Bend tool, and integrate plugins and design kits into my workflow.
									</p>

									<Link to="/cinema-booking-ui" className="flex bg-foreground text-white hover:cursor-pointer w-28 h-10 text-center items-center justify-center">
										<span>View Project</span>
									</Link>
								</div>
								<div className="w-[50%] h-[16em] rounded-sm overflow-hidden border border-black">
									<img src={cinameapp_image} alt="Cinema Booking App" className="w-full h-full object-cover object-center" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
