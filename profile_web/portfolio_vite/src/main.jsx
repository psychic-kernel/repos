import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, 
  createBrowserRouter,
  RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

// import pages.
import MainPg from './pages/MainPg';
import AcademicsPg from './pages/AcademicsPg';
import BioPg from './pages/BioPg';
import ProjectsPg from './pages/ProjectsPg';
import NoPg from './pages/NoPg';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPg/>
  },
  {
    path: "/academics",
    element: <AcademicsPg/>
  },
  {
    path: "/bio",
    element: <BioPg/>
  },
  {
    path: "/projects",
    element: <ProjectsPg/>
  },
  {
    path: "*",
    element: <NoPg/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


