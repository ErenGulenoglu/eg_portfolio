import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UTMConnect from "./pages/UTMConnect";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import HML from "./pages/HML";

import { ThemeProvider } from "./components/theme-provider";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<HashRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/utm-connect-ux" element={<UTMConnect />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/hazel-mccallion-ux" element={<HML />} />
				</Routes>
			</HashRouter>
		</ThemeProvider>
	);
}

export default App;
