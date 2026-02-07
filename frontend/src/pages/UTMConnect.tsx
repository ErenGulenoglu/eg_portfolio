import NavigationBar from "@/components/NavigationBar";
import NavigationBarMobile from "@/components/NavigationBarMobile";
import Footer from "@/components/Footer";

import { memo, useEffect } from "react";
import { Link } from "react-router-dom";

import TextFade from "../components/animations/TextFade";

import preview305 from "../assets/CCT305/preview_305.png";
import lowfid305 from "../assets/CCT305/305_low-fidelity.jpg";
import lowmidfid305 from "../assets/CCT305/305midfidelity.png";
import highfid305 from "../assets/CCT305/305high-fid.png";
import persona305 from "../assets/CCT305/305Persona.jpg";
import prioritizationgrid305 from "../assets/CCT305/305Prioritization.jpg";

function UTMConnect() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - UTM Connect";
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
						<h1 className="w-fit text-5xl roboto font-light bg-[#7469B6] p-1 rounded-xs">UTM Connect</h1>
					</TextFade>
					<div className="flex flex-col w-full gap-4 items-end lg:gap-16 lg:flex-row">
						<div className="flex flex-col w-full gap-6 lg:w-1/2">
							<TextFade onetime={true}>
								<p className="text-lg roboto font-mono">
									UTM Connect is a mobile app concept designed to help UTM students discover student clubs, stay informed about events, and connect with campus communities. Built through user research
									and iterative prototyping, the project addresses common challenges such as scattered club information, low engagement, and difficulty balancing academic and social life. The final
									design emphasizes clarity, accessibility, and familiar social interactions to support meaningful participation in campus life.
								</p>
							</TextFade>
							<TextFade onetime={true}>
								<Link
									to="https://www.figma.com/proto/teMuFPCoGhJtvikefERyNA/High-Fidelity-CCT305-Prototype---A4--Group-4?node-id=21-9217&starting-point-node-id=21%3A9217&t=LtSvDYEubpt7M2uI-1"
									target="_blank"
								>
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
										<p className="bg-[#7469B6] px-1 rounded-xs">Figma, Miro</p>
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
										<p>Preview</p>
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
						<img src={preview305} className="w-full object-cover object-center border border-foreground rounded-xl" />
					</div>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-4 roboto">
							<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Summary</h3>
							<p className="text-lg roboto font-mono">
								A campus app that helps students to experience social life on campus by connecting with students, clubs, and enrolling in events in a university that is hard to balance social and
								academic life. The UI focuses on clarity with distinguishable elements to enhance design familarity and platform navigability for our users.
							</p>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Context</h2>
							<p className="text-lg roboto font-mono">
								Student clubs play a major role in establishing the balance between social and academic life in university. This is why the University of Toronto Mississauga (UTM), like many other
								schools, has a vast array of student clubs available. However, with such a large number, they can be hard to keep track of. We wanted to investigate the concerns students have with
								club discovery, participation and socialization, and used our prototype to address them.
							</p>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">The Problem</h3>
								<p className="text-lg roboto font-mono">
									As UTM is a commuter campus with a large student body, many students find it difficult to discover clubs that interest them and to stay informed about events. This often leads to low
									engagement and a lack of connection with the campus community. Mainstream social media platforms are not effective in addressing connecting students to clubs and events.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">The Challenge</h3>
								<p className="text-lg roboto font-mono">
									Design an app that helps students and campus organizations connect, while creating an environment that feels safe, welcoming, and inclusive for all users.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">The Solution</h3>
								<p className="text-lg roboto font-mono">
									A mobile app for UTM students to see upcoming campus events, see suggested clubs, RSVP events they want to join, and connect with other students through chat features.
								</p>
								<img src={lowfid305} className="w-full object-cover object-center border border-foreground rounded-xl" />
							</div>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Research Methods</h2>
							<p className="text-lg roboto font-mono">
								Student clubs play a major role in establishing the balance between social and academic life in university. This is why the University of Toronto Mississauga (UTM), like many other
								schools, has a vast array of student clubs available. However, with such a large number, they can be hard to keep track of. We wanted to investigate the concerns students have with
								club discovery, participation and socialization, and used our prototype to address them.
							</p>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Problem Statement</h3>
								<p className="text-lg roboto font-mono">
									UTM students need a safe and accessible way to discover campus clubs, events, and peers. As a primarily commuter campus, many students have limited in-person interaction and are
									unlikely to seek out campus events through personal social media. This results in low awareness of student organizations and fewer opportunities for social connection and community
									building.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Primary Research</h3>
								<p className="text-lg roboto font-mono">
									Interview questions were designed to identify pain points among the target audience, tailored for both students who are involved in campus clubs and those who are not. Interviews
									were conducted with five participants to better understand their experiences with club discovery and engagement. The insights gathered were then used to define key pain points and
									inform design solutions.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Findings</h3>
								<p className="text-lg roboto font-mono">
									Updates from club Instagram accounts often get lost in students' feeds, causing disengagement from the few clubs they have joined. Social interaction with other club members is
									limited on this platform, as meaningful socialization usually only happens at in-person events. However, low event awareness and difficult scheduling make attending events
									challenging. Many students, especially commuters, come to campus only for classes and leave shortly after, which contributes to a weak sense of community. The time and effort
									required to learn about clubs through in-person interaction further discourages students from getting involved.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">User Personas</h3>
								<p className="text-lg roboto font-mono">
									From the demographics data we collected over the course of interviews, we named the persona we created Sandy Student, a 21 year old female UTM undergraduate student who is studying
									full-time. She is in the CCIT program and would like to get more out of campus life since she has felt a lack of community since starting university. She aims to build her social
									network while balancing her class load by joining clubs, but this has been difficult due to the difficulty of finding information on clubs she might like to join.
								</p>
								<img src={persona305} className="w-full object-cover object-center border border-foreground rounded-xl" />
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Prioritization Grid</h3>
								<p className="text-lg roboto font-mono">
									Based on the group voting results regarding the prioritization grid, we have identified the core functionality of our application and ideated on its interface. For the initial
									prototype we are considering the “happy scenario” and our persona where the user is a student browsing through campus groups. Moreover, we assume that the user is already signed in.
								</p>
								<img src={prioritizationgrid305} className="w-full object-cover object-center border border-foreground rounded-xl" />
							</div>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Design Decisions</h2>
							<div className="w-full flex flex-col gap-4">
								<p className="text-lg roboto font-mono">
									Before our usability testing, understanding the functionalities our users require, we created a low-mid fidelity prototype. This prototype allowed us to visualize the app's structure
									and user flow, enabling us to gather feedback on the overall design and usability.
								</p>
								<img src={lowmidfid305} className="w-full object-cover object-center border border-foreground rounded-xl" />
							</div>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Usability Testing</h3>
								<p className="text-lg roboto font-mono">
									Conducted think-aloud usability testing with five participants using the task, “Enroll in a scheduled event, then leave it.” This task helped surface feedback on page design and
									users' thought processes while navigating the platform. Initial feedback revealed confusion around terminology such as “RSVP,” as well as hesitation when attempting to sign up for
									events. These issues stemmed from low-fidelity UI limitations, including unclear typography, indistinct visual grouping, missing titles, and difficulty distinguishing between
									sections. As a result, users struggled with visual clarity and overall navigation.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">UI Design</h3>
								<p className="text-lg roboto font-mono">
									In our high-fidelity prototype, we aimed to create a clear and intuitive UI with distinguishable elements to enhance design familiarity and platform navigability for our users. To
									achieve this, we retained the layout of all functional pages from our low-fidelity design while incorporating meaningful context and visual assets to support user understanding. In
									our low-fidelity prototype, although users were able to complete the assigned tasks, some expressed confusion due to the lack of real content and context. With our improvements in UI
									and more expressive design elements, we eliminated these ambiguities, making navigation smoother and enhancing the overall user experience.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Page Distinction</h3>
								<p className="text-lg roboto font-mono">
									One of the main criticisms we received during user testing was that the group page—intended to represent a community profile on campus—was too similar in design to the event page,
									which users were tasked with enrolling in. This similarity caused confusion when navigating between the pages and task completion. To address this issue, we redesigned the layout of
									the group page template and renamed the "group page" concept to "club page." Terminology plays a crucial role in effective user communication, especially since our users are
									university students, and student organizations are commonly referred to as "clubs."
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Improving User Flow</h3>
								<p className="text-lg roboto font-mono">
									In the first prototype, registration and withdrawal actions led to separate pages and overlay confirmations, causing button states to reset when users navigated between pages. This
									confused users and sometimes required them to re-register. The issue was resolved by turning the register and withdraw button into a single component with multiple variants, allowing
									states to persist across navigation and improving overall usability and efficiency in Figma.
								</p>
							</div>
						</div>
					</TextFade>
					<div className="flex flex-col w-full gap-8 roboto">
						<TextFade onetime={true}>
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Final Design</h2>
						</TextFade>
						<img src={highfid305} className="w-full object-cover object-center border border-foreground rounded-xl" />
						<p className="text-lg roboto font-mono">Final prototype after we refined features and UI based on the feedback we got from users.</p>
					</div>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Discover</h3>
								<p className="text-lg roboto font-mono">Suggested clubs are promoted to students based on their interests.</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Events</h3>
								<p className="text-lg roboto font-mono">Events are displayed on the homepage with a clear UI, allowing users to easily register and withdraw using popup components with variants.</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Profiles & Chatting</h3>
								<p className="text-lg roboto font-mono">
									Both students and clubs have their own profiles, along with chat features that allow users to connect with each other safely within the school platform.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Posts</h3>
								<p className="text-lg roboto font-mono">Students can share posts with connected students and clubs to express their thoughts and promote their own on-campus events.</p>
							</div>
						</div>
					</TextFade>
					<div className="flex flex-col w-full gap-8 roboto">
						<TextFade onetime={true}>
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Takeaways</h2>
						</TextFade>
					</div>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Usability Testing</h3>
								<p className="text-lg roboto font-mono">
									Observing usability testing firsthand—assessing users' reactions, struggles, and positive experiences—taught me a new way to evaluate the success of a design project I am involved
									in.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Developing A Design Concept</h3>
								<p className="text-lg roboto font-mono">Design should not start with a concept and then search for users, but rather begin with a user base to develop the concept accordingly.</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Component Approach in UI</h3>
								<p className="text-lg roboto font-mono">
									Instead of creating multiple pages to handle registration logic, using components with variants simplifies the design process and makes the app easier for users to test and
									understand.
								</p>
								<div className="flex flex-col gap-2">
									<p className="text-lg roboto font-mono">Project reports:</p>
									<a href="https://drive.google.com/file/d/1xden8ZXNIk3xrNCfQmPKFG7v_KbJXeLg/view?usp=sharing" target="_blank" className="text-blue-500 hover:underline">
										https://drive.google.com/file/d/1xden8ZXNIk3xrNCfQmPKFG7v_KbJXeLg/view?usp=sharing
									</a>
									<a href="https://drive.google.com/file/d/1rCpbNGodfEz_1iGhx_lXwnqfcwzYbjyj/view?usp=sharing" target="_blank" className="text-blue-500 hover:underline">
										https://drive.google.com/file/d/1rCpbNGodfEz_1iGhx_lXwnqfcwzYbjyj/view?usp=sharing
									</a>
									<a href="https://drive.google.com/file/d/1hr4G1ixyn6JtlQdtiv-HCMLapTN8rsYF/view?usp=sharing" target="_blank" className="text-blue-500 hover:underline">
										https://drive.google.com/file/d/1hr4G1ixyn6JtlQdtiv-HCMLapTN8rsYF/view?usp=sharing
									</a>
								</div>
							</div>
						</div>
					</TextFade>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default memo(UTMConnect);
