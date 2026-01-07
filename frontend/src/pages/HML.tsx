import NavigationBar from "@/components/NavigationBar";
import NavigationBarMobile from "@/components/NavigationBarMobile";
import Footer from "@/components/Footer";

import { memo, useEffect } from "react";

import TextFade from "../components/animations/TextFade";

import preview477 from "../assets/CCT477/Utm477.jpg";
import flow477 from "../assets/CCT477/FlowModel477.png";

function HML() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - Hazel Mccallion Library UX Research Case Study";
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
						<h1 className="w-fit text-5xl roboto font-bold bg-[#7469B6] p-1 rounded-xs lg:w-[50%]">Improving Transparency in the Mississauga Library Makerspace</h1>
					</TextFade>
					<div className="flex flex-col w-full gap-4 items-start lg:gap-16 lg:flex-row">
						<div className="flex flex-col w-full gap-6 lg:w-1/2">
							<TextFade onetime={true}>
								<div className="flex flex-col gap-4">
									<p className="text-lg roboto font-mono">
										This project investigates the user experience of 3D printing services at the Hazel McCallion Central Library's makerspace, focusing on how transparency, staff dependency, and
										unclear wait times shape user frustration. Using Contextual Inquiry, I observed how experienced makers navigate a structured and time-limited library environment while preparing
										and submitting 3D prints.
									</p>
									<p className="text-lg roboto font-mono">
										The research revealed key breakdowns in the workflow, including conflicting information, limited user control, and invisible print queues. These issues often forced users to rely
										on personal workarounds rather than institutional support. Insights from this phase defined the project's main design opportunities.
									</p>
									<p className="text-lg roboto font-mono">
										To explore possible solutions, I facilitated a Participatory Design session where users became stakeholders in the design process. Instead of producing a final product, the project
										emphasizes UX research, stakeholder collaboration, and design direction, demonstrating how increased transparency and user-centered planning could improve access to public
										makerspaces.
									</p>
								</div>
							</TextFade>

							<TextFade onetime={true}>
								<ul className="flex flex-col text-xl roboto font-mono w-full">
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p className="bg-[#7469B6] px-1 rounded-xs">Role</p>
										<p className="bg-[#7469B6] px-1 rounded-xs">UX Researcher</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p className="bg-[#7469B6] px-1 rounded-xs">Timeframe</p>
										<p className="bg-[#7469B6] px-1 rounded-xs">8 Weeks</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p className="bg-[#7469B6] px-1 rounded-xs">Team</p>
										<p className="bg-[#7469B6] px-1 rounded-xs">Team UX Research Project</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p className="bg-[#7469B6] px-1 rounded-xs">Tools</p>
										<p className="bg-[#7469B6] px-1 rounded-xs">Miro, Canva</p>
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
										<p>Contextual Inquiry</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p>03</p>
										<p>Participatory Design Study</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p>04</p>
										<p>Findings and Reflecions</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p>05</p>
										<p>Conclusion</p>
									</li>
								</ul>
							</TextFade>
						</div>
					</div>
					<div className="flex flex-col w-full gap-8 roboto">
						<TextFade onetime={true}>
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Preview</h2>
						</TextFade>
						<div className="flex w-full justify-center items-center">
							<img src={preview477} className="w-fit h-auto object-cover object-center border border-foreground rounded-xl p-4" />
						</div>
					</div>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-4 roboto">
							<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Summary</h3>
							<p className="text-lg roboto font-mono">
								This report summarizes design challenges and explores how users perceive problems and opportunities with 3D printing in the Hazel McCallion Central Library makerspace. The findings
								emphasize the accessibility and user-friendliness of the 3D printing process as a whole.
							</p>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Contextual Inquiry</h2>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Target Group and Makerspace</h3>
								<p className="text-lg roboto font-mono">
									During the preplanning phase of our research, the selection of the makerspace and the target user group evolved together. We chose TTRPG players who are executive members of the UTM
									Against Dragons campus club as our user group. This decision allowed us to naturally connect the group to a makerspace contextual inquiry, as these users are already interested in
									the makerspace's 3D printing capabilities.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Context</h3>
								<p className="text-lg roboto font-mono">
									Both contextual inquiries took place at the Hazel McCallion Library on October 21, 2025. Both users are individuals interested in tabletop role-playing games and serve as executives
									of the UTM Against Dragons D&D Club. Accordingly, the critical inquiries focused on how they 3D print models of the characters they use in their game sessions and how they create pin
									buttons for the D&D Club—activities that reflect their hobbies and interests. The observation was conducted by visiting the site with the users, taking notes on their actions and
									insights, and asking clarifying questions when we did not fully understand the problems or emotions they were experiencing. We observed the users without interfering with their
									actions, and before visiting the site, we asked them to think aloud as much as possible while performing their tasks.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Partnership</h3>
								<p className="text-lg roboto font-mono">
									To build rapport between us—the researchers—and the users, we first sought out people we knew who used makerspaces before moving on to the contextual inquiry phase. After finding
									participants who agreed to help with our research, we explained the purpose of the study, our course, and our assignment. We also described how we would observe them, asked if they
									had any concerns about being observed, and made it clear that they could withdraw from the research at any time. Once our initial conversations concluded, we provided them with a
									consent letter to formalize their participation. During the contextual inquiry, we followed the “Master/Apprentice” model, allowing the participants to lead by explaining their
									workflow while we asked questions about parts we were curious about.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Interpretation</h3>
								<p className="text-lg roboto font-mono">
									For interpretation, rather than interfering, we found that the first user was easygoing and provided valuable insights through offhand comments. With the second user, we took more
									initiative by asking questions to better understand their emotions—for example, we asked how they felt about the 3D printing tutorial offered by the library. They described it as
									“slow” and chose to watch it at double speed. To gain more concrete information from both users, we often asked follow-up questions about their offhand remarks, as these comments
									gave useful context about usability problems.
								</p>
								<p className="text-lg roboto font-mono">
									For instance, one situation where we did not need to interfere was when User Alpha was watching the 3D printing tutorial recommended by the library. They pointed out that the
									instructions in the video and those on the library's website did not match. User Alpha still managed to complete their task since they were already familiar with 3D printing and did
									not really need the tutorial. Another example was when User Alpha remarked that USB access on the library computers was “too easy.” We asked what they meant by that—whether it
									related to efficiency or user-friendliness—and they explained that the ease of access could pose potential security risks to the library computers. This concern made them hesitant to
									use their USB drive, as they are a computer science student with some expertise in the area.
								</p>
								<p className="text-lg roboto font-mono">
									Overall, most of our interpretations were based on these offhand comments, with only occasional instances of “Withdrawal and Return” interactions.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Focus</h3>
								<p className="text-lg roboto font-mono">
									The focus points we discovered through our contextual inquiry may have been influenced by our users' prior experience with makerspaces. However, our findings reveal that the
									library's systems for 3D printing and button making are often unsupportive and overly complicated. We can summarize these observations as follows:
								</p>
								<div className="w-full flex flex-col justify-center items-center">
									<div className="w-[90%] flex flex-col gap-2">
										<h4 className="font-bold text-lg">1. Inconsistent Information:</h4>
										<div className="w-full flex flex-col justify-center items-center">
											<div className="w-[90%] flex flex-col">
												<p>
													Information about the library's 3D printing machines is available both in an online tutorial and on the library's website. Users must also submit a signed waiver before using
													the equipment. However, the instructions in the tutorial video contradict those on the website, leaving users responsible for any mistakes made when following incorrect
													guidance. Although our participant viewed the waiver as a mere formality due to their experience with 3D printing, this inconsistency still indicates a flawed process.
												</p>
											</div>
										</div>
										<h4 className="font-bold text-lg">2. Limited Access and Quality Concerns:</h4>
										<div className="w-full flex flex-col justify-center items-center">
											<div className="w-[90%] flex flex-col">
												<p>
													The 3D printing machines have long queues, requiring users to wait at least a week before accessing them. Additionally, the library staff—not the users—operate the printers,
													which raises concerns about the final print quality and user control.
												</p>
											</div>
										</div>
										<h4 className="font-bold text-lg">3. Button-Making Equipment Issues:</h4>
										<div className="w-full flex flex-col justify-center items-center">
											<div className="w-[90%] flex flex-col">
												<p>
													The quality of paper printers used for button making is inconsistent, resulting in varied outcomes. The materials provided, such as button supplies, are also of low quality.
													Furthermore, the paper cutter lacks a protective handle, posing a risk of minor injury during use.
												</p>
											</div>
										</div>
										<h4 className="font-bold text-lg">4. User Burden:</h4>
										<div className="w-full flex flex-col justify-center items-center">
											<div className="w-[90%] flex flex-col">
												<p>
													Many tasks that users would prefer the library to handle—such as finding service prices, tutorials, and waivers—are left entirely to the users to locate online. While minor,
													these add up to a frustrating experience. More critically, 3D printing, a complex process, is largely taken out of users' hands.
												</p>
											</div>
										</div>
										<h4 className="font-bold text-lg">5. Time Constraints and Data Loss:</h4>
										<div className="w-full flex flex-col justify-center items-center">
											<div className="w-[90%] flex flex-col">
												<p>
													Time limits assigned by the library add additional stress. Once a user's allotted session ends, their access is cut off and any work saved on the library computer is
													automatically deleted. To preserve their work, users must save it on their own USB drives, which they find stressful due to potential security vulnerabilities on the library
													computers.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Contextual Inquiry Workmodels</h3>
								<p className="text-lg roboto font-mono">
									The Contextual Inquiry work models were used to visualize how users move through the library’s 3D printing and makerspace services and where breakdowns occur. Sequence and flow
									models captured each step of the process, from discovering the service to submitting a print and waiting for pickup, revealing how users depend on staff, navigate unclear
									requirements, and experience long, invisible queues. These models helped make hidden issues visible, such as contradictory information, delayed communication, and limited user
									control over printing outcomes. By mapping both user actions and system constraints, the work models clarified key pain points and guided the identification of design opportunities
									focused on transparency, planning, and user autonomy.
								</p>
								<h3 className="font-bold text-xl">Sequence Model</h3>
								<p>
									We chose the Sequence Model because it provides step-by-step insight into how the work is actually carried out, allowing us to understand the user’s intent behind each action, the
									triggers that prompt those actions, and the breakdowns that create problems during execution.
								</p>
								<div className="flex flex-row w-full border border-foreground rounded-xl justify-center items-center">
									<div className="flex w-[50%] border-r border-foreground justify-center items-center p-4">
										<ul className="flex flex-col w-full justify-end items-center gap-2">
											<li className="w-full text-left">Intent: Print 3D model for upcoming TTRPG session.</li>
											<span>↓</span>
											<li className="w-full text-left">Trigger: End of class at UTM, there is time to print 3D model.</li>
											<span>↓</span>
											<li className="w-full text-left">The user goes to the Hazel McCallion Library at 3:00 PM, knowing the library closes at 5:00 PM.</li>
											<span>↓</span>
											<li className="w-full text-left">The user asks the service desk on the first floor for the location of the makerspace and is directed to the basement.</li>
											<span>↓</span>
											<li className="w-full text-left">The user goes to the basement and easily finds the makerspace service desk.</li>
											<span>↓</span>
											<li className="w-full text-left">
												The user asks about the availability of 3D printers and is told that most information, such as tutorials and printing prices, can be found online on the makerspace webpage.
												They are also informed that a waiver is required to use the machines.
											</li>
											<span>↓</span>
											<li className="w-full text-left">
												The user uses a library computer to begin the process, watching tutorials and reading instructions on the makerspace webpage. They note that the library offers water-soluble
												support material.
											</li>
											<span>↓</span>
											<li className="w-full text-left text-red-500">
												The user notices contradictions between the website instructions and the tutorial regarding supported file extensions. Instead of following the library's instructions, the user
												relies on their own 3D printing knowledge and treats the tutorial as a formality.
											</li>
										</ul>
									</div>
									<div className="flex w-[50%] justify-center items-center p-4">
										<ul className="flex flex-col w-full justify-end items-center gap-2">
											<li className="w-full text-left">
												User takes out their personal USB containing the 3D printing files and transfers them to the library computer. They notice that USB access on the library computers is
												unrestricted and realize this could pose potential security risks, which makes them uneasy.
											</li>
											<span>↓</span>
											<li className="w-full text-left">
												User goes to titancraft.com to create a new 3D model from scratch using pre-built assets. They enjoy the creative process of building the model but lose track of time. Once
												finished, they download the completed model.
											</li>
											<span>↓</span>
											<li className="w-full text-left text-red-500">
												User asks the makerspace service desk how to print their model. They are informed that they can email it to the library, and it will be added to a printing queue that takes
												about a week.
											</li>
											<span>↓</span>
											<li className="w-full text-left">
												User returns to their computer and begins using FreeCAD to export their model as an STL file for printing. Since they are unfamiliar with FreeCAD, they watch a few tutorials to
												learn how to use it properly.
											</li>
											<span>↓</span>
											<li className="w-full text-left">
												When the library announces closing in 15 minutes, the user finalizes their work and sends both the files they transferred from the USB and the newly created model to the
												library's email.
											</li>
											<span>↓</span>
											<li className="w-full text-left">
												User double-checks with a librarian and is informed that payment is only required upon collecting the finished 3D print. The user asks if someone else can collect it on their
												behalf and learns they can call the library in advance to arrange this.
											</li>
											<span>↓</span>
											<li className="w-full text-left">The user exits the library.</li>
										</ul>
									</div>
								</div>
								<h3 className="font-bold text-xl">Flow Model</h3>
								<img src={flow477} className="w-full object-cover object-center border border-foreground rounded-xl" />
								<p>These models shown here are just applied on one user. If you like to see the application on the other user as well you can consult to our research document:</p>
								<a href="https://drive.google.com/file/d/13P-FCVxZcYx8O9kWPRN3CIFGq8XhfoG1/view?usp=sharing" target="_blank" className="w-full text-wrap text-blue-500 hover:underline">
									https://drive.google.com/file/d/13P-FCVxZcYx8O9kWPRN3CIFGq8XhfoG1/view?usp=sharing
								</a>
							</div>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Participatory Design Study</h2>
							<p className="text-lg roboto font-mono">
								After analyzing the findings from the Contextual Inquiry, we conducted a Participatory Design session with the same users, now engaged as stakeholders. This session helped us
								understand user expectations around functionality by involving participants directly in the design process. It also generated new ideas and reframed our approach. Rather than
								emphasizing purely technical solutions to the challenges of 3D printing in the makerspace, stakeholders highlighted that user-friendliness and ease of use should be the most important
								design priorities.
							</p>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Design Focus</h3>
								<p className="text-lg roboto font-mono">
									We decided to focus on the stressors related to 3D printing, since the common goal among our users, without any influence from us, was 3D printing figures for TTRPG sessions.
									Considering the issues of inconsistent information, long wait times, limited library support, and strict time restrictions, we moved toward a design challenge aimed at modernizing
									the 3D printing process. Our goal is to make 3D printing more accessible, reduce stress, and increase user control throughout the process as a result of our inquiry.
								</p>
								<p className="text-lg roboto font-mono">
									We view our participants, who are both proficient in 3D printing due to their interest TTRPGs, as key stakeholders in our solution. Their firsthand experiences and usage habits in
									the makerspace make them valuable sources for identifying and addressing real problems, and creating design solutions.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Probes and Participatory Activities</h3>
								<p className="text-lg roboto font-mono">
									Because we needed to propose a specific type of design solution (e.g., software development, business solution, etc.) to create a meaningful activity where our stakeholders could
									participate by contributing their high-level ideas, we decided to center our design solution around an app concept. This app would modernize the 3D printing process at the Hazel
									McCallion Library and address users' main stressors. Once we established that our design solution would take the form of an app, we moved on to developing the participatory activity.
								</p>
								<p className="text-lg roboto font-mono">
									Inspired by the Uber Participatory Design Study, the activity that I designed engaged users in designing low-fidelity user interfaces to express their ideas—not in terms of how the
									app should look, but what features it should include. I also incorporated a card-sorting exercise to support the ideation process, allowing participants to express their thoughts
									through writing rather than visual design. The written data collected from this activity can be used in future iterations of the project. We believed this approach would help
									participants articulate features and relationships relevant to 3D printer usage within the makerspace.
								</p>
								<p className="text-lg roboto font-mono">
									We conducted our activity digitally using a FigJam format on the Miro platform, where we provided templates for card sorting and low-fidelity interface design to encourage creativity
									among our stakeholders. First, we presented a clear and concise summary of our findings from the contextual inquiry to help participants recall and reflect on their pain points.
									Then, we facilitated a card-sorting exercise in which participants categorized potential app features into must-haves, nice-to-haves, and dream-to-haves.
								</p>
								<p className="text-lg roboto font-mono">
									Next, we carried out a journey-mapping session to visualize how stakeholders wanted the 3D printing process to unfold—from submitting a model to receiving the final printed figure.
									Following this, participants engaged in a concept development activity, using low-fidelity UI templates to express their ideas for app features. Finally, we conducted a feedback and
									reflection session, where participants responded to a series of questions and shared their thoughts on both the activity and the overall project.
								</p>
								<p className="text-lg roboto font-mono">
									We chose low-fidelity design and card-sorting activities not only to give our stakeholders the opportunity to bring their visions to life, but also because these methods allowed us
									to collect data on what stakeholders wanted to see in the app, rather than how they wanted it to look. This approach helped us move beyond our own assumptions about our design goal
									of creating a modern 3D printing app for the Hazel McCallion Library, and it inspired new feature ideas that could make the app more engaging and user-centered. The activity relates
									directly to this goal by enabling participants to collaboratively shape the app's functionality and user experience, ensuring that the final design reflects real user needs and
									priorities rather than designer assumptions.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Study Setting and Participants</h3>
								<p className="text-lg roboto font-mono">
									The participatory sessions were conducted in the Maanjiwe Nendamowinan Building of University of Toronto Mississauga campus, where we and the participants sat together in a public
									area. The activities were carried out digitally through a Miro link that we shared with them, allowing participants to engage and take actions online. One of our group members
									facilitated the session by guiding participants through the activities, asking questions, collecting feedback, and ensuring that they felt comfortable and supported at every stage of
									the participatory design session.
								</p>
								<div className="w-full flex flex-col justify-center items-center">
									<div className="flex w-full text-left pb-2">
										<h4 className="font-bold text-lg">Demographics</h4>
									</div>
									<div className="w-[90%] flex flex-col gap-2">
										<h4 className="font-bold text-lg">Participant 1</h4>
										<div className="w-full flex flex-col justify-center items-center">
											<ul className="w-[90%] flex flex-col gap-2 list-disc">
												<li>They are an executive in UTM Againts Dragons club.</li>
												<li>They are experienced in 3D modelling and printing.</li>
												<li>They are Computer Scientist Specialist.</li>
												<li>They have designed websites, apps, and UI before.</li>
											</ul>
										</div>
										<h4 className="font-bold text-lg">Participant 2</h4>
										<div className="w-full flex flex-col justify-center items-center">
											<ul className="w-[90%] flex flex-col gap-2 list-disc">
												<li>They are an executive in UTM Againts Dragons club.</li>
												<li>They are experienced in 3D modelling and printing.</li>
												<li>They are in Drama and Cinema Studies Program.</li>
												<li>They have been hired to run/design a website before.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Findings and Reflections</h2>
							<p className="text-lg roboto font-mono">To summarize what we learned about design choices within our scope from engaging with stakeholders and analyzing their feedback:</p>
							<div className="w-full flex flex-col justify-center items-center">
								<div className="w-full flex flex-col justify-center items-center">
									<ul className="w-[90%] flex flex-col gap-2 list-disc">
										<li>The app should be accessible from personal computers and ideally function as a web-based platform, eliminating the need for users to install additional software.</li>
										<li>Payments should be centralized within the app and completed prior to pickup to prevent the library from incurring costs due to unclaimed print jobs.</li>
										<li>The app should include built-in tutorials that are easy to find yet unobtrusive to experienced users.</li>
										<li>Detailed specifications of the 3D printers should be available so users can easily input accurate settings into their own slicers.</li>
										<li>Users should be able to upload their 3D models directly to the system for printing.</li>
										<li>A crudely 3D-printed rubber duck was suggested as the app's mascot, providing tips and a friendly user experience.</li>
										<li>Image-based tutorials and explanations were recommended to help overcome language barriers.</li>
										<li>The app should allow in-app access to print submissions and include essential account features, such as login, logout, and a print status screen.</li>
										<li>A feature should notify users when and where their projects will be printed.</li>
										<li>For first time users the app should offer basic tutorials and onboarding guidance.</li>
									</ul>
								</div>
							</div>
							<p className="text-lg roboto font-mono">
								This feedback was somewhat surprising to me because participants focused on aspects I had not prioritized—particularly accessibility. For example, their suggestion of a 3D-printed
								rubber duck as a mascot to provide tips and create a friendly user experience was unexpected. Additionally, participants emphasized the importance of tutorials, which was surprising
								because, unlike us, they were not trying to solve the problem directly but were thinking about how smooth and intuitive the solution should feel.
							</p>
							<p className="text-lg roboto font-mono">
								During our activity, presenting the participants with the idea of becoming stakeholders clearly engaged them, which likely contributed to the success of the card-sorting and
								brainstorming exercises. However, one stakeholder expressed discomfort using Miro and creating a low-fidelity design. Stakeholder Beta noted that they are not an app designer and felt
								that interface design was a challenging and unnatural part of the process. They also disliked having to sign in to Miro to participate (since the free plan requires invited users to
								log in). In the future, we might conduct card-sorting digitally in Miro while moving interface design exercises to pen and paper to make participants more comfortable.
							</p>
							<p className="text-lg roboto font-mono">
								Based on participant input, we are now considering developing a web app rather than a downloadable app that requires installation, prioritizing accessibility. Furthermore, we will
								focus on user-friendliness rather than building a solution based solely on our assumptions. There is a strong possibility that we will integrate a mascot to provide tips and guidance,
								enhancing the overall user experience.
							</p>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Conclusion</h2>
							<p className="text-lg roboto font-mono">
								The main takeaway for me is that I need to focus on making the design user-friendly and accessible, while incorporating the functionality my stakeholders suggested. I also realized
								that not all participants are comfortable using digital UI tools, so in the future I will make activities simpler or check beforehand whether participants have experience with
								platforms like Miro. I learned the value of engaging stakeholders early, as they revealed insights I hadn't anticipated, such as the importance of tutorials, mascots, and smooth
								workflows. Overall, this process showed me how critical iterative, participatory design is for creating solutions that truly meet users' needs.
							</p>
							<p className="text-lg roboto font-mono w-full">
								This link will take you to the post I shared about this project:{" "}
								<a href="https://www.linkedin.com/feed/update/urn:li:activity:7402815181472354304/" target="_blank" className="w-full text-blue-500 text-wrap hover:underline">
									https://www.linkedin.com/feed/update/urn:li:activity:7402815181472354304/
								</a>
							</p>
						</div>
					</TextFade>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default memo(HML);
