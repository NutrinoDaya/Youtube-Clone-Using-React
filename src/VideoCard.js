import { Avatar } from '@mui/material'
import React from 'react'
import './VideoCard.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
function VideoCard({image,channel,title,Timestamp,views,ChannelImage}) {

  return (
    <div className='VideoCard'>
   
      <img className='VideoCardThumpnail' src={image} alt=""/>
      <div className='VideoCardInfo'>
    <Avatar className='VideoCardAvatar' alt={channel} src={ChannelImage}/>
    <div className='VideoCardText'>
        <h4>{title}</h4>
        <MoreVertIcon className='dots'/>
        <div className='ChannelInfo'>
        <p>{channel}</p>
        <p>{views} • {Timestamp}</p>
        </div>
    </div>
    </div>
    </div>
  )

}

export default VideoCard