import { memo, useEffect } from "react";

import NavigationBar from "../../components/Active/NavigationBar";
import AllProjects from "../../components/Active/AllProjects";

function UTMConnect() {
	useEffect(() => {
		document.title = "Eren Gulenoglu - Portfolio";
	});
	return (
		<div>
			<div className="w-full flex justify-center items-center">
				<main className="flex flex-col justify-center items-center w-full lg:w-[60em]">
					<NavigationBar className="mb-8" />
					<div className="flex flex-col w-full justify-center items-start">
						<AllProjects />
					</div>
				</main>
			</div>
		</div>
	);
}

export default memo(UTMConnect);
