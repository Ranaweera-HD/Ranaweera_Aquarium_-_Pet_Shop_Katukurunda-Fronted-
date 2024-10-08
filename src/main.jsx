import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
  import Header from './Pages/jsx/Header.jsx';
  import Home from './Pages/jsx/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/home",
    element: <Home />,
  }
  // ,
  // {
  //   path: "/header",
  //   element: <Header />,
  // },
  // {
  //   path: "/header",
  //   element: <Header />,
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
