import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './Pages/Home.jsx'
import Gallery from './Pages/Gallery.jsx';
import Cards from './Components/Cards.jsx';
import About from './Components/About.jsx';
import AddCards from './Components/AddCards.jsx';
import PlantsTree from './Pages/PlantsTree.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Home },
      { path: '/home', Component: Home },
      { path: '/gallery', Component: Gallery },
      {
        path: '/cards/:id',
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/category/${params.id}`),
        Component: Cards
      },
      { path: '/about', Component: About },
      {
        path: '/addCards',
        Component: AddCards
      },
      {
        path: '/plants',
        Component: PlantsTree
      }
    ],
    Component: App
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
