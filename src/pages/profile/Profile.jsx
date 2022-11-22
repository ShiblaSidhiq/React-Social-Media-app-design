import React from 'react'
import "./Profile.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from '../../components/posts/Posts';
const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYWoQIj4S37bMrdOk66DzLfO5CBmemLpNpg&usqp=CAU" alt='' className='cover'/>
        <img src="data:image/jpeg;base64,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" alt='' className='profilePic'/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
          <a href='http://facebook.com'>
          <FacebookOutlinedIcon fontSize='large'/></a>
          <a href='http://facebook.com'>
          <InstagramIcon fontSize='large'/></a>
          <a href='http://facebook.com'>
          <TwitterIcon fontSize='large'/></a>
          <a href='http://facebook.com'>
          <LinkedInIcon fontSize='large'/></a>
          <a href='http://facebook.com'>
          <PinterestIcon fontSize='large'/></a>
          </div>
          <div className="center">
            <span>Eugene</span>
            <div className="info">
            <div className="item">
            <LocationOnIcon/>
            <span>USA</span>
            </div>
            <div className="item">
            <LanguageIcon/>
            <span>Chat.web</span>
            </div>
            </div>
            <button>follow</button>
            
          </div>
          <div className="right">
          <EmailOutlinedIcon/>
          <MoreVertOutlinedIcon/>
          </div>
        </div>
      </div>
      <Posts/>
    </div>
  );
};

export default Profile