import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UTMConnect from "./pages/UTMConnect";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

import { ThemeProvider } from "./components/theme-provider";

function App() {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/utm-connect" element={<UTMConnect />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
