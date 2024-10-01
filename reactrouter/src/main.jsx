import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './routes/Home';
import Contacts from './routes/Contacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contacts />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
