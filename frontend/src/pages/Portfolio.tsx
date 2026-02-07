import { memo, useEffect } from "react";

import NavigationBar from "@/components/NavigationBar";
import NavigationBarMobile from "@/components/NavigationBarMobile";
import Footer from "@/components/Footer";
import ProjectIntro from "@/components/ProjectIntro";
import work1 from "../assets/CCT305/Utm305.png";
import work2 from "../assets/CCT477/Utm477.jpg";
import work3 from "../assets/CCT434/unilinkpreview.png";

import TextFade from "../components/animations/TextFade";

function Portfolio() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - Portfolio";
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
				<div className="flex flex-col w-[90vw] justify-center items-start my-8 lg:w-[80vw]">
					<TextFade onetime={true}>
						<h2 className="w-fit text-4xl roboto font-light bg-[#7469B6] p-1 rounded-xs mb-8">UI/UX Projects</h2>
					</TextFade>
					<div className="flex flex-col w-full justify-center items-center gap-16 lg:w-[80vw] lg:flex-row">
						<ProjectIntro image={work1} title="UTM Connect" description="High Fidelity UX/UI Design Case Study" color="#FEEAC9" rotate={0} link="/utm-connect-ux" />
						<ProjectIntro
							image={work2}
							title="Improving Transparency in the Mississauga Library Makerspace"
							description="UX Research Case Study"
							color="#9ECAD6"
							rotate={0}
							link="/hazel-mccallion-ux"
						/>
						<ProjectIntro image={work3} title="UniLink" description="Mid Fidelidy UI/UX Design Project" color="#FFD1DC" rotate={0} link="/unilink-ux" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default memo(Portfolio);
