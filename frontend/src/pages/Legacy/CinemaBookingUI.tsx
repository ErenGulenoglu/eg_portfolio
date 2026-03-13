import NavigationBar from "../../components/Legacy/NavigationBar";
import NavigationBarMobile from "../../components/Legacy/NavigationBarMobile";
import Footer from "../../components/Legacy/Footer";

import TextFade from "../../components/animations/TextFade";
import work4 from "../../assets/CinemaBookingUI/cinemabooking.png";

import { Link } from "react-router-dom";

function CinemaBookingUI() {
	return (
		<div>
			<div className="sticky top-0 w-full hidden md:block z-50">
				<NavigationBar />
			</div>
			<div className="sticky top-0 w-full block md:hidden z-50">
				<NavigationBarMobile />
			</div>
			<main className="flex flex-col justify-center items-center w-full">
				<div className="flex flex-col w-[80vw] justify-center my-16 gap-8 lg:w-[65vw]">
					<TextFade onetime={true}>
						<h1 className="w-fit text-5xl roboto font-light bg-[#7469B6] p-1 rounded-xs">Cinema Booking UI</h1>
					</TextFade>
					<div className="flex flex-col w-full gap-4 items-start lg:gap-16 lg:flex-row">
						<div className="flex flex-col w-full gap-6 lg:w-1/2">
							<TextFade onetime={true}>
								<p className="text-lg roboto font-mono">
									I created this project by following tutorials to strengthen my skills in Figma’s design tools. Through this process, I learned how to create and apply linear gradients, effectively
									use frames and groups to improve spacing and layout, design original shapes using the Bend tool, and integrate plugins and design kits into my workflow.
								</p>
							</TextFade>
							<TextFade onetime={true}>
								<Link to="https://www.figma.com/design/CRpyDi99kyQcW7WqSDmKXy/Cinema-Booking-App?node-id=0-1&t=6kpPb9y8G3bODYsZ-1" target="_blank">
									<button className="w-[10em] h-[3em] text-black text-lg font-semibold border border-black cursor-pointer rounded-4xl bg-white duration-320 hover:bg-[#8CA9FF] hover:text-white">
										View Protype
									</button>
								</Link>
							</TextFade>
						</div>
					</div>
					<div className="flex flex-col w-full gap-8 roboto">
						<TextFade onetime={true}>
							<h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">Preview</h2>
						</TextFade>
						<img src={work4} className="w-full object-cover object-center border border-foreground rounded-xl" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default CinemaBookingUI;
