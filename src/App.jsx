import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LayoutComp from "./components/layout";
import HomePage from "./pages/home";
import Movie from "./pages/movie";
import Login from "./pages/login";
import MovieCollection from "./pages/movieCollection";

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
			{
				path: `movies`,
				element: <MovieCollection />,
			},
		],
	},
	{
		path: `/login`,
		element: <Login />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
