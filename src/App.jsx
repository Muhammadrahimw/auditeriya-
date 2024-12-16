import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LayoutComp from "./components/layout";
import HomePage from "./pages/home";

let router = createBrowserRouter([
	{
		path: `/`,
		element: <LayoutComp />,
		children: [
			{
				path: `/`,
				element: <HomePage />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
