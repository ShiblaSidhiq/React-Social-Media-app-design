import "./navbar.scss"
import { Link } from "react-router-dom";
import { useContext } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import PersonOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authenticationContext";

const NavBar = () => {

  const {toggle,darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);
  

  return (
    <div className='navbar'>
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
                <span>lamasocial</span>
            </Link>
            <HomeOutlinedIcon/>
            {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} />:<DarkModeOutlinedIcon onClick={toggle}/> }
            <GridViewOutlinedIcon/>
            <div className="search">
            <SearchSharpIcon/>
                <input type="text" placeholder="Search..."/>

            </div>

        </div>
        <div className="right">
        <PersonOutlineSharpIcon/>
        <MailOutlineSharpIcon/>
        <NotificationsNoneSharpIcon/>

        <div className="user">
        <img src="{currentUser.profilePic} "/>
        <span>{currentUser.name}</span>
        </div>

        </div>
    </div>
  )
}

export default NavBar