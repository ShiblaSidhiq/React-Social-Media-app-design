import "./post.scss"
import { Link } from 'react-router-dom';
import { useState } from "react";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from "../comments/Comments";

const Post = ({post}) => {

    const [commentOpen,setCommentOpen] =useState(false)

    const liked=false;

  return (
    <div className='post'>
    <div className="container">
        <div className='user'>
            <div className="userInfo">
                <img src={post.profilePic} alt=""/>
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:"none",color:"inherit"}}>
                    <span className="name">{post.name}</span>
                    
                    </Link>
                    <span className="date">1 min ago</span>
                </div>
            </div>
            <MoreHorizOutlinedIcon/>
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={post.img}/>
        </div>
        <div className="info">
            <div className="item">
                {liked ? <FavoriteIcon/> : <FavoriteBorderIcon />}
                12 Likes
            </div>
            <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                <CommentOutlinedIcon/>
                6 Comments
            </div>
            <div className="item">
                <ShareOutlinedIcon />
                Share
                
            </div>
            
            </div>
            {commentOpen && <Comments/>}
    </div>
    <hr style={{color:"#BEBEBE"}}/>
    </div>
  )
}

export default Post