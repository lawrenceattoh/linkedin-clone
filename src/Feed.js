import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';


function Feed() {
    return (
    <div className="feed">
        <div className="feed__inputContainer">
           <div className="feed__input">
              <CreateIcon />
              <form>
                 <input type="text"/>
                 <button type="submit">Send</button>
              </form>
           </div>

           <div className="feed__inputOptions">
              <InputOption Icon={ImageIcon} title="Photo" color="#7085F9"/>
              <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
              <InputOption Icon={EventNoteIcon} title="Event" color="#C0C8CD"/>
              <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
           </div>
        </div>

        <Post 
           name="Larry Attoh"
           description="This is a test"
           message="wow this worked"
        />
     </div>
   )
}

export default Feed
