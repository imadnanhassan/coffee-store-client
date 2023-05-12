import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './compenents/addCoffee.jsx';
import UpdateCoffee from './compenents/updateCoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path:'/add-coffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path:'/update-coffee',
    element: <UpdateCoffee></UpdateCoffee>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
