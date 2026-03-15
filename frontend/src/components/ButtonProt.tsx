import { Link } from "react-router-dom";

type ButtonProtProps = {
	extension: string;
	buttonText?: string;
	className?: string;
	target?: string;
};

function ButtonProt({ extension, buttonText, className, target }: ButtonProtProps) {
	return (
		<Link to={extension} className={`flex bg-foreground text-white cursor-pointer text-center items-center justify-center rounded-sm ${className ?? "w-28 h-10"}`} target={target}>
			<span>{buttonText ?? "View Project"}</span>
		</Link>
	);
}

export default ButtonProt;
