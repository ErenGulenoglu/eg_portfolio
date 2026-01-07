import NavigationBar from "@/components/NavigationBar";
import NavigationBarMobile from "@/components/NavigationBarMobile";
import Footer from "@/components/Footer";
import ErenIntro from "@/components/ErenIntro";
import ProjectIntro from "@/components/ProjectIntro";

import work1 from "../assets/CCT305/Utm305.png";
import work2 from "../assets/CCT477/Utm477.jpg";
// import work2 from "../assets/Utm477.jpg";
// import work3 from "../assets/Rosehammer.png";

import { memo, useEffect } from "react";

// kirmizi rengin okunurlugu iyi degil
function Home() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - Home";
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
				<ErenIntro />
				<div className="flex flex-col w-[80vw] justify-start items-center mb-8">
					<h1 className="text-3xl w-full roboto font-bold mb-8 border-b-2 border-foreground text-[#7469B6]">Featured Works</h1>
					<div className="flex w-full flex-col justify-center items-center gap-4 my-12 lg:flex-row">
						{/* <ProjectIntro image={work1} title="UTM Connect" description="High Fidelity UX Case Study" color="#FEEAC9" rotate={-10} link="/utm-connect" />
						<ProjectIntro
							className="z-1"
							image={work2}
							title="Improving Transparency in Mississauga Library Makerspace"
							description="UX Design & Research Project"
							color="#FFA4A4"
							rotate={0}
							link="/library-makerspace"
						/>
						<ProjectIntro image={work3} title="Rosehammer Website" description="Webdesign Project - React & Django" color="#B7B1F2" rotate={10} link="/rosehammer-website" /> */}
						<ProjectIntro image={work1} title="UTM Connect" description="High Fidelity UX/UI Design Case Study" color="#FEEAC9" rotate={0} link="/utm-connect-ux" />
						<ProjectIntro
							image={work2}
							title="Improving Transparency in the Mississauga Library Makerspace"
							description="UX Research Case Study"
							color="#9ECAD6"
							rotate={0}
							link="/hazel-mccallion-ux"
						/>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default memo(Home);
