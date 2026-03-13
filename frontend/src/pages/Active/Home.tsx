import { memo, useEffect } from "react";

import NavigationBar from "../../components/Active/NavigationBar";
import About from "../../components/Active/About";
import Projects from "../../components/Active/Projects";
import Resources from "../../components/Active/Resources";

function Home() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - Home";
	});
	return (
		<div>
			<div className="w-full flex justify-center items-center">
				<main className="flex flex-col justify-center items-center w-full lg:w-[60em]">
					<NavigationBar className="mb-8" />
					<About />
					<Resources />
					<Projects />
				</main>
			</div>
		</div>
	);
}

export default memo(Home);
