import React from 'react'
import './Slidebar.css'

//function Sidebariconfunc({selected,Icon,Title})
export function Sidebariconfunc({ActiveIcon,InactiveIcon,isActive,Title}) {
  return (
    <div className='SidebarRow'>
      <div className='Sidebar_Icon'>
        {isActive ? <ActiveIcon/> : <InactiveIcon />}
      </div>
      <div className='Slidebar_Title'>{Title}</div>
    </div>
  )
}

