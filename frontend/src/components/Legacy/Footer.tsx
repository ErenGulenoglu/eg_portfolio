import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="flex w-full justify-center items-center bg-background">
			<p className="w-[75%] text-sm text-center py-8">
				Built by{" "}
				<Link className="font-bold underline" to="https://www.linkedin.com/in/eren-gulenoglu-95690627b/">
					Eren Gulenoglu
				</Link>
				. My website uses React components and styling sourced from{" "}
				<Link className="font-bold underline" to="https://ui.shadcn.com/">
					shadcn/ui
				</Link>
				. © COPYRIGHT 2026. ALL RIGHTS RESERVED.
			</p>
		</div>
	);
}

export default Footer;
