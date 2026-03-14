import { memo, useEffect, type JSX } from "react";
import NavigationBar from "../../components/Active/NavigationBar";

import preview477 from "../../assets/CCT477/Utm477.jpg";
import flow477 from "../../assets/CCT477/FlowModel477.png";

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

function HorizontalLabel({ children }: { children: string }): JSX.Element {
	return (
		<div className="flex flex-col gap-2 mb-3">
			<span className="text-xs tracking-widest text-muted-foreground uppercase">{children}</span>
			<div className="h-px bg-foreground w-full" />
		</div>
	);
}

function ContentBlock({ heading, children }: { heading?: string; children: React.ReactNode }): JSX.Element {
	return (
		<div className="flex flex-col gap-3">
			{heading && <h3 className="text-sm font-semibold text-foreground">{heading}</h3>}
			{children}
		</div>
	);
}

function HML() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - Hazel McCallion Library UX Research";
	});

	return (
		<div>
			<div className="w-full flex justify-center items-center">
				<main className="flex flex-col justify-center items-center w-full lg:w-[60em]">
					<NavigationBar className="mb-8" />

					{/* ── Header ── */}
					<div className="flex flex-col gap-6 w-full px-4 lg:px-0 lg:w-[57em] mb-8">
						<h1 className="text-4xl lg:text-5xl font-light text-foreground">Improving Transparency in the Mississauga Library Makerspace</h1>
						<p className="text-sm text-muted-foreground leading-relaxed max-w-prose">
							This project investigates the user experience of 3D printing services at the Hazel McCallion Central Library's makerspace, focusing on how transparency, staff dependency, and unclear
							wait times shape user frustration. Using Contextual Inquiry and Participatory Design, the research revealed key breakdowns in the workflow — including conflicting information, limited
							user control, and invisible print queues — and explored how increased transparency and user-centered planning could improve access to public makerspaces.
						</p>
						<a
							href="https://www.linkedin.com/feed/update/urn:li:activity:7402815181472354304/"
							target="_blank"
							rel="noreferrer"
							className="flex justify-center items-center bg-foreground text-background w-38 h-10 text-sm hover:opacity-80 transition-opacity cursor-pointer"
						>
							<span className="text-md">View LinkedIn Post ↗</span>
						</a>
					</div>

					{/* ── Meta + Contents ── */}
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full px-4 lg:px-0 lg:w-[57em] mb-12">
						<div className="flex flex-col w-full lg:w-1/2">
							<HorizontalLabel>Project Info</HorizontalLabel>
							<ul className="flex flex-col w-full">
								{[
									{ label: "Role", value: "UX Researcher" },
									{ label: "Timeframe", value: "8 Weeks" },
									{ label: "Team", value: "Team UX Research Project" },
									{ label: "Tools", value: "Miro, Canva" },
								].map(({ label, value }) => (
									<li key={label} className="flex flex-row justify-between border-b border-foreground py-3">
										<span className="text-sm text-muted-foreground uppercase tracking-widest">{label}</span>
										<span className="text-sm font-medium text-foreground">{value}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col w-full lg:w-1/2">
							<HorizontalLabel>Contents</HorizontalLabel>
							<ul className="flex flex-col w-full">
								{["Preview", "Contextual Inquiry", "Participatory Design Study", "Findings and Reflections", "Conclusion"].map((item, i) => (
									<li key={item} className="flex flex-row justify-between border-b border-foreground/20 py-3">
										<span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
										<span className="text-sm text-foreground">{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* ── Preview ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Preview</HorizontalLabel>
						<img src={preview477} alt="Hazel McCallion Library makerspace preview" className="w-full object-cover object-center border border-foreground" />
						<ContentBlock heading="Summary">
							<p className="text-sm text-muted-foreground leading-relaxed">
								A UX research report exploring the 3D printing experience at the Hazel McCallion Library makerspace. The project combines Contextual Inquiry and Participatory Design to surface pain
								points and define design opportunities around transparency, user control, and workflow accessibility.
							</p>
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Preview</RotatedLabel>
						<div className="flex flex-col gap-6 w-full py-2">
							<img src={preview477} alt="Hazel McCallion Library makerspace preview" className="w-full object-cover object-center border border-foreground" />
							<ContentBlock heading="Summary">
								<p className="text-sm text-muted-foreground leading-relaxed">
									A UX research report exploring the 3D printing experience at the Hazel McCallion Library makerspace. The project combines Contextual Inquiry and Participatory Design to surface pain
									points and define design opportunities around transparency, user control, and workflow accessibility.
								</p>
							</ContentBlock>
						</div>
					</div>

					{/* ── Contextual Inquiry ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Contextual Inquiry</HorizontalLabel>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Student clubs play a major role in establishing the balance between social and academic life in university. We chose TTRPG players who are executive members of the UTM Against Dragons
							campus club as our user group, naturally connecting them to the makerspace's 3D printing capabilities.
						</p>
						<ContentBlock heading="Target Group and Makerspace">
							<p className="text-sm text-muted-foreground leading-relaxed">
								During the preplanning phase, the selection of the makerspace and target user group evolved together. Both users are interested in tabletop role-playing games and serve as executives
								of the UTM Against Dragons D&D Club. The critical inquiries focused on how they 3D print models for their game sessions and create pin buttons for the club.
							</p>
						</ContentBlock>
						<ContentBlock heading="Context">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Both contextual inquiries took place at the Hazel McCallion Library on October 21, 2025. The observation was conducted by visiting the site with users, taking notes on their actions
								and insights, and asking clarifying questions. Users were asked to think aloud while performing tasks.
							</p>
						</ContentBlock>
						<ContentBlock heading="Partnership">
							<p className="text-sm text-muted-foreground leading-relaxed">
								To build rapport, we first sought out people we knew who used makerspaces. We explained the purpose of the study, how we would observe them, and made clear they could withdraw at any
								time. During the inquiry, we followed the "Master/Apprentice" model, allowing participants to lead their workflow while we asked questions.
							</p>
						</ContentBlock>
						<ContentBlock heading="Interpretation">
							<p className="text-sm text-muted-foreground leading-relaxed">
								The first user was easygoing and provided valuable insights through offhand comments. With the second user, we took more initiative asking questions to better understand their
								emotions. Most interpretations were based on offhand remarks, with occasional "Withdrawal and Return" interactions.
							</p>
						</ContentBlock>
						<ContentBlock heading="Focus: Key Findings">
							<p className="text-sm text-muted-foreground leading-relaxed">The library's systems for 3D printing and button making are often unsupportive and overly complicated. Key pain points:</p>
							<ul className="flex flex-col gap-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
								<li>Inconsistent information between tutorial videos and the library website.</li>
								<li>Limited access and long print queues (at least one week wait).</li>
								<li>Button-making equipment of inconsistent quality, with safety concerns.</li>
								<li>Users burdened with finding prices, tutorials, and waivers independently.</li>
								<li>Time constraints and automatic data deletion at session end.</li>
							</ul>
						</ContentBlock>
						<ContentBlock heading="Sequence Model">
							<p className="text-sm text-muted-foreground leading-relaxed">
								We used a Sequence Model to capture step-by-step how the work is carried out — from arriving at the library and locating the makerspace, to navigating contradictory instructions,
								creating and submitting a 3D model, and finally exiting after the library's closing announcement. Red steps mark key breakdowns in the process.
							</p>
						</ContentBlock>
						<ContentBlock heading="Flow Model">
							<img src={flow477} alt="Flow model diagram" className="w-full object-cover object-center border border-foreground" />
							<p className="text-sm text-muted-foreground leading-relaxed">These models are applied to one user. To see the application on the second user, consult the full research document:</p>
							<a
								href="https://drive.google.com/file/d/13P-FCVxZcYx8O9kWPRN3CIFGq8XhfoG1/view?usp=sharing"
								target="_blank"
								rel="noreferrer"
								className="text-xs text-muted-foreground underline underline-offset-2 hover:opacity-70 transition-opacity break-all"
							>
								https://drive.google.com/file/d/13P-FCVxZcYx8O9kWPRN3CIFGq8XhfoG1/view?usp=sharing
							</a>
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Inquiry</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Contextual Inquiry</h2>
							<p className="text-sm text-muted-foreground leading-relaxed">
								We chose TTRPG players who are executive members of the UTM Against Dragons campus club as our user group, naturally connecting them to the makerspace's 3D printing capabilities.
							</p>
							<ContentBlock heading="Target Group and Makerspace">
								<p className="text-sm text-muted-foreground leading-relaxed">
									During the preplanning phase, the selection of the makerspace and target user group evolved together. Both users are interested in tabletop role-playing games and serve as executives
									of the UTM Against Dragons D&D Club. The critical inquiries focused on how they 3D print models for their game sessions and create pin buttons for the club.
								</p>
							</ContentBlock>
							<ContentBlock heading="Context">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Both contextual inquiries took place at the Hazel McCallion Library on October 21, 2025. The observation was conducted by visiting the site with users, taking notes on their actions
									and insights, and asking clarifying questions. Users were asked to think aloud while performing tasks.
								</p>
							</ContentBlock>
							<ContentBlock heading="Partnership">
								<p className="text-sm text-muted-foreground leading-relaxed">
									To build rapport, we first sought out people we knew who used makerspaces. We explained the purpose of the study, how we would observe them, and made clear they could withdraw at any
									time. During the inquiry, we followed the "Master/Apprentice" model, allowing participants to lead their workflow while we asked questions.
								</p>
							</ContentBlock>
							<ContentBlock heading="Interpretation">
								<p className="text-sm text-muted-foreground leading-relaxed">
									The first user was easygoing and provided valuable insights through offhand comments. With the second user, we took more initiative asking questions to understand their emotions —
									for example, asking how they felt about the library's 3D printing tutorial (described as "slow," watched at double speed). Most interpretations came from offhand remarks.
								</p>
							</ContentBlock>
							<ContentBlock heading="Focus: Key Findings">
								<p className="text-sm text-muted-foreground leading-relaxed">The library's systems for 3D printing and button making are often unsupportive and overly complicated. Key pain points:</p>
								<ul className="flex flex-col gap-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
									<li>Inconsistent information between the tutorial video and the library website.</li>
									<li>Limited access and long print queues (at least one week wait); staff, not users, operate the printers.</li>
									<li>Button-making equipment of inconsistent quality, with an unsafe paper cutter lacking a protective handle.</li>
									<li>Users burdened with locating prices, tutorials, and waivers independently.</li>
									<li>Time constraints and automatic data deletion at session end, forcing users to save to personal USB drives.</li>
								</ul>
							</ContentBlock>
							<ContentBlock heading="Sequence Model">
								<p className="text-sm text-muted-foreground leading-relaxed">
									The Sequence Model captures step-by-step how work is carried out — the user's intent, the triggers, and the breakdowns at each stage. Key steps include arriving at the library,
									locating the makerspace, navigating contradictory instructions, creating and submitting a 3D model, and exiting before closing. Breakdown steps are highlighted in red in the full
									document.
								</p>
							</ContentBlock>
							<ContentBlock heading="Flow Model">
								<img src={flow477} alt="Flow model diagram" className="w-full object-cover object-center border border-foreground" />
								<p className="text-sm text-muted-foreground leading-relaxed">These models are applied to one user. To see the application on the second user, consult the full research document:</p>
								<a
									href="https://drive.google.com/file/d/13P-FCVxZcYx8O9kWPRN3CIFGq8XhfoG1/view?usp=sharing"
									target="_blank"
									rel="noreferrer"
									className="text-xs text-muted-foreground underline underline-offset-2 hover:opacity-70 transition-opacity break-all"
								>
									https://drive.google.com/file/d/13P-FCVxZcYx8O9kWPRN3CIFGq8XhfoG1/view?usp=sharing
								</a>
							</ContentBlock>
						</div>
					</div>

					{/* ── Participatory Design Study ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Participatory Design Study</HorizontalLabel>
						<p className="text-sm text-muted-foreground leading-relaxed">
							After analyzing the findings from the Contextual Inquiry, we conducted a Participatory Design session with the same users, now engaged as stakeholders. Stakeholders highlighted that
							user-friendliness and ease of use should be the most important design priorities.
						</p>
						<ContentBlock heading="Design Focus">
							<p className="text-sm text-muted-foreground leading-relaxed">
								We focused on stressors related to 3D printing. Considering inconsistent information, long wait times, limited library support, and strict time restrictions, we moved toward a design
								challenge aimed at modernizing the 3D printing process — making it more accessible and increasing user control.
							</p>
						</ContentBlock>
						<ContentBlock heading="Probes and Participatory Activities">
							<p className="text-sm text-muted-foreground leading-relaxed">
								We centered our design solution around an app concept to give stakeholders a meaningful frame for participation. Inspired by the Uber Participatory Design Study, the activity engaged
								users in designing low-fidelity interfaces — focused on features, not aesthetics — alongside a card-sorting exercise.
							</p>
						</ContentBlock>
						<ContentBlock heading="Activity">
							<p className="text-sm text-muted-foreground leading-relaxed">
								The session was conducted digitally via Miro, where we provided templates for card sorting and low-fidelity interface design. We first presented our contextual inquiry findings, then
								ran a card-sorting exercise (must-haves, nice-to-haves, dream-to-haves), a journey-mapping session, concept development with low-fi UI templates, and a final feedback and reflection
								session.
							</p>
						</ContentBlock>
						<ContentBlock heading="Study Setting and Participants">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Sessions were conducted at the Maanjiwe Nendamowinan Building at UTM. Participant 1 is an executive of UTM Against Dragons, experienced in 3D modelling and a Computer Science
								Specialist. Participant 2 is also an executive of UTM Against Dragons, experienced in 3D printing, and studying Drama and Cinema Studies.
							</p>
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Design</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Participatory Design Study</h2>
							<p className="text-sm text-muted-foreground leading-relaxed">
								After analyzing the findings from the Contextual Inquiry, we conducted a Participatory Design session with the same users, now engaged as stakeholders. Rather than emphasizing purely
								technical solutions, stakeholders highlighted that user-friendliness and ease of use should be the most important design priorities.
							</p>
							<ContentBlock heading="Design Focus">
								<p className="text-sm text-muted-foreground leading-relaxed">
									We focused on stressors related to 3D printing, since the common goal among users without any influence from us was 3D printing figures for TTRPG sessions. Considering inconsistent
									information, long wait times, limited library support, and strict time restrictions, we moved toward a design challenge aimed at modernizing the 3D printing process.
								</p>
							</ContentBlock>
							<ContentBlock heading="Probes and Participatory Activities">
								<p className="text-sm text-muted-foreground leading-relaxed">
									We centered our design solution around an app concept to give stakeholders a meaningful frame. Inspired by the Uber Participatory Design Study, the activity engaged users in
									designing low-fidelity interfaces — focused on features, not aesthetics — alongside a card-sorting exercise to allow participants to articulate features and relationships relevant to
									3D printer usage in the makerspace.
								</p>
							</ContentBlock>
							<ContentBlock heading="Activity">
								<p className="text-sm text-muted-foreground leading-relaxed">
									The session was conducted digitally via Miro. We first presented a clear summary of contextual inquiry findings, then facilitated a card-sorting exercise (must-haves, nice-to-haves,
									dream-to-haves), a journey-mapping session to visualize stakeholder expectations, concept development with low-fi UI templates, and a final feedback and reflection session. We chose
									these low-fidelity methods to collect data on what stakeholders wanted the app to do rather than how it should look.
								</p>
							</ContentBlock>
							<ContentBlock heading="Study Setting and Participants">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Sessions were held at the Maanjiwe Nendamowinan Building at UTM. Participant 1 is an executive of UTM Against Dragons, experienced in 3D modelling and printing, and a Computer
									Science Specialist with prior UI and web design experience. Participant 2 is also an executive of the club, experienced in 3D printing, studying Drama and Cinema Studies, and has
									been hired to design a website.
								</p>
							</ContentBlock>
						</div>
					</div>

					{/* ── Findings and Reflections ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Findings and Reflections</HorizontalLabel>
						<ContentBlock heading="Key Design Insights">
							<ul className="flex flex-col gap-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
								<li>The app should be web-based, eliminating the need to install additional software.</li>
								<li>Payments should be centralized within the app and completed before pickup.</li>
								<li>Built-in tutorials that are easy to find yet unobtrusive to experienced users.</li>
								<li>Detailed 3D printer specifications should be available for users to input into their own slicers.</li>
								<li>Users should be able to upload 3D models directly to the system.</li>
								<li>A 3D-printed rubber duck mascot was suggested to provide tips and a friendly experience.</li>
								<li>Image-based tutorials to overcome language barriers.</li>
								<li>In-app print submissions, account features, and a print status screen.</li>
								<li>Notifications for when and where projects will be printed.</li>
								<li>Onboarding guidance for first-time users.</li>
							</ul>
						</ContentBlock>
						<ContentBlock heading="Reflections">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Participants focused on aspects I hadn't prioritized — particularly accessibility and tutorials. The rubber duck mascot suggestion was unexpected but valuable. One stakeholder
								expressed discomfort using Miro for interface design, which highlighted that future sessions might benefit from pen-and-paper interface activities alongside digital card sorting.
							</p>
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Findings</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Findings and Reflections</h2>
							<ContentBlock heading="Key Design Insights">
								<ul className="flex flex-col gap-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
									<li>The app should be web-based, eliminating the need to install additional software.</li>
									<li>Payments should be centralized within the app and completed before pickup to prevent unclaimed print costs.</li>
									<li>Built-in tutorials that are easy to find yet unobtrusive to experienced users.</li>
									<li>Detailed 3D printer specifications available for users to input into their own slicers.</li>
									<li>Users should be able to upload 3D models directly to the system for printing.</li>
									<li>A 3D-printed rubber duck mascot was suggested to provide tips and a friendly experience.</li>
									<li>Image-based tutorials recommended to help overcome language barriers.</li>
									<li>In-app print submissions, account features (login, logout), and a print status screen.</li>
									<li>Notifications for when and where projects will be printed.</li>
									<li>Onboarding guidance and basic tutorials for first-time users.</li>
								</ul>
							</ContentBlock>
							<ContentBlock heading="Reflections">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Participants focused on aspects I hadn't prioritized — particularly accessibility. The rubber duck mascot suggestion was unexpected, as was the emphasis on tutorials; participants
									were thinking about how smooth the solution should feel rather than just solving the problem. One stakeholder was uncomfortable with Miro's interface design activities, suggesting
									future sessions might move interface exercises to pen and paper while keeping card sorting digital.
								</p>
							</ContentBlock>
						</div>
					</div>

					{/* ── Conclusion ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-16 lg:hidden">
						<HorizontalLabel>Conclusion</HorizontalLabel>
						<ContentBlock heading="Main Takeaway">
							<p className="text-sm text-muted-foreground leading-relaxed">
								I need to focus on making the design user-friendly and accessible, while incorporating the functionality stakeholders suggested. Not all participants are comfortable with digital UI
								tools, so future activities should be simpler or checked for platform familiarity beforehand. Engaging stakeholders early revealed insights I hadn't anticipated — the importance of
								tutorials, mascots, and smooth workflows.
							</p>
						</ContentBlock>
						<ContentBlock heading="Design Direction">
							<p className="text-sm text-muted-foreground leading-relaxed">
								We are now considering developing a web app rather than a downloadable app, prioritizing accessibility. There is a strong possibility of integrating a mascot to provide tips and
								guidance, enhancing the overall user experience. Overall, this process showed how critical iterative, participatory design is for creating solutions that truly meet users' needs.
							</p>
						</ContentBlock>
						<div className="flex flex-col gap-3">
							<HorizontalLabel>Project Report</HorizontalLabel>
							<div className="flex flex-col gap-2">
								<a
									href="https://www.linkedin.com/feed/update/urn:li:activity:7402815181472354304/"
									target="_blank"
									rel="noreferrer"
									className="text-xs text-muted-foreground underline underline-offset-2 hover:opacity-70 transition-opacity break-all"
								>
									https://www.linkedin.com/feed/update/urn:li:activity:7402815181472354304/
								</a>
							</div>
						</div>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-16">
						<RotatedLabel>Conclusion</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Conclusion</h2>
							<ContentBlock heading="Main Takeaway">
								<p className="text-sm text-muted-foreground leading-relaxed">
									I need to focus on making the design user-friendly and accessible, while incorporating the functionality stakeholders suggested. Not all participants are comfortable with digital UI
									tools, so future activities should be simpler or checked for platform familiarity beforehand. Engaging stakeholders early revealed insights I hadn't anticipated — the importance of
									tutorials, mascots, and smooth workflows.
								</p>
							</ContentBlock>
							<ContentBlock heading="Design Direction">
								<p className="text-sm text-muted-foreground leading-relaxed">
									We are now considering developing a web app rather than a downloadable app, prioritizing accessibility. There is a strong possibility of integrating a mascot to provide tips and
									guidance. Overall, this process showed how critical iterative, participatory design is for creating solutions that truly meet users' needs.
								</p>
							</ContentBlock>
							<div className="flex flex-col gap-3">
								<HorizontalLabel>Project Report</HorizontalLabel>
								<div className="flex flex-col gap-2">
									<a
										href="https://www.linkedin.com/feed/update/urn:li:activity:7402815181472354304/"
										target="_blank"
										rel="noreferrer"
										className="text-xs text-muted-foreground underline underline-offset-2 hover:opacity-70 transition-opacity break-all"
									>
										https://www.linkedin.com/feed/update/urn:li:activity:7402815181472354304/
									</a>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default memo(HML);
