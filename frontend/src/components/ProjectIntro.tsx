import { memo, useState } from "react";
import { Link } from "react-router-dom";

function ProjectIntro({
	image,
	title,
	description,
	color,
	rotate,
	className,
	link,
}: {
	image: string;
	title: string;
	description: string;
	color: string;
	rotate: number;
	className?: string;
	link: string;
}) {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			className={`flex flex-col w-full text-center justify-center items-center border border-black rounded-lg gap-4 rotate-[${rotate}deg] lg:w-[24em] ${className}`}
			style={{
				backgroundColor: color,
				transform: isHovered ? `rotate(0deg)` : `rotate(${rotate}deg)`, // Apply rotation on hover
				transition: "transform 0.3s", // Smooth transition for rotation
			}}
			onMouseEnter={() => setIsHovered(true)} // Set hovered state to true
			onMouseLeave={() => setIsHovered(false)} // Set hovered state to false
		>
			<div className="w-[95%] h-[14em] rounded-sm overflow-hidden mt-4 border border-black">
				<img src={image} alt={title} className="w-full h-full object-cover object-center" />
			</div>
			<p className="text-2xl roboto font-medium text-black">{title}</p>
			<p className="text-xl roboto font-regular text-black">{description}</p>
			<Link to={link}>
				<button className="w-[8em] h-[2.5em] mb-4 text-black text-lg font-semibold border border-black cursor-pointer rounded-3xl bg-white duration-320 hover:bg-[#8CA9FF] hover:text-white">
					View Project
				</button>
			</Link>
		</div>
	);
}

export default memo(ProjectIntro);
