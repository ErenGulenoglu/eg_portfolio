import { memo, useEffect } from "react";

import NavigationBar from "../../components/Active/NavigationBar";
import About from "../../components/Active/About";

function Home() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - Home";
	});
	return (
		<div>
			<div className="w-full flex justify-center items-center">
				<main className="flex flex-col justify-center items-center w-full lg:w-[60em]">
					<NavigationBar className="mb-8" />
					<div className="w-full justify-start items-start">
						<About />
					</div>
				</main>
			</div>
			{/* 
				<ErenIntro />
				<div className="flex flex-col w-[80vw] justify-start items-center mb-8">
					<h1 className="text-3xl w-full roboto font-bold mb-8 border-b-2 border-foreground text-[#7469B6]">Featured Works</h1>
					<div className="flex w-full flex-col justify-center items-center gap-4 my-12 lg:flex-row">
						<ProjectIntro image={work1} title="UTM Connect" description="High Fidelity UI/UX Design Case Study" color="#FEEAC9" rotate={-rotateAmount} link="/utm-connect-ux" />
						<ProjectIntro
							image={work2}
							title="Improving Transparency in the Mississauga Library Makerspace"
							description="UX Research Case Study"
							color="#9ECAD6"
							rotate={0}
							link="/hazel-mccallion-ux"
							className="z-1"
						/>
						<ProjectIntro image={work3} title="UniLink" description="Mid Fidelity UI/UX Design Project" color="#FFD1DC" rotate={rotateAmount} link="/unilink-ux" />
					</div>
				</div>
			</main> */}
		</div>
	);
}

export default memo(Home);
