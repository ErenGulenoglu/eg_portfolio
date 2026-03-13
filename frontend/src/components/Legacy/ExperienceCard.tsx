import { memo } from "react";

function ExperienceCard({ date, heading, description, color }: { date: string; heading: string; description: string[]; color: string }) {
	return (
		<div
			className="flex flex-col w-full text-center justify-center items-center border border-black rounded-2xl gap-4 text-black transition-all duration-300 ease-out
  hover:-translate-y-2 hover:scale-105
  hover:shadow-xl lg:w-[48em]"
			style={{ backgroundColor: color }}
		>
			<div className="flex flex-col w-[95%] text-left justify-center items-start px-2 lg:px-0">
				<div className="flex flex-col border-b border-black w-full gap-2 py-4">
					<h3 className="text-xl">{date}</h3>
					<h2 className="text-2xl">{heading}</h2>
				</div>
			</div>
			<ul className="flex flex-col gap-2 text-left justify-center items-start w-[95%] px-4 pb-4">
				{description.map((item, index) => (
					<li className="text-lg" key={index}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default memo(ExperienceCard);
