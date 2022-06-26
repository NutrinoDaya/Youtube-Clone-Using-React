import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIconfilled from '@mui/icons-material/VideoCall';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsRoundedIconfilled from '@mui/icons-material/NotificationsRounded';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
//import ExploreRoundedIconfilled from '@mui/icons-material/ExploreRounded';
//
function Header() {

  return (

    <div  className='Header'>

    {/* I'm a header*/ }

           <div className='Header_Left'>

          <MenuIcon className='MenuIcon'/>
          {""}
          <div className='Yt_Logo'>
          <img className='Youtube_Logo' src='http://192.168.1.130:8080/Images/YouTube_Logo_2017.svg' alt=''/>

          </div>
          
          </div>
      <div className='Header_Center'>
         
           <input className='Search_Bar' placeholder="Search" type="text"/>
          
           <SearchIcon  className='Search_Icon'/>
          
           <MicIcon className='Mic_Icon' color="white"/>
           

      </div>

        <div className='Header_Right'>

          <VideoCallOutlinedIcon className='Header_Icon'/>
    
          <AppsIcon className='Header_Icon'/>
    
          <NotificationsNoneIcon className='Header_Icon'/>

          <img className='User_Logo' src='http://192.168.1.130:8080/Images/user_logo.jpg' alt=''/>
   
    
       </div>
    </div>
  )

}

export default Header