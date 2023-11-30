import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import { Home, Login, Register } from './pages';
import { Layout } from './components/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: paths.login,
        element: <Login />,
      },
      {
        path: paths.registration,
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
