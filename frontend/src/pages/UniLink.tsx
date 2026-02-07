import NavigationBar from "../components/NavigationBar";
import NavigationBarMobile from "../components/NavigationBarMobile";
import Footer from "../components/Footer";

import { memo, useEffect } from "react";
import { Link } from "react-router-dom";

import TextFade from "../components/animations/TextFade";

import unilinkpreview from "../assets/CCT434/unilinkpreview.png";
import persona1 from "../assets/CCT434/persona1.jpeg";
import persona2 from "../assets/CCT434/persona2.jpeg";
import userjourney from "../assets/CCT434/user_journey.jpg";
import finaldesign from "../assets/CCT434/finaldesign.png";

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
								<Link
									to="https://xd.adobe.com/view/39ef1ea5-a52b-49cf-8a4b-35befa622f20-6cbc/?fullscreen&hints=off.com%2Ffile%2Fd%2F1xden8ZXNIk3xrNCfQmPKFG7v_KbJXeLg%2Fview%3Fusp%3Dsharing"
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
										<p>Prototyping/Usability Testing</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p>06</p>
										<p>Final Design</p>
									</li>
									<li className="flex flex-row justify-between border-b border-foreground py-4">
										<p>07</p>
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
								<div className="flex flex-col gap-8">
									<div className="flex flex-col">
										<p className="text-lg roboto font-bold font-mono">Overview</p>
										<div className="flex flex-col gap-4">
											<p className="text-lg roboto font-mono">
												Since the app targets UTM students, all interviewees were from UTM. Most are not currently in a relationship, with one dating a non-UTM student and another is dating a fellow
												UTM student. Regarding their views on the current dating culture, many expressed unfamiliarity with it or described it as “rare”.
											</p>
											<p className="text-lg roboto font-mono">
												When asked about the challenges of forming relationships on campus, recurring themes included the campus's commuter culture, the lack of social events, and the
												unapproachability of peers.
											</p>
											<p className="text-lg roboto font-mono">
												When asked about their interest in dating, many emphasized their focus on academic excellence and personal development. However, when asked whether they would be interested in
												a campus-exclusive dating app, many were excited and said they are interested in trying it. Some raised concerns about a small dating pool or user inactivity.
											</p>
											<p className="text-lg roboto font-mono">
												As for the use of UofT credentials for accessing the application, all participants agreed that it would enhance security. Yet, some raised concerns about the possibility of
												faculty accessing or monitoring the app.
											</p>
										</div>
									</div>
									<div className="flex flex-col">
										<p className="text-lg roboto font-bold font-mono">User Needs'</p>
										<div className="flex flex-col gap-4">
											<p className="text-lg roboto font-mono">
												Based on the data collected, The students’ needs revolve around having more social opportunities on campus, overcoming commuter-related barriers and ensuring privacy and safety
												in their dating experiences through the app. There is also a demand for a structured yet natural way to connect with other students without feeling pressured or
												institutionalized.
											</p>
										</div>
									</div>
									<div className="flex flex-col">
										<p className="text-lg roboto font-bold font-mono">Users' Current Practices</p>
										<div className="flex flex-col gap-4">
											<p className="text-lg roboto font-mono">
												Different methods were noted from our interviews of how students attempt to expand their social circle and potentially find a romantic partner. Many interviewees mentioned
												joining extracurricular activities, volunteering or attending social events as a way to form relationships. Others mentioned forming surface-level relationships with peers in
												small classes, group projects, or simply sitting next to them in lecture.
											</p>
											<p className="text-lg roboto font-mono">
												Other students sought off-campus options. These included mainstream dating apps, like Hinge, Bumble, and Tinder or social media platforms. However, concerns about safety, such
												as fraud and security risks, were frequently mentioned. This led some of them to rely on mutual connections, or pre-university friends.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">User Personas</h3>
								<p className="text-lg roboto font-mono">
									After data collection, we organized it into recurring themes and patterns that covered users' experiences, challenges, preferences, and concerns. Based on our findings, we generated
									two user personas that we found most reflective of our target user base. This process allowed us to better empathize with their needs and refine our plans for the app.
								</p>
								<img src={persona1} className="w-full object-cover object-center border border-foreground rounded-xl" />
								<img src={persona2} className="w-full object-cover object-center border border-foreground rounded-xl" />
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Low-Fidelity Prototype</h3>
								<iframe
									src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/mtbAqls17ryDUckdq63V9r/CCT434---Week-8---Studio-Lab?node-id=5-1143&starting-point-node-id=5%3A1143"
									className="w-full h-[600px] border border-foreground rounded-xl"
									allowFullScreen
								/>
							</div>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Design Decisions</h2>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Functional Requirments</h3>
								<ol className="flex flex-col gap-2 text-lg roboto font-mono list-decimal list-inside pl-4">
									<li className="font-bold">Privacy and Security</li>
									<p className="pl-4 font-roboto">
										To address UTM students' concern for privacy, the app will include a login system, profile information privacy settings, and controlled access to text message data.
									</p>
									<p className="pl-4 font-roboto">
										For the login system, based on interviewee suggestions, two-factor authentication will be implemented. Since logging in with a UTORid appealed to students, it will serve as the
										primary access method to enhance security.
									</p>
									<p className="pl-4 font-roboto">
										For identifiable information privacy, some interviewees expressed concerns about the risks of displaying their personal information on the app. Features such as showing enrolled
										classes or UofT credentials could lead to real-life stalking, raising safety issues. While identifiable data is crucial for the application's matching function, a one-size-fits-all
										approach may not satisfy all users. To address this, we face two options: risk losing users who are sensitive about their identifiable information or offer data optimization
										options. A possible solution is to make certain details, such as current courses or club memberships, optional, allowing students to decide what appears on their profiles.
										Otherwise, we could introduce an anonymous user pool where students can hide their major, photos, and name while still participating in both social and dating matches.
									</p>
									<p className="pl-4 font-roboto">
										For text messaging, interviewee feedback played a key role in shaping the app’s privacy features. Since conversations on a friendship and dating platform can be sensitive,
										end-to-end encryption may be added to enhance security and intimacy. Another possible feature is avoiding message storage to protect private data exchanged between users. However,
										this could impact the flagging system used to ban reported individuals, as the absence of stored messages would eliminate needed evidence.
									</p>
									<li className="font-bold">Algorithmic Recommendations and Text Features</li>
									<p className="pl-4 font-roboto">
										For algorithmic recommendations, our matching system draws inspiration from popular platforms like Tinder and Bumble while incorporating university-related aspects such as
										departments and majors of study. Optional criteria, as per some recommendations, might be included for matching based on faith, culture, astrology, and relationship preferences
										(short-term or long-term). However, creating separate search pools based on specific factors like religion could complicate the algorithm. Therefore, our earliest prototype will
										focus on developing a functionality that prioritizes university and personal aspects of individuals.
									</p>
									<p className="pl-4 font-roboto">
										Other suggestions included creating a separate matching pool for users seeking friendships rather than romantic relationships, which might be incorporated with a simple setting
										adjustment. Additionally, a GIFs and stickers function could be added to text chats, creating more opportunities for students to express themselves and bond over shared interests.
									</p>
								</ol>
								<p className="text-lg roboto font-mono">
									Students at the University of Toronto Mississauga <span className="font-bold">constantly look for secure methods to make friends or form intimate relationships on campus.</span> As
									the university prioritizes academic excellence and places some focus on fostering socializing opportunities, it seems to completely neglect students' need for safe ways to build
									deep, meaningful relationships.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Design Constrains</h3>
								<p className="text-lg roboto font-mono">To satisfy user needs, our design should avoid:</p>
								<ol className="flex flex-col gap-2 text-lg roboto font-mono list-decimal list-inside pl-4">
									<li className="pl-4">Selling user data to third parties in order to protect users' privacy.</li>
									<li className="pl-4">Limiting basic functions or compromising the overall experience to push premium memberships.</li>
									<li className="pl-4">Displaying irrelevant private information (e.g., GPA, or enrolled courses) during matchmaking.</li>
									<li className="pl-4">Allowing fake user information, or lacking verification features.</li>
									<li className="pl-4">
										The design should avoid restricting access to the dating pool for users who choose not to fill out all optional fields, ensuring privacy remains a top priority.
									</li>
								</ol>
								<img src={userjourney} className="w-full object-cover object-center border border-foreground rounded-xl" alt="user journey map" />
							</div>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Prototyping/Usability Testing</h2>
							<div className="flex flex-col gap-4">
								<p className="text-lg roboto font-mono">
									To better refine our app's functionalities, we converted our low-fidelity prototype into a high-fidelity prototype using Adobe XD. The newly designed prototype focused on enabling
									user interactions by incorporating clickable buttons and making it interactive. It allowed users to sign up for the app or log in as a returning user, match with others through two
									matching features: one for those seeking friendship and another for those looking for a romantic partner, and initiate chats with others.
								</p>
								<p className="text-lg roboto font-mono">We began by identifying our high-level goals for the tests, which can be summarized as follows:</p>
								<ol className="flex flex-col gap-2 text-lg roboto font-mono list-decimal list-inside pl-4">
									<li className="pl-4">Assess how well the UI design communicates the app's functionalities.</li>
									<li className="pl-4">Evaluate the prototype's performance.</li>
									<li className="pl-4">Determine whether users can successfully complete the assigned tasks.</li>
									<li className="pl-4">Identify any design flaws or systematic loopholes that were not accounted for during the design process.</li>
								</ol>
								<div className="flex flex-col gap-4">
									<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Methods</h3>
									<div className="flex flex-col gap-4">
										<p className="text-lg roboto font-mono">
											To refine our app, we used two data collection methods. The primary method involved usability testing with 10 participants who met the following criteria: undergraduate students
											at the university of Toronto (UofT), aged 18-24. The second method consisted of direct questions that were asked to tested participants after completing the test regarding their
											experience, including any confusing elements and their opinions on specific features.
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Testing Process</h3>
									<div className="flex flex-col gap-4">
										<p className="text-lg roboto font-mono">
											The standardized user tests followed a structured format. First, participants were informed about the platform’s background, purpose, and functionalities. Then participants were
											prompted with the following task statements:
										</p>
									</div>
									<ol className="flex flex-col gap-2 text-lg roboto font-mono list-decimal list-inside pl-4">
										<li className="pl-4">Sign up into the application by entering your UofT credentials and answering a few questions.</li>
										<li className="pl-4">Sign in into the app and find a potential match through the romantic matching feature and send them a matching request!</li>
										<li className="pl-4">Pick a match through the friendship matching feature and initiate a chat.</li>
									</ol>
								</div>
								<div className="flex flex-col gap-4">
									<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">The Sequence of Activity</h3>
									<div className="flex flex-col gap-4">
										<p className="text-lg roboto font-mono">Listed is the tasks' activity sequences:</p>
									</div>
									<ul className="text-lg roboto font-mono list-disc pl-8">
										<li>
											<strong>Task 1: Sign Up (Create an Account)</strong>
											<ul className="list-[circle] pl-6">
												<li>Interaction: At the start choose correct option between LogIn and Sign In</li>
												<li>Interaction: Pick your interests</li>
												<li>Interaction: Fill necessary questions</li>
											</ul>
										</li>

										<li>
											<strong>Task 2: Match with potential partner!</strong>
											<ul className="list-[circle] pl-6">
												<li>Interaction: After signing in, from main menu chose the type of matching you want</li>
												<li>Interaction: Press “X” button to skip delist the person from your algorithm</li>
												<li>Interaction: Press “heart button” to propose match</li>
											</ul>
										</li>

										<li>
											<strong>Task 3: Initiate a chat</strong>
											<ul className="list-[circle] pl-6">
												<li>Interaction: After matching with a person, from bottom navigation menu, press chat button</li>
												<li>Interaction: From chatting section select your match’s chat</li>
												<li>Interaction: Chat with the person</li>
											</ul>
										</li>
									</ul>
								</div>
								<div className="flex flex-col gap-4">
									<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Test Results</h3>
									<div className="flex flex-col gap-4">
										<p className="text-lg roboto font-mono">
											User feedback on the app highlighted both positive and negative aspects of the design and functionality. Many users praised the clear navigation, particularly the chat and match
											features, which they found intuitive due to its resemblance to popular social media interfaces. In addition, the flexibility in sign-up and allowing users to skip certain
											questions, was another well-received aspect, as it let them complete the process at their own pace. Additionally, the ability to choose between romantic or friend matches was
											seen as a valuable option, catering to different social needs. However, some areas required improvement, particularly in clarifying what happens after proposing a match. Many
											users were unsure of the next steps, leading to confusion about the matching process. Privacy concerns also emerged, with some users hesitant about sharing personal details like
											their date of birth without clear explanations on how their data would be used. Furthermore, users wanted more flexibility in skipping matches rather than being forced to accept
											or deny, and they suggested additional chat features like read receipts or typing indicators to improve communication.
										</p>
										<p className="text-lg roboto font-mono">
											While most users completed tasks successfully, testing revealed several UI issues that impacted usability. The registration section posed difficulties when users attempted to
											input information into unsupported fields, signalling a need for more robust form validation. The matching system also felt unnatural due to the prototype’s lack of a functioning
											recommendation algorithm, causing repeated appearances of the same two users. Addressing this issue requires enhancing the prototype’s fidelity and implementing back-end features
											using the Python Django library to manage data more effectively. A web-based front-end built with React, HTML, CSS, and JavaScript would further refine the interface.
											Additionally, button responsiveness was another concern—hovering functions in Adobe XD introduced delays, making interactions feel sluggish. A short-term fix involves removing
											the hover effect from menus, while a long-term solution would involve recreating UI elements in Java for an executable file or fully transitioning the design to a web-based
											framework like React. By making these adjustments, the app can offer a smoother, more intuitive experience for users.
										</p>
									</div>
								</div>
							</div>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Final Design</h2>
							<a
								href="https://xd.adobe.com/view/39ef1ea5-a52b-49cf-8a4b-35befa622f20-6cbc/?fullscreen&hints=off.com/file/d/1xden8ZXNIk3xrNCfQmPKFG7v_KbJXeLg/view?usp=sharing"
								target="_blank"
								className="text-blue-500 hover:underline"
							>
								https://xd.adobe.com/view/39ef1ea5-a52b-49cf-8a4b-35befa622f20-6cbc/?fullscreen&hints=off{" "}
							</a>
							<img src={finaldesign} className="w-full object-cover object-center border border-foreground rounded-xl" />
							<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Final Usability Test</h3>
							<div className="flex flex-col gap-2">
								<p className="text-lg roboto font-mono font-bold">Participants</p>
								<p className="text-lg roboto font-mono">
									The usability test conducted consisted of ten participants, all current students at UTM. They were selected through random sampling. The participants varied in academic year, major,
									and gender, representing a mix of first, third, and fourth-year students from fields such as Biology, Psychology, Computer Science, Physics, Professional Writing and Communication,
									and Communication, Culture, and Information Technology. Some participants were highly engaged in campus life, while others found UTM’s commuter nature a challenge for meeting new
									people. Their differing perspectives provided valuable insight into student social dynamics and dating experiences, making them relevant within the target user population.
								</p>
							</div>
							<div className="flex flex-col gap-2">
								<p className="text-lg roboto font-mono font-bold">Process</p>
								<p className="text-lg roboto font-mono">
									The usability testing was conducted both in person and remotely over Zoom, depending on the availability of participants. Users were given access to the prototype on Adobe XD and
									were asked to complete a set of usability tasks such as signing up/signing in with their UofT credentials, answering onboarding questions, finding a potential match through the
									romantic/friendship matching feature, sending a matching request, and initiating a chat. Detailed notes were taken during testing to identify common patterns in user behaviours, task
									success rates, and points of frustration. These notes were later analyzed to identify common recurring usability errors and patterns in user interactions. Participants also answered
									post-test questionnaires and interview questions to provide feedback on their overall experience with the app interface and design.
								</p>
							</div>
							<div className="flex flex-col gap-2">
								<p className="text-lg roboto font-mono font-bold">Results</p>
								<p className="text-lg roboto font-mono">
									There were no failed test cases in our results. All participants successfully completed and understood the tasks given to them. We believe that the user test provided a valuable
									opportunity to assess how familiar users found the UI based on their own experiences and how well they recognized concepts such as the matching page, chatting page, account creation
									pages, and main menu. Their insights showed that they were familiar with the concepts we introduced. However, regarding functionality, they generally expressed that the prototype
									still has room for improvement.
								</p>
								<p className="text-lg roboto font-mono">
									This feedback primarily relates to the effectiveness of navigation buttons and the functionality of social features such as matching and chatting in their current form. Overall,
									users responded positively to the concepts and felt that the prototype laid a solid foundation. However, their expectation is to see a more fully developed version. For future
									prototypes, in order to meet this requirement, we may consider transitioning our prototype to a real iOS development environment using Swift for a smoother UI interaction, along with
									a Django backend to implement a small working version of a hypothetical matching algorithm populated with pre-designed matches.
								</p>
							</div>
						</div>
					</TextFade>
					<TextFade onetime={true}>
						<div className="flex flex-col w-full gap-8 roboto">
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Takeaways</h2>
							<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Keyfindings</h3>
							<div className="flex flex-col gap-2">
								<p className="text-lg roboto font-mono font-bold">Data Security and Privacy</p>
								<p className="text-lg roboto font-mono">
									Even though we considered these concerns during the initial ideation phase, the final usability task revealed that users still showed occasional uncertainty when shaping their
									profiles. The core issue seems to stem from how personal information is used to generate algorithmic recommendations. Some users expressed discomfort, noting that they typically do
									not share such information on social media, as it provides them with a sense of privacy. For example, this hesitation became evident when users were asked to select their hobbies
									during profile creation. To address this issue, we may either need to revise our matching approach to rely less on personal data while still connecting users with similar interests,
									or shift our focus toward a user group that is more comfortable with sharing personal information.
								</p>
							</div>
							<div className="flex flex-col gap-2">
								<p className="text-lg roboto font-mono font-bold">Matching</p>
								<p className="text-lg roboto font-mono">
									In our prototype’s matching page, we did not achieve the level of interactivity we expected from users. The page failed to effectively communicate that it was scrollable, which would
									have revealed additional information about the person. As a result, users only saw limited details—such as a photo, name, age, and major—which led some to express a desire for more
									information. We realized that relying on internal scrollability for revealing additional details is not effective from a UX perspective. For future prototypes, we plan to display
									more information directly on the matching page. For example, hobbies and shared majors could be highlighted using red and green accents over the match’s photo to indicate
									compatibility. To implement this feature, however, we would need to hypothetically collect more data from users in order to display relevant interests and attributes about potential
									matches.
								</p>
							</div>
							<div className="flex flex-col gap-2">
								<p className="text-lg roboto font-mono font-bold">UI</p>
								<p className="text-lg roboto font-mono">
									Most of our users expressed discomfort when using the UI, particularly when clicking navigation buttons that did not respond immediately. This issue occurred because, while designing
									components in Adobe XD, we found that creating a component with multiple functions, such as clicking and hovering, caused them to not work smoothly together. As a short-term solution
									for future prototypes, we can remove the hovering functionality to make the navigation more responsive. However, this approach may limit the visual aesthetic appeal of the buttons.
									For a long-term solution, we plan to transition the front-end development to a coding framework such as Swift or React Native. This would give us full control over the design of
									elements and their interactive functionality, allowing us to create a more satisfying and interactive UI.
								</p>
							</div>
							<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Next Steps</h3>
							<div className="flex flex-col gap-4">
								<p className="text-lg roboto font-mono">
									While our prototype has successfully addressed some key needs of UTM students seeking connections, there is still room for improvement and further development. First, technical
									enhancements are necessary. Our usability testing revealed limitations in the prototype’s algorithm and a sophisticated matching algorithm system should be developed through more
									advanced technology tools. Some have reflected delays during the matching process, showing the need to transit a fully functional web-based framework utilizing codes to resolve the
									problems.
								</p>
								<p className="text-lg roboto font-mono">
									Additionally, more adjustments in enhancing the interference and communication features are critical to improving the overall performance, such as the addition of the “scheduled
									campus meetup” feature with location suggestions. User testing has also found several limitations that may impact the overall results and understanding of the user’s needs. To fit
									and improve different user satisfaction, further research must be conducted and future testing should include participants from a wider range of age groups and cultural backgrounds.
									Besides, collaboration with UofT is also essential to achieve more success and attract more potential users. This includes collaborating with UofT IT services to implement an
									authentication and email verification system, plus getting approval from UTM administration for an officially approved platform. In terms of the design refinements, it is vital to
									develop more comprehensive design specifications including interaction functions and UI components, and the creation of complete brand guidelines to maintain consistency with the
									design, fostering a more cohesive and professional user experience.
								</p>
							</div>
						</div>
					</TextFade>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default memo(UniLink);
