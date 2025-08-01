import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Layout from './components/Layout/Layout'
import Error from './components/Error/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />,
      errorElement: <Error />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/contact', element: <Contact /> },
        { path: '*', element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
