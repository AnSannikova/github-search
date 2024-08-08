import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		Component: MainPage,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
