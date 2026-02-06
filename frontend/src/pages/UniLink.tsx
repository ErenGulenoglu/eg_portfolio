import NavigationBar from "../components/NavigationBar";
import NavigationBarMobile from "../components/NavigationBarMobile";
import Footer from "../components/Footer";

import { memo, useEffect } from "react";
import { Link } from "react-router-dom";

import TextFade from "../components/animations/TextFade";

import unilinkpreview from "../assets/CCT434/unilinkpreview.png";

function UniLink() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - UniLink";
	});
	return (
		<div>
			<div className="sticky top-0 w-full hidden md:block z-50">
				<NavigationBar />
			</div>
			<div className="sticky top-0 w-full block md:hidden z-50">
				<NavigationBarMobile />
			</div>
			<main className="flex flex-col justify-center items-center w-full">
				<div className="flex flex-col w-[80vw] justify-center my-16 gap-8 lg:w-[65vw]">
					<TextFade onetime={true}>
						<h1 className="w-fit text-5xl roboto font-light bg-[#7469B6] p-1 rounded-xs">UniLink</h1>
					</TextFade>
					<div className="flex flex-col w-full gap-4 items-start lg:gap-16 lg:flex-row">
						<div className="flex flex-col w-full gap-6 lg:w-1/2">
							<TextFade onetime={true}>
								<p className="text-lg roboto font-mono">
									UniLink is a mobile app that helps University of Toronto Mississauga students form meaningful friendships and romantic connections in a safe, verified environment. By using UofT
									credentials, the app ensures all users are real students while focusing on interest-based and academic matching rather than superficial swiping. Designed with an intuitive interface
									and low-pressure interactions, UniLink encourages authentic connections, in-person meetups, and cross-cultural communication, making it easier for students to expand their social
									networks and navigate campus life.
								</p>
							</TextFade>
							<TextFade onetime={true}>
								<Link to="https://www.figma.com/proto/teMuFPCoGhJtvikefERyNA/High-Fidelity-CCT305-Prototype---A4--Group-4?node-id=21-9217&starting-point-node-id=21%3A9217&t=LtSvDYEubpt7M2uI-1">
									<button className="w-[10em] h-[3em] text-black text-lg font-semibold border border-black cursor-pointer rounded-4xl bg-white duration-320 hover:bg-[#8CA9FF] hover:text-white">
										View Protype
									</button>
								</Link>
							</TextFade>

							<TextFade onetime={true}>
								<ul className="flex flex-col text-xl roboto font-mono w-full">
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p className="bg-[#7469B6] px-1 rounded-xs">Role</p>
										<p className="bg-[#7469B6] px-1 rounded-xs">UI/UX Designer</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p className="bg-[#7469B6] px-1 rounded-xs">Timeframe</p>
										<p className="bg-[#7469B6] px-1 rounded-xs">8 Weeks</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p className="bg-[#7469B6] px-1 rounded-xs">Team</p>
										<p className="bg-[#7469B6] px-1 rounded-xs">Team UX/UI Project</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p className="bg-[#7469B6] px-1 rounded-xs">Tools</p>
										<p className="bg-[#7469B6] px-1 rounded-xs">Adobe XD</p>
									</li>
								</ul>
							</TextFade>
						</div>
						<div className="flex flex-col w-full lg:w-1/2">
							<TextFade onetime={true}>
								<h2 className="text-4xl roboto font-medium">Contents</h2>
								<ul className="flex flex-col text-xl roboto font-light w-full">
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p>01</p>
										<p>Project Brief</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p>02</p>
										<p>Context</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p>03</p>
										<p>Research Methods</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p>04</p>
										<p>Design Decisions</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p>05</p>
										<p>Final Design</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p>06</p>
										<p>Takeaways</p>
									</li>
								</ul>
							</TextFade>
						</div>
					</div>
					<div className="flex flex-col w-full gap-8 roboto">
						<TextFade onetime={true}>
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Preview</h2>
						</TextFade>
						<img src={unilinkpreview} className="w-full object-cover object-center border border-foreground rounded-xl" />
					</div>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-4 roboto">
							<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Summary</h3>
							<p className="text-lg roboto font-mono">
								A campus app that helps UTM students build meaningful friendships and romantic connections through verified student accounts. The platform prioritizes interest- and academic-based
								matching to encourage authentic interactions and in-person meetups. The UI focuses on simplicity and clarity, making it easy for students to navigate and engage with potential matches.
							</p>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Project Brief</h2>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">The Problem</h3>
								<p className="text-lg roboto font-mono">
									Students at the University of Toronto Mississauga <span className="font-bold">constantly look for secure methods to make friends or form intimate relationships on campus.</span> As
									the university prioritizes academic excellence and places some focus on fostering socializing opportunities, it seems to completely neglect students' need for safe ways to build
									deep, meaningful relationships.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">The High-Level User/Community Activities</h3>
								<p className="text-lg roboto font-mono">
									Our proposed solution aims to bring students together within the community. Several challenges discourage UTM students from socializing. First is the campus location, unlike St.
									George Campus, UTM is disconnected from an urban environment, limiting students' opportunities to meet outside of campus and foster connections. Second, is that UTM is a commuter
									campus. After classes, many students choose to commute home as early as possible. To address these issues, our solution encourages students to connect and socialize even when not
									physically on campus.
								</p>
							</div>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Research Methods</h2>
							<div className="flex flex-col w-full gap-4 roboto">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Primary Research</h3>
								<p className="text-lg roboto font-mono">
									To better understand the dating and social culture at the University of Toronto Mississauga, our research attemped to form a comprehensive picture of how students perceive dating,
									their related experiences and whether dating is a priority for them.
								</p>
								<p className="text-lg roboto font-mono">
									To achieve this, we randomly selected 10 students from across campus to ensure a representative sample of our user base, including individuals from different majors, years of study,
									and cultural backgrounds. The diverse sampling approach helped us gather reflective data of the diverse perspective related to dating at UTM.
								</p>
								<p className="text-lg roboto font-mono">As a group, we constructed qualitative interview questions to gain insight into current dating practices at UTM. Our questions focused on:</p>
								<ol className="flex flex-col gap-2 text-lg roboto font-mono list-decimal list-inside pl-4">
									<li>Student's current experiences and attitude toward dating.</li>
									<li>Student's perception of dating culture at UTM.</li>
									<li>Whether dating is a priority for students.</li>
									<li>Challenges of forming intimate or non-intimate relationships on campus.</li>
									<li>Existing experiences with dating apps and students' willingness to use them.</li>
									<li>Favourable and unfavourable features for the potential campus-exclusive dating app.</li>
								</ol>
								<p className="text-lg roboto font-mono">
									The interviews were conducted either in person at the UTM campus, or Online via Zoom, using a one-on-one interview style to ensure participants felt comfortable sharing their
									thoughts. Interviews took place during the university's reading-week break until Thursday, allowing time for data organization and analysis.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Findings</h3>
								<p className="text-lg roboto font-mono">
									After data collection, we organized it into recurring themes and patterns that covered users' experiences, challenges, preferences, and concerns. Based on our findings, we generated
									two user personas that we found most reflective of our target user base. This process allowed us to better empathize with their needs and refine our plans for the app.
								</p>
								<div className="flex flex-col">
									<p className="text-lg roboto font-bold font-mono">Overview</p>
									<div className="flex flex-col gap-4">
										<p className="text-lg roboto font-mono">
											Since the app targets UTM students, all interviewees were from UTM. Most are not currently in a relationship, with one dating a non-UTM student and another is dating a fellow UTM
											student. Regarding their views on the current dating culture, many expressed unfamiliarity with it or described it as “rare”.
										</p>
										<p className="text-lg roboto font-mono">
											When asked about the challenges of forming relationships on campus, recurring themes included the campus's commuter culture, the lack of social events, and the unapproachability
											of peers.
										</p>
										<p className="text-lg roboto font-mono">
											When asked about their interest in dating, many emphasized their focus on academic excellence and personal development. However, when asked whether they would be interested in a
											campus-exclusive dating app, many were excited and said they are interested in trying it. Some raised concerns about a small dating pool or user inactivity.
										</p>
										<p className="text-lg roboto font-mono">
											As for the use of UofT credentials for accessing the application, all participants agreed that it would enhance security. Yet, some raised concerns about the possibility of
											faculty accessing or monitoring the app.
										</p>
									</div>
								</div>
							</div>
							<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">ADD USER PERSONAS</h3>
						</div>
					</TextFade>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default memo(UniLink);
