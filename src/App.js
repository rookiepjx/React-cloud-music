import React, { memo } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";


import routes from "./router";
import store from "./store";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlayerBar from "./pages/player/player-bar"
import { BrowserRouter } from "react-router-dom";

export default memo(function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				{renderRoutes(routes)}
				<Footer />
				<PlayerBar/>
			</BrowserRouter>
		</Provider>
	);
});
