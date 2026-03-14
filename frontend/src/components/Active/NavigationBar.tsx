import { Link } from "react-router-dom";

function NavigationBar({ className }: { className?: string }) {
	return (
		<header className={`top-0 flex flex-row w-full justify-between items-center px-8 bg-foreground lg:w-[57em] ${className}`}>
			<Link to="/">
				<span className="text-background border-b border-current selection:bg-[#330e00] selection:text-[#f54100] selection:font-bold">Eren Gulenoglu</span>
			</Link>

			<div className="flex flex-row gap-4">
				<Link to="/portfolio">
					<span className="text-background border-b border-current selection:bg-[#330e00] selection:text-[#f54100] selection:font-bold">Portfolio</span>
				</Link>
			</div>

			<span className="text-muted text-md my-3 selection:bg-[#330e00] selection:text-[#f54100]">Toronto, CA</span>
		</header>
	);
}
export default NavigationBar;
