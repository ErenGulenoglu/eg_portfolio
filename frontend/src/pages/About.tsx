import NavigationBar from "@/components/NavigationBar";
import NavigationBarMobile from "@/components/NavigationBarMobile";
import Footer from "@/components/Footer";

import TextFade from "../components/animations/TextFade";

import ExperienceCard from "../components/ExperienceCard";
import ExperienceCardAlternative from "../components/ExperienceCardAlternative";

import { memo, useEffect } from "react";

function About() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - About";
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
				<div className="flex flex-col w-[90vw] justify-center my-16 gap-8 lg:w-[65vw]">
					<TextFade onetime={true}>
						<div className="flex flex-col w-[80vw] justify-center gap-8 lg:w-[65vw]">
							<h1 className="w-fit text-5xl roboto font-bold bg-[#7469B6] p-1 rounded-xs">Resume</h1>
							<p className="text-lg roboto font-mono">I am a designer with experience in UX/UI design and research, data analysis, media communication, and web design.</p>
						</div>
					</TextFade>

					<div className="flex flex-col w-full gap-8 roboto">
						<div className="flex flex-col gap-4">
							<TextFade onetime={true}>
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Experience</h3>
							</TextFade>
							<div className="flex flex-col justify-center items-center w-full gap-8">
								<TextFade onetime={true}>
									<ExperienceCard
										date="June 2024 - Present"
										heading="SAM Lab Research Assistant, Department of Psychology, University of Toronto"
										description={[
											"Conducted comprehensive literature reviews to support ongoing research projects.",
											"Programmed and administered experimental studies using research software.",
											"Managed data collection, cleaning, and analysis using R.",
											"Presented study methodologies and findings during weekly lab meetings.",
											"Coded and organized qualitative data from participants for thematic analysis.",
										]}
										color="#AAC4F5"
									/>
								</TextFade>
								<TextFade onetime={true}>
									<ExperienceCard
										date="September 2024 – April 2025"
										heading="Marketing Coordinator, UTM Turkish Students’ Association (TSA)"
										description={[
											"Seeks opportunities to enhance the general awareness and social media presence of the TSA.",
											"Worked closely with the VPE and DOC for guidance and implementation of prospective events or partnerships.",
											"Helped the club reach its target audience and expand its presence.",
										]}
										color="#DA6C6C"
									/>
								</TextFade>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<TextFade onetime={true}>
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Volunteer</h3>
							</TextFade>
							<div className="flex flex-col justify-center items-center w-full gap-8">
								<TextFade onetime={true}>
									<ExperienceCard
										date="August 2023 – September 2024"
										heading="University of Toronto – Health & Counselling Centre – Wellness Ambassador"
										description={[
											"Facilitated workshops and staffed campus events promoting self-care and student wellness.",
											"Developed and distributed health education materials and resources.",
											"Supported health promotion campaigns through event coordination and outreach.",
											"Collected and reported data to evaluate the effectiveness of wellness programs.",
											"Acted as a liaison with campus/community partners and referred students to relevant support services.",
										]}
										color="#B0DB9C"
									/>
								</TextFade>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<TextFade onetime={true}>
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Education</h3>
							</TextFade>
							<div className="flex flex-col justify-center items-center w-full gap-8">
								<TextFade onetime={true}>
									<ExperienceCardAlternative
										date="September 2022 - Present"
										heading="Bachelor of Arts in Communication, Culture, Information & Technology (CCIT), University of Toronto"
										description=""
										color="#AAC4F5"
									/>
								</TextFade>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<TextFade onetime={true}>
								<h3 className="text-2xl bg-[#4FB6A4] p-1 w-fit rounded-xs">Skills</h3>
							</TextFade>
							<div className="flex flex-col justify-center items-center w-full gap-8">
								<TextFade onetime={true}>
									<ExperienceCard
										date="Technical"
										heading="UX/UI Design & Research"
										description={[
											"User Research: Contextual Inquiry, Participatory Design, Workflows, Conducting Interviews, Usability Testing, Persona Creating.",
											"UI Design: Figma, Adobe XD, Information Architecture, Wireframing, Prototyping, Interaction Design.",
										]}
										color="#DA6C6C"
									/>
								</TextFade>
							</div>
							<div className="flex flex-col justify-center items-center w-full gap-8">
								<TextFade onetime={true}>
									<ExperienceCard
										date="Technical"
										heading="Media & Editing"
										description={[
											"Photography, Videography, DLSR Knowledge, Video Editing, Adobe Creative Suite (Photoshop, After Effects, Audition, Premiere Pro), Audacity.",
											"Canva, Adobe Express, Indesign.",
										]}
										color="#B0DB9C"
									/>
								</TextFade>
							</div>
							<div className="flex flex-col justify-center items-center w-full gap-8">
								<TextFade onetime={true}>
									<ExperienceCard
										date="Technical"
										heading="Webdesign"
										description={["HTML, TailwindCSS, Javascript.", "Frontend: React Vite, Typescript.", "Backend: Django (Python)."]}
										color="#AAC4F5"
									/>
								</TextFade>
							</div>
							<div className="flex flex-col justify-center items-center w-full gap-8">
								<TextFade onetime={true}>
									<ExperienceCardAlternative
										date="Technical"
										heading="Data Analysis"
										description={
											"I mainly use R and Python depending on the research. I use R to analyze detailed data stored in large Excel sheets, to clean, group, and process data easily. I use Python when additional layer such as using APIs to gather data, webscraping, and more involved in the research to analyze data. Here are some libraries for data analysis that I commonly used before: Beautiful Soup, requests, pandas, matplotlib."
										}
										color="#FACE68"
									/>
								</TextFade>
							</div>
							{/* <div className="flex flex-col justify-center items-center w-full gap-8">
								<TextFade onetime={true}>
									<ExperienceCardAlternative date="Soft Skills" heading="Strengths" description={""} color="#DA6C6C" />
								</TextFade>
							</div> */}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default memo(About);
