import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LayoutComp from "./components/layout";
import HomePage from "./pages/home";
import Movie from "./pages/movie";

let router = createBrowserRouter([
	{
		path: `/`,
		element: <LayoutComp />,
		children: [
			{
				path: `/`,
				element: <HomePage />,
			},
			{
				path: `/:id`,
				element: <Movie />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
