import { HashRouter, Route, Routes } from "react-router-dom";

// Legacy pages
// import Home from "./pages/Legacy/Home";
// import UTMConnect from "./pages/Legacy/UTMConnect";
// import About from "./pages/Legacy/About";
// import Portfolio from "./pages/Legacy/Portfolio";
// import HML from "./pages/Legacy/HML";
// import UniLink from "./pages/Legacy/UniLink";
// import CinemaBookingUI from "./pages/Legacy/CinemaBookingUI";

// Active pages
import Home from "./pages/Active/Home";
import UTMConnect from "./pages/Active/UTMConnect";
import Portfolio from "./pages/Active/Portfolio";
import HML from "./pages/Active/HML";
import UniLink from "./pages/Active/UniLink";
import CinemaBookingUI from "./pages/Active/CinemaBookingUI";

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
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/hazel-mccallion-ux" element={<HML />} />
					<Route path="/unilink-ux" element={<UniLink />} />
					<Route path="/cinema-booking-ui" element={<CinemaBookingUI />} />
					{/* <Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/hazel-mccallion-ux" element={<HML />} />
					<Route path="/unilink-ux" element={<UniLink />} />
					<Route path="/cinema-booking-ui" element={<CinemaBookingUI />} /> */}
				</Routes>
			</HashRouter>
		</ThemeProvider>
	);
}

export default App;
