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
									<a href="https://drive.google.com/file/d/1nEDnslfksm6TJUyYXQQ62aJjkx8M8U4x/view" target="_blank" rel="noopener noreferrer" className="">
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
									href="https://www.linkedin.com/in/eren-gulenoglu-95690627b/"
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
						<div className="flex justify-center">
							<NavigationMenuItem>
								<a href="https://github.com/ErenGulenoglu" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground transition-colors hover:text-[#7469B6]">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
										<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
									</svg>
								</a>
							</NavigationMenuItem>
						</div>
					</div>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

export default NavigationBar;
