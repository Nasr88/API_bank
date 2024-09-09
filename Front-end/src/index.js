import React from 'react';
import { createRoot } from "react-dom/client";

import Router from "./Router";
import { Provider } from "react-redux";
import store from './redux/store';
// import AuthChecker from './AuthChecker.js';

const container = document.getElementById("root");
const root = createRoot(container);

/* Rendering the Provider component with the store and the Router component. */
root.render(
	<Provider store={store}>
		{/* <AuthChecker> */}
		<React.StrictMode>
			<Router />
		</React.StrictMode>
		{/* </AuthChecker> */}
	</Provider>
);

