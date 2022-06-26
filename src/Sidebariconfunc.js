import React from 'react'
import './Slidebar.css'

//function Sidebariconfunc({selected,Icon,Title})
export function Sidebariconfunc1({ActiveIcon,InactiveIcon,isActive,Title}) {
  return (
    <div className='SidebarRow'>
      <div className='Sidebar_Icon'>
        {isActive ? <ActiveIcon/> : <InactiveIcon />}
      </div>
      <div className='Slidebar_Title'>{Title}</div>
    </div>
  )
}
export function Sidebariconfunc2({ActiveIcon,InactiveIcon,isActive,Title}) {
  return (
    <div className='SidebarRow'>
      <div className='Sidebar_Icon'>
        {isActive ? <ActiveIcon/> : <InactiveIcon />}
      </div>
      <div className='Slidebar_Title'>{Title}</div>
    </div>
  )
}
export function Sidebariconfunc3({ActiveIcon,InactiveIcon,isActive,Title}) {
  return (
    <div className='SidebarRow'>
      <div className='Sidebar_Icon'>
        {isActive ? <ActiveIcon/> : <InactiveIcon />}
      </div>
      <div className='Slidebar_Title'>{Title}</div>
    </div>
  )
}
export function Sidebariconfunc4({ActiveIcon,InactiveIcon,isActive,Title}) {
  return (
    <div className='SidebarRow'>
      <div className='Sidebar_Icon'>
        {isActive ? <ActiveIcon/> : <InactiveIcon />}
      </div>
      <div className='Slidebar_Title'>{Title}</div>
    </div>
  )
}
export function Sidebariconfunc5({ActiveIcon,InactiveIcon,isActive,Title}) {
  return (
    <div className='SidebarRow'>
      <div className='Sidebar_Icon'>
        {isActive ? <ActiveIcon/> : <InactiveIcon />}
      </div>
      <div className='Slidebar_Title'>{Title}</div>
    </div>
  )
}

