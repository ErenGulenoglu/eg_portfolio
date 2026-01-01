import linkedin from "../assets/linkedin.png";
import { TypingEffect } from "./animations/typing-effect";
import TextFade from "./animations/TextFade";

import { memo } from "react";

function ErenIntro() {
	return (
		<div className="flex flex-col justify-center items-center w-[80vw] py-[5vh] gap-[5vw] mt-8 lg:flex-row lg:items-stretch">
			<div className="flex w-full justify-center items-center lg:w-1/2">
				<img src={linkedin} alt="Eren Gulenoglu" className="w-3/5 aspect-square rounded-full object-cover border border-foreground lg:w-1/2" />
			</div>
			<div className="flex flex-col w-full border-t-2 border-foreground justify-start items-start py-[2vh] lg:w-1/2">
				<h1 className="text-4xl roboto font-medium text-[#7469B6]">
					<TypingEffect text="Eren Gulenoglu" />
				</h1>
				<TextFade onetime={true}>
					<p className="text-2xl roboto font-mono text-[#7469B6]">UI/UX Designer & Frontend Developer</p>
					<p className="text-md roboto font-mono mt-4">
						Hello! I'm Eren Gulenoglu, a passionate UI/UX designer and frontend developer dedicated to crafting engaging and user-friendly digital experiences. With a keen eye for design and a strong
						foundation in frontend technologies, I strive to bridge the gap between aesthetics and functionality.
					</p>
					<p className="text-md roboto font-mono mt-4">
						My journey in design and development has equipped me with the skills to create intuitive interfaces that not only look great but also provide seamless user experiences. I believe that good
						design is not just about how things look, but also about how they work.
					</p>
					<p className="text-md roboto font-mono mt-4">
						Feel free to explore my portfolio to see some of the projects I've worked on, and don't hesitate to reach out if you'd like to collaborate or learn more about my work!
					</p>
					<button className="w-[9em] h-[2.5em] mt-4 text-black text-lg font-semibold border border-black cursor-pointer rounded-3xl bg-white duration-320 hover:bg-[#8CA9FF] hover:text-white">
						See My Portfolio
					</button>
				</TextFade>
			</div>
		</div>
	);
}

export default memo(ErenIntro);
