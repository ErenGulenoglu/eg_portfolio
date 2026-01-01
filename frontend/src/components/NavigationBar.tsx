import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "../components/ui/navigation-menu";
import { Link } from "react-router-dom";

function NavigationBar() {
	return (
		<div className="sticky top-0 flex w-full h-[10vh] justify-center items-center bg-background/75 backdrop-blur-sm">
			<NavigationMenu>
				<NavigationMenuList className="grid grid-cols-3 items-center justify-center w-full gap-14 roboto">
					{/* Left */}
					<div className="inline-flex justify-end items-center gap-8">
						<div className="flex justify-center">
							<NavigationMenuItem>
								<NavigationMenuLink asChild className="text-md">
									<a href="../../public/Eren_Gulenoglu_CV.pdf" target="_blank" rel="noopener noreferrer" className="">
										Resume
									</a>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</div>
						<div className="flex justify-center">
							<NavigationMenuLink asChild className="relative text-md group">
								<Link to="/portfolio">Portfolio</Link>
							</NavigationMenuLink>
						</div>
					</div>
					{/* Center (perfectly centered trademark/logo) */}
					<div className="flex justify-center">
						<NavigationMenuItem>
							<Link to="/">
								<h3 className="text-2xl roboto font-bold text-[#7469B6] whitespace-nowrap">Eren Gulenoglu</h3>
							</Link>
						</NavigationMenuItem>
					</div>
					{/* Right */}
					<div className="inline-flex justify-start items-center gap-8">
						<div className="flex justify-center">
							<NavigationMenuItem>
								<NavigationMenuLink asChild className="text-md">
									<Link to="/about">About</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</div>
						<div className="flex justify-center">
							<NavigationMenuItem>
								<a
									href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-blue-500 transition-colors hover:text-[#7469B6]"
								>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 850" className="w-6 h-6 fill-current">
										<path d="M165 90q0 35-21 59t-62 24q-37 0-59-24T0 95q0-35 23-61T83 8t60 24t22 58M0 750h165V214H0zm560-528q-32 0-57 8t-45 21t-33 27t-21 27h-4l-9-70H243q0 34 2 74t2 86v355h165V457q0-12 1-22t3-19q4-11 11-23t16-21t22-16t29-6q44 0 64 32t19 83v285h165V445q0-57-14-99t-38-70t-58-41t-72-13" />
									</svg>
								</a>
							</NavigationMenuItem>
						</div>
					</div>
				</NavigationMenuList>
			</NavigationMenu>
			{/* <NavigationMenu>
				<NavigationMenuList className="flex w-full justify-between gap-12 lg:gap-20 roboto">
					<NavigationMenuItem>
						<Link to="/" className="text-2xl roboto font-bold ml-16 text-[#7469B6]">
							Eren Gulenoglu
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuLink asChild className="text-md underline">
							<Link to="/about">About</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuLink asChild className="text-md underline">
							<Link to="/portfolio">Design Portfolio</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuLink asChild className="text-md underline">
							<a href="../../public/Eren_Gulenoglu_CV.pdf" target="_blank" rel="noopener noreferrer" className="underline">
								Resume
							</a>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<a href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 transition-colors hover:text-[#7469B6]">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 850" className="w-6 h-6 fill-current">
								<path d="M165 90q0 35-21 59t-62 24q-37 0-59-24T0 95q0-35 23-61T83 8t60 24t22 58M0 750h165V214H0zm560-528q-32 0-57 8t-45 21t-33 27t-21 27h-4l-9-70H243q0 34 2 74t2 86v355h165V457q0-12 1-22t3-19q4-11 11-23t16-21t22-16t29-6q44 0 64 32t19 83v285h165V445q0-57-14-99t-38-70t-58-41t-72-13" />
							</svg>
						</a>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu> */}
		</div>
	);
}

export default NavigationBar;
