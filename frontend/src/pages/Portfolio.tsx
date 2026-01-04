import { memo, useEffect } from "react";

import NavigationBar from "@/components/NavigationBar";
import NavigationBarMobile from "@/components/NavigationBarMobile";
import Footer from "@/components/Footer";
import ProjectIntro from "@/components/ProjectIntro";
import work1 from "../assets/CCT305/Utm305.png";
import work2 from "../assets/CCT477/Utm477.jpg";

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
				<div className="flex flex-col w-[90vw] justify-start items-center my-8 gap-16 lg:w-[80vw] lg:flex-row">
					<ProjectIntro image={work1} title="UTM Connect" description="High Fidelity UX Case Study" color="#FEEAC9" rotate={0} link="/utm-connect" />
					<ProjectIntro image={work2} title="Improving Transparency in the Mississauga Library Makerspace" description="UX Research Case Study" color="#9ECAD6" rotate={0} link="/hazel-mccallion-ux" />
					<p className="text-xl roboto">Under construction.</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default memo(Portfolio);
