import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products"
import Users from "./pages/Users/Users"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "./styles/global.scss";
import Product from "./pages/Product/Product";
import User from "./pages/User/User";

function App() {

  const Layout = ()=>{
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "users/:id",
          element: <User />,
        },
        {
          path: "products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "login",
      element : <Login/>
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
