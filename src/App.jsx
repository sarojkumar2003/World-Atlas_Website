import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './pages/Contact'
import Country from './Pages/Country'
import AppLayout from './components/Layout/AppLayout'
import { ErrorPage } from './Pages/ErrorPage'
import { CountryDetails } from './components/Layout/CountryDetails'


// Create a router with routes for Home, About, Contact, and Country pages
// Each route has a path and an element to render
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>, // Assuming AppLayout is defined elsewhere
    errorElement: <ErrorPage/>, // Assuming ErrorPage is defined elsewhere
    // Define child routes for the main layout
    // Each child route has a path and an element to render
    // The Home component is rendered at the root path
    // Other components are rendered at their respective paths
    // The Outlet component is used to render the child routes within the AppLayout
    children: [
       {
   path: '/',
   element: <Home />,
  },
  {
   path: '/about',
   element: <About />,
  },
  {
   path: '/contact',
   element: <Contact />,
  },
  {
   path: '/country',
   element: <Country />,
  },
  {
    // it called dynamic content
   path: 'country/:id',
   element: <CountryDetails />,
  }
]
}])


function App() {
  

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
