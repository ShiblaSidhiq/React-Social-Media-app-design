import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Leftbar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authenticationContext";


function App() {

  const {currentUser}=useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);

  const Layout =()=>{
    return(
      <div className={`theme-${darkMode ?"dark" : "light"}`}>
        <NavBar />
        <div style={{display:"flex"}}>
          <Leftbar />
          <div style={{flex:6}}>
          <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectRouter=({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<ProtectRouter><Layout/></ProtectRouter>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
    ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
