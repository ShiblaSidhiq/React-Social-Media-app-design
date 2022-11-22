import { useContext } from "react"
import "./stories.scss"
import {AuthContext} from "../../context/authenticationContext"

const Stories = () => {
    const currentUser=useContext(AuthContext)

    const stories=[
     {
        id:1,
        name:"eugene Flynnrider",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGkvIBvamRvw8QX8mwOQLariXJrWxN9pAaA&usqp=CAU"
     },
     {
        id:2,
        name:"Emma watson",
        img:"data:image/jpeg;base64,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"
     },
     {
        id:3,
        name:"christine stewart",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB84UCi_RiykvMS2dDShrT0W4wubNyprF6eQ&usqp=CAU"
     },
     {
        id:4,
        name:"Leonardo decaprio",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRieCvSxvKNPNGgxLOOqmum0pHo3cV-D2Jg&usqp=CAU"

     }
    ]
  return (
    <div className="stories">
    <div className="story">
            <img src={currentUser.profilePic} alt=""/>
            <span>{currentUser.name}</span>
            <button>+</button>
            </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
            <img src={story.img} alt=""/>
            <span>{story.name}</span>
            </div>

  ))}
    
    
    </div>
  )
}

export default Stories