import { memo, useEffect, type JSX } from "react";
import { Link } from "react-router";
import NavigationBar from "../../components/Active/NavigationBar";

import unilinkpreview from "../../assets/CCT434/unilinkpreview.png";
import persona1 from "../../assets/CCT434/persona1.jpeg";
import persona2 from "../../assets/CCT434/persona2.jpeg";
import userjourney from "../../assets/CCT434/user_journey.jpg";
import finaldesign from "../../assets/CCT434/finaldesign.png";

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

function UniLink() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - UniLink";
	});

	return (
		<div>
			<div className="w-full flex justify-center items-center">
				<main className="flex flex-col justify-center items-center w-full lg:w-[60em]">
					<NavigationBar className="mb-8" />

					{/* ── Header ── */}
					<div className="flex flex-col gap-6 w-full px-4 lg:px-0 lg:w-[57em] mb-8">
						<h1 className="text-4xl lg:text-5xl font-light text-foreground">UniLink</h1>
						<p className="text-sm text-muted-foreground leading-relaxed max-w-prose">
							UniLink is a mobile app that helps University of Toronto Mississauga students form meaningful friendships and romantic connections in a safe, verified environment. By using UofT
							credentials, the app ensures all users are real students while focusing on interest-based and academic matching rather than superficial swiping. Designed with an intuitive interface and
							low-pressure interactions, UniLink encourages authentic connections, in-person meetups, and cross-cultural communication.
						</p>
						<Link
							to="https://xd.adobe.com/view/39ef1ea5-a52b-49cf-8a4b-35befa622f20-6cbc/?fullscreen&hints=off"
							target="_blank"
							className="flex justify-center items-center bg-foreground text-background w-30 h-10 text-sm hover:opacity-80 transition-opacity cursor-pointer"
						>
							<span className="text-md">View Prototype</span>
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
									{ label: "Tools", value: "Adobe XD" },
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
								{["Project Brief", "Context", "Research Methods", "Design Decisions", "Prototyping / Usability Testing", "Final Design", "Takeaways"].map((item, i) => (
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
						<img src={unilinkpreview} alt="UniLink preview" className="w-full object-cover object-center border border-foreground" />
						<ContentBlock heading="Summary">
							<p className="text-sm text-muted-foreground leading-relaxed">
								A campus app that helps UTM students build meaningful friendships and romantic connections through verified student accounts. The platform prioritises interest- and academic-based
								matching to encourage authentic interactions and in-person meetups. The UI focuses on simplicity and clarity, making it easy for students to navigate and engage with potential matches.
							</p>
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Preview</RotatedLabel>
						<div className="flex flex-col gap-6 w-full py-2">
							<img src={unilinkpreview} alt="UniLink preview" className="w-full object-cover object-center border border-foreground" />
							<ContentBlock heading="Summary">
								<p className="text-sm text-muted-foreground leading-relaxed">
									A campus app that helps UTM students build meaningful friendships and romantic connections through verified student accounts. The platform prioritises interest- and academic-based
									matching to encourage authentic interactions and in-person meetups. The UI focuses on simplicity and clarity, making it easy for students to navigate and engage with potential
									matches.
								</p>
							</ContentBlock>
						</div>
					</div>

					{/* ── Project Brief ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Project Brief</HorizontalLabel>
						<ContentBlock heading="The Problem">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Students at UTM constantly look for secure methods to make friends or form intimate relationships on campus. While the university prioritises academic excellence, it largely neglects
								students' need for safe ways to build deep, meaningful relationships.
							</p>
						</ContentBlock>
						<ContentBlock heading="The High-Level User / Community Activities">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Our proposed solution aims to bring students together within the community. Several challenges discourage UTM students from socialising — the campus's disconnection from an urban
								environment unlike St. George, and its commuter nature mean many students leave campus as early as possible after class. UniLink encourages students to connect even when not physically
								on campus.
							</p>
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Brief</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Project Brief</h2>
							<ContentBlock heading="The Problem">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Students at UTM constantly look for secure methods to make friends or form intimate relationships on campus. While the university prioritises academic excellence, it largely neglects
									students' need for safe ways to build deep, meaningful relationships.
								</p>
							</ContentBlock>
							<ContentBlock heading="The High-Level User / Community Activities">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Our proposed solution aims to bring students together within the community. Several challenges discourage UTM students from socialising — the campus's disconnection from an urban
									environment unlike St. George, and its commuter nature mean many students leave campus as early as possible after class. UniLink encourages students to connect even when not
									physically on campus.
								</p>
							</ContentBlock>
						</div>
					</div>

					{/* ── Research Methods ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Research Methods</HorizontalLabel>
						<ContentBlock heading="Primary Research">
							<p className="text-sm text-muted-foreground leading-relaxed">
								To better understand the dating and social culture at UTM, we randomly selected 10 students across different majors, years of study, and cultural backgrounds for qualitative
								interviews. Questions focused on current experiences and attitudes toward dating, perception of UTM dating culture, challenges forming relationships on campus, and interest in a
								campus-exclusive app.
							</p>
						</ContentBlock>
						<ContentBlock heading="Findings: Overview">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Most interviewees are not currently in a relationship. Many described UTM's dating culture as "rare" and cited commuter culture, lack of social events, and the unapproachability of
								peers as key challenges. Despite this, many were excited about a campus-exclusive app, though some raised concerns about a small dating pool and faculty access. All participants agreed
								that UofT credentials would enhance security.
							</p>
						</ContentBlock>
						<ContentBlock heading="Findings: User Needs">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Students need more social opportunities on campus, ways to overcome commuter-related barriers, and assurance of privacy and safety. There is a demand for a structured yet natural way
								to connect without feeling pressured or institutionalised.
							</p>
						</ContentBlock>
						<ContentBlock heading="Findings: Current Practices">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Students currently expand their social circles through extracurriculars, volunteering, and group projects. Others turn to mainstream dating apps like Hinge, Bumble, and Tinder, though
								concerns about fraud and security risks are common. Many rely on mutual connections or pre-university friends instead.
							</p>
						</ContentBlock>
						<ContentBlock heading="User Personas">
							<img src={persona1} alt="User persona 1" className="w-full object-cover object-center border border-foreground" />
							<img src={persona2} alt="User persona 2" className="w-full object-cover object-center border border-foreground" />
						</ContentBlock>
						<ContentBlock heading="Low-Fidelity Prototype">
							<iframe
								src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/mtbAqls17ryDUckdq63V9r/CCT434---Week-8---Studio-Lab?node-id=5-1143&starting-point-node-id=5%3A1143"
								className="w-full h-[500px] border border-foreground"
								allowFullScreen
							/>
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Research</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Research Methods</h2>
							<ContentBlock heading="Primary Research">
								<p className="text-sm text-muted-foreground leading-relaxed">
									To better understand the dating and social culture at UTM, we randomly selected 10 students across different majors, years of study, and cultural backgrounds for qualitative
									interviews. Questions focused on current experiences and attitudes toward dating, perception of UTM's dating culture, challenges forming relationships on campus, existing use of
									dating apps, and interest in a campus-exclusive platform.
								</p>
							</ContentBlock>
							<ContentBlock heading="Findings: Overview">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Most interviewees are not currently in a relationship. Many described UTM's dating culture as "rare" and cited commuter culture, lack of social events, and the unapproachability of
									peers as recurring challenges. Despite this, many were excited about a campus-exclusive app, though some raised concerns about a small dating pool and faculty access. All
									participants agreed that UofT credentials would enhance security.
								</p>
							</ContentBlock>
							<ContentBlock heading="Findings: User Needs">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Students need more social opportunities on campus, ways to overcome commuter-related barriers, and assurance of privacy and safety. There is demand for a structured yet natural way
									to connect without feeling pressured or institutionalised.
								</p>
							</ContentBlock>
							<ContentBlock heading="Findings: Current Practices">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Students currently expand their social circles through extracurriculars, volunteering, and group projects. Others turn to mainstream dating apps like Hinge, Bumble, and Tinder,
									though concerns about fraud and security risks are common. Many rely on mutual connections or pre-university friends instead.
								</p>
							</ContentBlock>
							<ContentBlock heading="User Personas">
								<img src={persona1} alt="User persona 1" className="w-full object-cover object-center border border-foreground" />
								<img src={persona2} alt="User persona 2" className="w-full object-cover object-center border border-foreground" />
							</ContentBlock>
							<ContentBlock heading="Low-Fidelity Prototype">
								<iframe
									src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/mtbAqls17ryDUckdq63V9r/CCT434---Week-8---Studio-Lab?node-id=5-1143&starting-point-node-id=5%3A1143"
									className="w-full h-[600px] border border-foreground"
									allowFullScreen
								/>
							</ContentBlock>
						</div>
					</div>

					{/* ── Design Decisions ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Design Decisions</HorizontalLabel>
						<ContentBlock heading="Privacy and Security">
							<p className="text-sm text-muted-foreground leading-relaxed">
								The app includes a login system, profile privacy settings, and controlled access to message data. Two-factor authentication via UTORid will serve as the primary access method. Certain
								details such as enrolled courses and club memberships will be optional, with a possible anonymous user pool for students who prefer not to share identifiable information. End-to-end
								encryption may be added for text messaging, though this must be balanced with the app's reporting and banning system.
							</p>
						</ContentBlock>
						<ContentBlock heading="Algorithmic Recommendations">
							<p className="text-sm text-muted-foreground leading-relaxed">
								The matching system draws inspiration from Tinder and Bumble while incorporating university-specific attributes such as department and major. Optional criteria may include faith,
								culture, and relationship preferences. Separate matching pools for friendship versus romantic matching will be supported through a simple settings adjustment. GIFs and stickers may be
								added to chats to help students bond over shared interests.
							</p>
						</ContentBlock>
						<ContentBlock heading="Design Constraints">
							<p className="text-sm text-muted-foreground leading-relaxed">
								The design must not sell user data to third parties, limit basic functions to push premium memberships, display irrelevant private information during matchmaking, allow fake user
								accounts, or restrict access to the dating pool for users who skip optional fields.
							</p>
						</ContentBlock>
						<ContentBlock heading="User Journey">
							<img src={userjourney} alt="User journey map" className="w-full object-cover object-center border border-foreground" />
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Design</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Design Decisions</h2>
							<ContentBlock heading="Privacy and Security">
								<p className="text-sm text-muted-foreground leading-relaxed">
									The app includes a login system, profile privacy settings, and controlled access to message data. Two-factor authentication via UTORid will serve as the primary access method.
									Certain details such as enrolled courses and club memberships will be optional, with a possible anonymous user pool for students who prefer not to share identifiable information.
									End-to-end encryption may be added for text messaging, though this must be balanced against the app's reporting and banning system.
								</p>
							</ContentBlock>
							<ContentBlock heading="Algorithmic Recommendations">
								<p className="text-sm text-muted-foreground leading-relaxed">
									The matching system draws inspiration from Tinder and Bumble while incorporating university-specific attributes such as department and major. Optional criteria may include faith,
									culture, and relationship preferences. Separate matching pools for friendship versus romantic matching will be supported through a simple settings adjustment. GIFs and stickers may
									be added to chats to help students bond over shared interests.
								</p>
							</ContentBlock>
							<ContentBlock heading="Design Constraints">
								<p className="text-sm text-muted-foreground leading-relaxed">
									The design must not sell user data to third parties, limit basic functions to push premium memberships, display irrelevant private information during matchmaking, allow fake user
									accounts, or restrict access to the dating pool for users who skip optional fields.
								</p>
							</ContentBlock>
							<ContentBlock heading="User Journey">
								<img src={userjourney} alt="User journey map" className="w-full object-cover object-center border border-foreground" />
							</ContentBlock>
						</div>
					</div>

					{/* ── Prototyping / Usability Testing ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Prototyping / Usability Testing</HorizontalLabel>
						<p className="text-sm text-muted-foreground leading-relaxed">
							We converted our low-fidelity prototype into a high-fidelity prototype using Adobe XD, enabling user interactions including sign-up, login, romantic and friendship matching, and chat
							initiation. High-level test goals were to assess how well the UI communicates app functionality, evaluate prototype performance, and identify any design flaws.
						</p>
						<ContentBlock heading="Methods">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Usability testing was conducted with 10 undergraduate UofT students aged 18–24, using both in-person and Zoom sessions. Post-test questionnaires and interview questions collected
								feedback on the overall interface and design experience.
							</p>
						</ContentBlock>
						<ContentBlock heading="Testing Process">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Participants were given three tasks: signing up with UofT credentials, finding a romantic match and sending a request, and initiating a chat through the friendship matching feature.
							</p>
						</ContentBlock>
						<ContentBlock heading="Test Results">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Users praised the clear navigation and chat and match features for their resemblance to familiar social media interfaces. Flexible sign-up and the choice between romantic or friend
								matching were well-received. Areas for improvement included clarifying next steps after proposing a match, privacy concerns around date of birth data, and requests for additional chat
								features like read receipts. Button responsiveness was also flagged due to Adobe XD's hover and click interaction conflicts.
							</p>
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Testing</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Prototyping / Usability Testing</h2>
							<p className="text-sm text-muted-foreground leading-relaxed">
								We converted our low-fidelity prototype into a high-fidelity prototype using Adobe XD, enabling user interactions including sign-up, login, romantic and friendship matching, and chat
								initiation. High-level test goals were to assess how well the UI communicates app functionality, evaluate prototype performance, and identify any design flaws.
							</p>
							<ContentBlock heading="Methods">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Usability testing was conducted with 10 undergraduate UofT students aged 18–24, using both in-person and Zoom sessions. Post-test questionnaires and interview questions collected
									feedback on the overall interface and design experience.
								</p>
							</ContentBlock>
							<ContentBlock heading="Testing Process">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Participants were given three structured tasks: signing up with UofT credentials and completing onboarding questions; finding a romantic match and sending a matching request; and
									selecting a friendship match and initiating a chat through the bottom navigation.
								</p>
							</ContentBlock>
							<ContentBlock heading="Test Results">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Users praised the clear navigation and the familiarity of the chat and match features. Flexible sign-up and the dual matching modes were well-received. Areas for improvement included
									clarifying next steps after proposing a match, addressing privacy concerns around date of birth data, and requests for additional chat features such as read receipts and typing
									indicators. Button responsiveness was also flagged due to hover and click interaction conflicts in Adobe XD — a short-term fix involves removing hover effects, with a long-term plan
									to transition to Swift or a web-based framework.
								</p>
							</ContentBlock>
						</div>
					</div>

					{/* ── Final Design ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-8 lg:hidden">
						<HorizontalLabel>Final Design</HorizontalLabel>
						<img src={finaldesign} alt="UniLink final design" className="w-full object-cover object-center border border-foreground" />
						<ContentBlock heading="Final Usability Test: Participants">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Ten UTM students selected through random sampling. They varied in academic year, major, and gender — spanning Biology, Psychology, Computer Science, Physics, Professional Writing, and
								CCIT. Some were highly engaged in campus life; others found UTM's commuter nature a challenge for meeting new people.
							</p>
						</ContentBlock>
						<ContentBlock heading="Process">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Testing was conducted in person and over Zoom. Users were given access to the Adobe XD prototype and asked to complete sign-up, matching, and chat tasks. Detailed notes were taken and
								later analyzed alongside post-test questionnaire responses.
							</p>
						</ContentBlock>
						<ContentBlock heading="Results">
							<p className="text-sm text-muted-foreground leading-relaxed">
								No failed test cases. All participants successfully completed every task. Users were familiar with concepts such as the matching page, chat page, and account creation. However, they
								expressed that the prototype still has room for improvement — particularly around navigation button effectiveness and social feature functionality. Future iterations may use Swift for
								iOS development and a Django backend to implement a working version of the matching algorithm.
							</p>
						</ContentBlock>
						<a
							href="https://xd.adobe.com/view/39ef1ea5-a52b-49cf-8a4b-35befa622f20-6cbc/?fullscreen&hints=off"
							target="_blank"
							rel="noreferrer"
							className="text-xs text-muted-foreground underline underline-offset-2 hover:opacity-70 transition-opacity break-all"
						>
							https://xd.adobe.com/view/39ef1ea5-a52b-49cf-8a4b-35befa622f20-6cbc/?fullscreen&hints=off
						</a>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-8">
						<RotatedLabel>Final</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Final Design</h2>
							<img src={finaldesign} alt="UniLink final design" className="w-full object-cover object-center border border-foreground" />
							<ContentBlock heading="Final Usability Test: Participants">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Ten UTM students selected through random sampling, varying in academic year, major, and gender — spanning Biology, Psychology, Computer Science, Physics, Professional Writing, and
									CCIT. Some were highly engaged in campus life; others found UTM's commuter nature a challenge for meeting new people.
								</p>
							</ContentBlock>
							<ContentBlock heading="Process">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Testing was conducted in person and over Zoom. Users were given access to the Adobe XD prototype and asked to complete sign-up, matching, and chat tasks. Detailed notes were taken
									and later analyzed alongside post-test questionnaire responses.
								</p>
							</ContentBlock>
							<ContentBlock heading="Results">
								<p className="text-sm text-muted-foreground leading-relaxed">
									No failed test cases. All participants successfully completed every task. Users were familiar with the matching page, chat page, and account creation concepts. However, they
									expressed that the prototype still has room for improvement — particularly around navigation button effectiveness and social feature functionality. Future iterations may use Swift
									for iOS development and a Django backend to implement a working version of the matching algorithm.
								</p>
							</ContentBlock>
							<a
								href="https://xd.adobe.com/view/39ef1ea5-a52b-49cf-8a4b-35befa622f20-6cbc/?fullscreen&hints=off"
								target="_blank"
								rel="noreferrer"
								className="text-xs text-muted-foreground underline underline-offset-2 hover:opacity-70 transition-opacity break-all"
							>
								https://xd.adobe.com/view/39ef1ea5-a52b-49cf-8a4b-35befa622f20-6cbc/?fullscreen&hints=off
							</a>
						</div>
					</div>

					{/* ── Takeaways ── */}
					<div className="flex flex-col gap-6 w-full px-4 mb-16 lg:hidden">
						<HorizontalLabel>Takeaways</HorizontalLabel>
						<ContentBlock heading="Data Security and Privacy">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Even after considering privacy during ideation, users still showed hesitancy when building profiles — particularly around sharing hobbies and personal data used for algorithmic
								recommendations. A future approach may either reduce reliance on personal data for matching or target a user group more comfortable with sharing such information.
							</p>
						</ContentBlock>
						<ContentBlock heading="Matching">
							<p className="text-sm text-muted-foreground leading-relaxed">
								The matching page failed to communicate that it was scrollable, leaving users with limited information about a potential match. Relying on internal scrollability for revealing details
								is not effective UX. Future prototypes will surface more information directly on the matching card, such as hobbies and shared majors highlighted with colour accents over the match's
								photo.
							</p>
						</ContentBlock>
						<ContentBlock heading="UI">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Most users expressed discomfort with navigation buttons that didn't respond immediately — a result of click and hover interactions conflicting in Adobe XD. A short-term fix is removing
								hover states; the long-term solution is transitioning the front-end to Swift or React Native for full control over interactive functionality.
							</p>
						</ContentBlock>
						<ContentBlock heading="Next Steps">
							<p className="text-sm text-muted-foreground leading-relaxed">
								Technical enhancements are needed — a more sophisticated matching algorithm, improved communication features including a "scheduled campus meetup" option, and broader usability testing
								across age groups and cultural backgrounds. Collaboration with UofT IT for authentication and email verification, plus official UTM administration approval, will be essential for a
								real-world deployment. Comprehensive design specifications and brand guidelines are also needed to maintain consistency.
							</p>
						</ContentBlock>
					</div>
					<div className="hidden justify-start items-start lg:flex flex-row gap-6 w-[60em] mb-16">
						<RotatedLabel>Takeaways</RotatedLabel>
						<div className="flex flex-col gap-8 w-full py-2">
							<h2 className="text-xl font-semibold text-foreground">Takeaways</h2>
							<ContentBlock heading="Data Security and Privacy">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Even after considering privacy during ideation, users still showed hesitancy when building profiles — particularly around sharing hobbies and personal data used for algorithmic
									recommendations. A future approach may either reduce reliance on personal data for matching or target a user group more comfortable with sharing such information.
								</p>
							</ContentBlock>
							<ContentBlock heading="Matching">
								<p className="text-sm text-muted-foreground leading-relaxed">
									The matching page failed to communicate that it was scrollable, leaving users with limited information about a potential match. Relying on internal scrollability to reveal details is
									not effective UX. Future prototypes will surface more information directly on the matching card, such as hobbies and shared majors highlighted with colour accents over the match's
									photo.
								</p>
							</ContentBlock>
							<ContentBlock heading="UI">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Most users expressed discomfort with navigation buttons that didn't respond immediately — a result of click and hover interactions conflicting in Adobe XD. A short-term fix is
									removing hover states; the long-term solution is transitioning the front-end to Swift or React Native for full control over interactive functionality.
								</p>
							</ContentBlock>
							<ContentBlock heading="Next Steps">
								<p className="text-sm text-muted-foreground leading-relaxed">
									Technical enhancements are needed — a more sophisticated matching algorithm, improved communication features including a "scheduled campus meetup" option, and broader usability
									testing across age groups and cultural backgrounds. Collaboration with UofT IT for authentication and email verification, plus official UTM administration approval, will be essential
									for real-world deployment. Comprehensive design specifications and brand guidelines are also needed to maintain consistency.
								</p>
							</ContentBlock>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default memo(UniLink);
