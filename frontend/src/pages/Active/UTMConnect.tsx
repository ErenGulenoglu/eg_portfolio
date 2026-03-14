import { memo, useEffect, type JSX } from "react";
import { Link } from "react-router";
import NavigationBar from "../../components/Active/NavigationBar";

import preview305 from "../../assets/CCT305/preview_305.png";
import lowfid305 from "../../assets/CCT305/305_low-fidelity.jpg";
import lowmidfid305 from "../../assets/CCT305/305midfidelity.png";
import highfid305 from "../../assets/CCT305/305high-fid.png";
import persona305 from "../../assets/CCT305/305Persona.jpg";
import prioritizationgrid305 from "../../assets/CCT305/305Prioritization.jpg";

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

function UTMConnect() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - UTM Connect";
	});

	return (
		<div>
			<div className="w-full flex justify-center items-center">
				<main className="flex flex-col justify-center items-center w-full lg:w-[60em]">
					<NavigationBar className="mb-8" />

					{/* ── Header ── */}
					<div className="flex flex-col gap-6 w-full px-4 lg:px-0 lg:w-[57em] mb-8">
						<h1 className="text-4xl lg:text-5xl font-light text-foreground">UTM Connect</h1>
						<p className="text-sm text-muted-foreground leading-relaxed max-w-prose">
							UTM Connect is a mobile app concept designed to help UTM students discover student clubs, stay informed about events, and connect with campus communities. Built through user research and
							iterative prototyping, the project addresses common challenges such as scattered club information, low engagement, and difficulty balancing academic and social life. The final design
							emphasises clarity, accessibility, and familiar social interactions to support meaningful participation in campus life.
						</p>
						<Link
							to="https://www.figma.com/proto/teMuFPCoGhJtvikefERyNA/High-Fidelity-CCT305-Prototype---A4--Group-4?node-id=21-9217&starting-point-node-id=21%3A9217&t=LtSvDYEubpt7M2uI-1"
							target="_blank"
							className="flex justify-center items-center bg-foreground text-background w-30 h-10 text-sm hover:opacity-80 transition-opacity cursor-pointer"
						>
							<span className="text-md">View Prototype ↗</span>
						</Link>
					</div>

					{/* ── Meta + Contents ── */}
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full px-4 lg:px-0 lg:w-[57em] mb-12">
						<div className="flex flex-col w-full lg:w-1/2">
							<HorizontalLabel>Project Info</HorizontalLabel>
							<ul className="flex flex-col w-full">
								{[
									{ label: "Role", value: "UI/UX Designer" },
									{ label: "Timeframe", value: "8 Weeks" },
									{ label: "Team", value: "Team UX/UI Project" },
									{ label: "Tools", value: "Figma, Miro" },
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
								{["Preview", "Context", "Research Methods", "Design Decisions", "Final Design", "Takeaways"].map((item, i) => (
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
						<img src={preview305} alt="UTM Connect preview" className="w-full object-cover object-center border border-foreground" />
						<ContentBlock heading="Summary">
							<p className="text-sm text-muted-foreground leading-relaxed">
								A campus app that helps students experience social life on campus by connecting with students, clubs, and enrolling in events in a university where balancing social and academic life
								is a challenge. The UI focuses on clarity with distinguishable elements to enhance design familiarity and platform navigability for our users.
							</p>
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Preview</RotatedLabel>
						<div className="flex flex-col gap-6 w-full py-2">
							<img src={preview305} alt="UTM Connect preview" className="w-full object-cover object-center border border-foreground" />
							<ContentBlock heading="Summary">
								<p className="text-sm text-muted-foreground leading-relaxed">
									A campus app that helps students experience social life on campus by connecting with students, clubs, and enrolling in events in a university where balancing social and academic life
									is a challenge. The UI focuses on clarity with distinguishable elements to enhance design familiarity and platform navigability for our users.
								</p>
							</ContentBlock>
						</div>
					</div>

					{/* ── Context ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Context</HorizontalLabel>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Student clubs play a major role in establishing the balance between social and academic life in university. This is why UTM, like many other schools, has a vast array of student clubs
							available. However, with such a large number, they can be hard to keep track of.
						</p>
						<ContentBlock heading="The Problem">
							<p className="text-sm text-muted-foreground leading-relaxed">
								As UTM is a commuter campus with a large student body, many students find it difficult to discover clubs that interest them and to stay informed about events. This often leads to low
								engagement and a lack of connection with the campus community.
							</p>
						</ContentBlock>
						<ContentBlock heading="The Challenge">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Design an app that helps students and campus organizations connect, while creating an environment that feels safe, welcoming, and inclusive for all users.
							</p>
						</ContentBlock>
						<ContentBlock heading="The Solution">
							<p className="text-sm text-muted-foreground leading-relaxed">
								A mobile app for UTM students to see upcoming campus events, see suggested clubs, RSVP events they want to join, and connect with other students through chat features.
							</p>
							<img src={lowfid305} alt="Low fidelity prototype" className="w-full object-cover object-center border border-foreground" />
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Context</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Context</h2>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Student clubs play a major role in establishing the balance between social and academic life in university. This is why UTM, like many other schools, has a vast array of student clubs
								available. However, with such a large number, they can be hard to keep track of.
							</p>
							<ContentBlock heading="The Problem">
								<p className="text-sm text-muted-foreground leading-relaxed">
									As UTM is a commuter campus with a large student body, many students find it difficult to discover clubs that interest them and to stay informed about events. This often leads to low
									engagement and a lack of connection with the campus community.
								</p>
							</ContentBlock>
							<ContentBlock heading="The Challenge">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Design an app that helps students and campus organizations connect, while creating an environment that feels safe, welcoming, and inclusive for all users.
								</p>
							</ContentBlock>
							<ContentBlock heading="The Solution">
								<p className="text-sm text-muted-foreground leading-relaxed">
									A mobile app for UTM students to see upcoming campus events, see suggested clubs, RSVP events they want to join, and connect with other students through chat features.
								</p>
								<img src={lowfid305} alt="Low fidelity prototype" className="w-full object-cover object-center border border-foreground" />
							</ContentBlock>
						</div>
					</div>

					{/* ── Research Methods ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Research</HorizontalLabel>
						<ContentBlock heading="Problem Statement">
							<p className="text-sm text-muted-foreground leading-relaxed">
								UTM students need a safe and accessible way to discover campus clubs, events, and peers. As a primarily commuter campus, many students have limited in-person interaction and are
								unlikely to seek out campus events through personal social media.
							</p>
						</ContentBlock>
						<ContentBlock heading="Primary Research">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Interview questions were designed to identify pain points among the target audience, tailored for both students who are involved in campus clubs and those who are not. Interviews were
								conducted with five participants.
							</p>
						</ContentBlock>
						<ContentBlock heading="Findings">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Updates from club Instagram accounts often get lost in students' feeds. Meaningful socialisation usually only happens at in-person events. Many commuter students come to campus only
								for classes, contributing to a weak sense of community.
							</p>
						</ContentBlock>
						<ContentBlock heading="User Personas">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Sandy Student — a 21 year old female UTM undergraduate in the CCIT program. She wants to build her social network while balancing her class load by joining clubs.
							</p>
							<img src={persona305} alt="User persona" className="w-full object-cover object-center border border-foreground" />
						</ContentBlock>
						<ContentBlock heading="Prioritization Grid">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Based on group voting results, we identified the core functionality of our application. The initial prototype assumes the user is already signed in and browsing campus groups.
							</p>
							<img src={prioritizationgrid305} alt="Prioritization grid" className="w-full object-cover object-center border border-foreground" />
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Research</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Research Methods</h2>
							<ContentBlock heading="Problem Statement">
								<p className="text-sm text-muted-foreground leading-relaxed">
									UTM students need a safe and accessible way to discover campus clubs, events, and peers. As a primarily commuter campus, many students have limited in-person interaction and are
									unlikely to seek out campus events through personal social media.
								</p>
							</ContentBlock>
							<ContentBlock heading="Primary Research">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Interview questions were designed to identify pain points among the target audience, tailored for both students who are involved in campus clubs and those who are not. Interviews
									were conducted with five participants.
								</p>
							</ContentBlock>
							<ContentBlock heading="Findings">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Updates from club Instagram accounts often get lost in students' feeds. Meaningful socialisation usually only happens at in-person events. Many commuter students come to campus only
									for classes, contributing to a weak sense of community.
								</p>
							</ContentBlock>
							<ContentBlock heading="User Personas">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Sandy Student — a 21 year old female UTM undergraduate in the CCIT program. She wants to build her social network while balancing her class load by joining clubs.
								</p>
								<img src={persona305} alt="User persona" className="w-full object-cover object-center border border-foreground" />
							</ContentBlock>
							<ContentBlock heading="Prioritization Grid">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Based on group voting results, we identified the core functionality of our application. The initial prototype assumes the user is already signed in and browsing campus groups.
								</p>
								<img src={prioritizationgrid305} alt="Prioritization grid" className="w-full object-cover object-center border border-foreground" />
							</ContentBlock>
						</div>
					</div>

					{/* ── Design Decisions ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Design</HorizontalLabel>
						<p className="text-sm text-muted-foreground leading-relaxed">Before usability testing we created a low-mid fidelity prototype to visualize the app's structure and user flow.</p>
						<img src={lowmidfid305} alt="Low-mid fidelity prototype" className="w-full object-cover object-center border border-foreground" />
						<ContentBlock heading="Usability Testing">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Conducted think-aloud usability testing with five participants using the task "Enroll in a scheduled event, then leave it." Feedback revealed confusion around "RSVP" and issues with
								unclear typography and indistinct visual grouping.
							</p>
						</ContentBlock>
						<ContentBlock heading="UI Design">
							<p className="text-sm text-muted-foreground leading-relaxed">
								In the high-fidelity prototype we retained the layout from the low-fidelity design while adding meaningful context and visual assets to eliminate ambiguities.
							</p>
						</ContentBlock>
						<ContentBlock heading="Page Distinction">
							<p className="text-sm text-muted-foreground leading-relaxed">
								The group page was too similar to the event page. We redesigned it and renamed it "club page" — a term university students are more familiar with.
							</p>
						</ContentBlock>
						<ContentBlock heading="Improving User Flow">
							<p className="text-sm text-muted-foreground leading-relaxed">
								The register/withdraw button was turned into a single component with multiple variants, allowing states to persist across navigation.
							</p>
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Design</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Design Decisions</h2>
							<p className="text-sm text-muted-foreground leading-relaxed">Before usability testing we created a low-mid fidelity prototype to visualize the app's structure and user flow.</p>
							<img src={lowmidfid305} alt="Low-mid fidelity prototype" className="w-full object-cover object-center border border-foreground" />
							<ContentBlock heading="Usability Testing">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Conducted think-aloud usability testing with five participants using the task "Enroll in a scheduled event, then leave it." Feedback revealed confusion around "RSVP" and issues with
									unclear typography and indistinct visual grouping.
								</p>
							</ContentBlock>
							<ContentBlock heading="UI Design">
								<p className="text-sm text-muted-foreground leading-relaxed">
									In the high-fidelity prototype we retained the layout from the low-fidelity design while adding meaningful context and visual assets to eliminate ambiguities.
								</p>
							</ContentBlock>
							<ContentBlock heading="Page Distinction">
								<p className="text-sm text-muted-foreground leading-relaxed">
									The group page was too similar to the event page. We redesigned it and renamed it "club page" — a term university students are more familiar with.
								</p>
							</ContentBlock>
							<ContentBlock heading="Improving User Flow">
								<p className="text-sm text-muted-foreground leading-relaxed">
									The register/withdraw button was turned into a single component with multiple variants, allowing states to persist across navigation.
								</p>
							</ContentBlock>
						</div>
					</div>

					{/* ── Final Design ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Final Design</HorizontalLabel>
						<img src={highfid305} alt="High fidelity final design" className="w-full object-cover object-center border border-foreground" />
						<p className="text-sm text-muted-foreground leading-relaxed">Final prototype after refining features and UI based on user feedback.</p>
						<ContentBlock heading="Discover">
							<p className="text-sm text-muted-foreground leading-relaxed">Suggested clubs are promoted to students based on their interests.</p>
						</ContentBlock>
						<ContentBlock heading="Events">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Events are displayed on the homepage with a clear UI, allowing users to easily register and withdraw using popup components with variants.
							</p>
						</ContentBlock>
						<ContentBlock heading="Profiles & Chatting">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Both students and clubs have their own profiles, along with chat features that allow users to connect with each other safely.
							</p>
						</ContentBlock>
						<ContentBlock heading="Posts">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Students can share posts with connected students and clubs to express their thoughts and promote their own on-campus events.
							</p>
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Final</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Final Design</h2>
							<img src={highfid305} alt="High fidelity final design" className="w-full object-cover object-center border border-foreground" />
							<p className="text-sm text-muted-foreground leading-relaxed">Final prototype after refining features and UI based on user feedback.</p>
							<ContentBlock heading="Discover">
								<p className="text-sm text-muted-foreground leading-relaxed">Suggested clubs are promoted to students based on their interests.</p>
							</ContentBlock>
							<ContentBlock heading="Events">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Events are displayed on the homepage with a clear UI, allowing users to easily register and withdraw using popup components with variants.
								</p>
							</ContentBlock>
							<ContentBlock heading="Profiles & Chatting">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Both students and clubs have their own profiles, along with chat features that allow users to connect with each other safely.
								</p>
							</ContentBlock>
							<ContentBlock heading="Posts">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Students can share posts with connected students and clubs to express their thoughts and promote their own on-campus events.
								</p>
							</ContentBlock>
						</div>
					</div>

					{/* ── Takeaways ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-16 lg:hidden">
						<HorizontalLabel>Takeaways</HorizontalLabel>
						<ContentBlock heading="Usability Testing">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Observing usability testing firsthand — assessing users' reactions, struggles, and positive experiences — taught me a new way to evaluate the success of a design project I am involved
								in.
							</p>
						</ContentBlock>
						<ContentBlock heading="Developing A Design Concept">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Design should not start with a concept and then search for users, but rather begin with a user base to develop the concept accordingly.
							</p>
						</ContentBlock>
						<ContentBlock heading="Component Approach in UI">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Instead of creating multiple pages to handle registration logic, using components with variants simplifies the design process and makes the app easier for users to test and understand.
							</p>
						</ContentBlock>
						<div className="flex flex-col gap-3">
							<HorizontalLabel>Project Reports</HorizontalLabel>
							<div className="flex flex-col gap-2">
								{[
									"https://drive.google.com/file/d/1xden8ZXNIk3xrNCfQmPKFG7v_KbJXeLg/view?usp=sharing",
									"https://drive.google.com/file/d/1rCpbNGodfEz_1iGhx_lXwnqfcwzYbjyj/view?usp=sharing",
									"https://drive.google.com/file/d/1hr4G1ixyn6JtlQdtiv-HCMLapTN8rsYF/view?usp=sharing",
								].map((href, i) => (
									<a key={i} href={href} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground underline underline-offset-2 hover:opacity-70 transition-opacity break-all">
										{href}
									</a>
								))}
							</div>
						</div>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-16">
						<RotatedLabel>Takeaways</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Takeaways</h2>
							<ContentBlock heading="Usability Testing">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Observing usability testing firsthand — assessing users' reactions, struggles, and positive experiences — taught me a new way to evaluate the success of a design project I am
									involved in.
								</p>
							</ContentBlock>
							<ContentBlock heading="Developing A Design Concept">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Design should not start with a concept and then search for users, but rather begin with a user base to develop the concept accordingly.
								</p>
							</ContentBlock>
							<ContentBlock heading="Component Approach in UI">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Instead of creating multiple pages to handle registration logic, using components with variants simplifies the design process and makes the app easier for users to test and
									understand.
								</p>
							</ContentBlock>
							<div className="flex flex-col gap-3">
								<HorizontalLabel>Project Reports</HorizontalLabel>
								<div className="flex flex-col gap-2">
									{[
										"https://drive.google.com/file/d/1xden8ZXNIk3xrNCfQmPKFG7v_KbJXeLg/view?usp=sharing",
										"https://drive.google.com/file/d/1rCpbNGodfEz_1iGhx_lXwnqfcwzYbjyj/view?usp=sharing",
										"https://drive.google.com/file/d/1hr4G1ixyn6JtlQdtiv-HCMLapTN8rsYF/view?usp=sharing",
									].map((href, i) => (
										<a key={i} href={href} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground underline underline-offset-2 hover:opacity-70 transition-opacity break-all">
											{href}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default memo(UTMConnect);
