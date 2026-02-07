import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="flex w-full h-[10vh] justify-center items-center bg-muted border-t border-foreground">
			<p className="w-[75%] text-sm text-center">
				Built by{" "}
				<Link className="font-bold underline" to="https://www.linkedin.com/in/eren-gulenoglu-95690627b/">
					Eren Gulenoglu
				</Link>
				. My website uses React components and styling sourced from{" "}
				<Link className="font-bold underline" to="https://ui.shadcn.com/">
					shadcn/ui
				</Link>
				. © COPYRIGHT 2025
			</p>
		</div>
	);
}

export default Footer;
