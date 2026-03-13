import { memo, useEffect } from "react";

import NavigationBar from "../../components/Active/NavigationBar";
import About from "../../components/Active/About";
import AboutMobile from "../../components/Active/AboutMobile";
import Projects from "../../components/Active/Projects";
import { P } from "node_modules/framer-motion/dist/types.d-DagZKalS";

function Home() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - Home";
	});
	return (
		<div>
			<div className="w-full flex justify-center items-center">
				<main className="flex flex-col justify-center items-center w-full lg:w-[60em]">
					<NavigationBar className="mb-8" />
					<div className="w-full hidden md:block">
						<About />
					</div>
					<div className="w-full md:hidden">
						<AboutMobile />
					</div>
					<div className="w-full">
						<Projects />
					</div>
				</main>
			</div>
		</div>
	);
}

export default memo(Home);
