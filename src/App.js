import './App.css'
// import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
// import Navbar from '../src/components/Navbar'
import Thali from '../src/components/Thali'
// // import { Outlet } from 'react-router-dom'
import Menu from '../src/components/Menu'
import Check from './components/Check'
import Product from '../src/components/Product';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './redux/store';



const router = createBrowserRouter([
  {
    path: "/",
    element: <> <Thali /> </>,
  },
  {
    path: "/Menu",
    element: <> <Menu /></>
  },
  {
    path: "/Product",
    element: <><Product /> </>
  },


  {
    path: "/Check",
    element: <> <Check /></>
  },



])


export default function App() {
  return (
    <RouterProvider store={store} router={router} />
  )
}
