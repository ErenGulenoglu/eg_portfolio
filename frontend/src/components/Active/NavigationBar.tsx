function NavigationBar({ className }: { className?: string }) {
	return (
		<header className={`sticky top-0 flex flex-row w-full justify-between items-center px-8 bg-foreground lg:w-[57em] ${className}`}>
			<span className="text-background text-md my-3 selection:bg-[#330e00] selection:text-[#f54100]">Eren Gulenoglu</span>
			<span className="text-muted text-md my-3 selection:bg-[#330e00] selection:text-[#f54100]">Toronto, CA</span>
		</header>
	);
}
export default NavigationBar;
