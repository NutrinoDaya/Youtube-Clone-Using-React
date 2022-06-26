import React,{useState } from 'react'
import './Slidebar.css'
import {Sidebariconfunc1,Sidebariconfunc2,
    Sidebariconfunc3,Sidebariconfunc4,Sidebariconfunc5} from './Sidebariconfunc'
import HomeIcon from '@mui/icons-material/HomeOutlined';
import HomeIconfilled from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/ExploreOutlined';
import ExploreIconfilled from '@mui/icons-material/Explore';
import Shorts from '@mui/icons-material/VideoCameraFrontOutlined';
import Shortsfilled from '@mui/icons-material/VideoCameraFront';
import Subscriptions from '@mui/icons-material/SubscriptionsOutlined';
import Subscriptionsfilled from '@mui/icons-material/Subscriptions';
import VideoLibrary from '@mui/icons-material/VideoLibraryOutlined';
import VideoLibraryfilled from '@mui/icons-material/VideoLibrary';


function Sidebar() {

    //const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = React.useState(true)
    const [isActive2, setIsActive2] = React.useState(false)
    const [isActive3, setIsActive3] = React.useState(false)
    const [isActive4, setIsActive4] = React.useState(false)
    const [isActive5, setIsActive5] = React.useState(false)

  return (
    <div className='Slidebar'>
      
 <a className='SlideIcon' onClick={() => setIsActive1(!isActive1)}> 
    <Sidebariconfunc1
      ActiveIcon={HomeIconfilled}
      InactiveIcon={HomeIcon}
      Title='Home'
      isActive={isActive1}/>
      </a>

      <a onClick={() => setIsActive2(!isActive2)}> 
    <Sidebariconfunc2
      ActiveIcon={ExploreIconfilled}
      InactiveIcon={ExploreIcon}
      Title='Explore'
      isActive={isActive2}/>
      </a>

      <a onClick={() => setIsActive3(!isActive3)}> 
    <Sidebariconfunc3
      ActiveIcon={Shortsfilled}
      InactiveIcon={Shorts}
      Title='Shorts'
      isActive={isActive3}/>
      </a>

      <a onClick={() => setIsActive4(!isActive4)}> 
    <Sidebariconfunc4
      ActiveIcon={Subscriptionsfilled}
      InactiveIcon={Subscriptions}
      Title='Subscribtion'
      isActive={isActive4}/>
      </a>

      <a onClick={() => setIsActive5(!isActive5)}> 
    <Sidebariconfunc5
      ActiveIcon={VideoLibraryfilled}
      InactiveIcon={VideoLibrary}
      Title='Library'
      isActive={isActive5}/>
      </a>
    </div>

  )
}

export default Sidebar