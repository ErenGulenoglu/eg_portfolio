import type { JSX } from "react";
import utmconnect_image from "../../assets/CCT305/preview_305.png";
import hazelux_image from "../../assets/CCT477/Utm477.jpg";
import unilink_image from "../../assets/CCT434/unilinkpreview.png";

import ButtonProt from "../ButtonProt";

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

export default function ProjectsSection(): JSX.Element {
	return (
		<>
			{/* Mobile */}
			<div className="flex flex-col gap-8 px-4 mb-8 lg:hidden">
				<div className="w-full flex justify-center items-center">
					<ButtonProt extension="/portfolio" buttonText="See Full Portfolio" className="w-40 h-10" />
				</div>
				<div className="flex flex-col gap-10">
					<HorizontalLabel>Featured Works</HorizontalLabel>

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
						<p>
							<strong>Tools:</strong> Figma, Miro
						</p>
						<ButtonProt extension="/utm-connect-ux" buttonText="View Project" className="w-28 h-10" />
					</div>

					<div className="h-px bg-muted-portal w-full" />

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
						<p>
							<strong>Tools:</strong> Miro, Canva
						</p>
						<ButtonProt extension="/hazel-mccallion-ux" buttonText="View Project" className="w-28 h-10" />
					</div>

					<div className="h-px bg-muted-portal w-full" />

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
						<p>
							<strong>Tools:</strong> Adobe XD
						</p>
						<ButtonProt extension="/unilink-ux" buttonText="View Project" className="w-28 h-10" />
					</div>
				</div>
			</div>

			{/* Desktop */}
			<div className="hidden lg:flex flex-col w-full justify-start items-start gap-8 mb-8 lg:w-[58em]">
				<div className="flex flex-row gap-6 w-full">
					<RotatedLabel>FEATURED WORKS</RotatedLabel>

					<div className="flex flex-col gap-12 w-full">
						<div className="w-full flex justify-center items-center">
							<ButtonProt extension="/portfolio" buttonText="See Full Portfolio" className="w-40 h-10" />
						</div>
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
									<p>
										<strong>Tools:</strong> Figma, Miro
									</p>
									<ButtonProt extension="/utm-connect-ux" buttonText="View Project" />
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
									<p>
										<strong>Tools:</strong> Miro, Canva
									</p>
									<ButtonProt extension="/hazel-mccallion-ux" buttonText="View Project" />
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
									<p>
										<strong>Tools:</strong> Adobe XD
									</p>
									<ButtonProt extension="/unilink-ux" buttonText="View Project" />
								</div>
								<div className="w-[50%] h-[16em] rounded-sm overflow-hidden border border-black">
									<img src={unilink_image} alt="UniLink" className="w-full h-full object-cover object-center" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
