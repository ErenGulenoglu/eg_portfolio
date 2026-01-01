import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

function NavigationBarMobile() {
	return (
		<div className="sticky top-0 flex w-full items-center py-6  border-b border-foreground bg-background">
			<NavigationMenu className="flex items-center justify-center w-full">
				<NavigationMenuList className="flex items-center w-full">
					<div className="flex pl-[8vw]">
						<NavigationMenuItem>
							<Link to="/" className="text-2xl font-bold text-[#7469B6]">
								Eren Gulenoglu
							</Link>
						</NavigationMenuItem>
					</div>
					<div className="flex pl-[30vw]">
						<NavigationMenuItem>
							<Sheet>
								<SheetTrigger asChild>
									<Button variant="outline">
										<Menu size={28} className="cursor-pointer" />
									</Button>
								</SheetTrigger>
								<SheetContent side="right">
									<SheetHeader>
										<SheetTitle></SheetTitle>
									</SheetHeader>
									<div className="grid flex-1 auto-rows-min gap-6 px-4">
										<div className="grid gap-3">
											<Link to="/">
												<Button variant="outline" className="w-full">
													About
												</Button>
											</Link>
										</div>
										<div className="grid gap-3">
											<Link to="/portfolio">
												<Button variant="outline" className="w-full">
													Design Portfolio
												</Button>
											</Link>
										</div>
										<div className="grid gap-3">
											<a href="https://drive.google.com/file/d/1nEDnslfksm6TJUyYXQQ62aJjkx8M8U4x/view" target="_blank" rel="noopener noreferrer" className="underline">
												<Button className="w-full cursor-pointer" variant="outline">
													Resume
												</Button>
											</a>
										</div>
										<div className="grid gap-3">
											<a
												href="https://www.linkedin.com/in/eren-gulenoglu-95690627b/"
												target="_blank"
												rel="noopener noreferrer"
												className="w-full flex items-center text-blue-500 transition-colors hover:text-[#7469B6]"
											>
												<Button className="w-full cursor-pointer" variant="outline">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 850" className="w-6 h-6 fill-current">
														<path d="M165 90q0 35-21 59t-62 24q-37 0-59-24T0 95q0-35 23-61T83 8t60 24t22 58M0 750h165V214H0zm560-528q-32 0-57 8t-45 21t-33 27t-21 27h-4l-9-70H243q0 34 2 74t2 86v355h165V457q0-12 1-22t3-19q4-11 11-23t16-21t22-16t29-6q44 0 64 32t19 83v285h165V445q0-57-14-99t-38-70t-58-41t-72-13" />
													</svg>
												</Button>
											</a>
										</div>
									</div>
								</SheetContent>
							</Sheet>
						</NavigationMenuItem>
					</div>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

export default NavigationBarMobile;
