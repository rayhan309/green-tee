import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './Pages/Home.jsx'
import Gallery from './Pages/Gallery.jsx';
import Cards from './Components/Cards.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {index: true,Component: Home},
      {path: '/home', Component: Home},
      {path: '/gallery', Component: Gallery},
      {path: '/cards/:id', Component: Cards}
    ],
    Component: App
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
