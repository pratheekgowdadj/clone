import React from 'react'
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import {TiHome} from 'react-icons/ti';
import {MdWhatshot} from'react-icons/md';
import {MdSubscriptions} from 'react-icons/md';

import {MdVideoLibrary} from 'react-icons/md';
import {MdHistory} from 'react-icons/md';
import {MdOndemandVideo} from 'react-icons/md';
import {MdWatchLater} from 'react-icons/md';
import {MdOutlineThumbUpAlt} from 'react-icons/md';
import {MdOutlineExpandMore} from 'react-icons/md';

function Sidebar() {
  return (
    <div className='sidebar'>


        <SidebarRow  Icon={TiHome} title="Home" />
        <SidebarRow Icon={MdWhatshot} title="Trending" />
        <SidebarRow  Icon={MdSubscriptions} title="Subscription" />
        <hr />
        <SidebarRow  Icon={MdVideoLibrary} title="Library" />
        <SidebarRow  Icon={MdHistory} title="History" />
        <SidebarRow  Icon={MdOndemandVideo} title="Your videos" />
        <SidebarRow  Icon={MdWatchLater} title="Watch Later" />
        <SidebarRow  Icon={MdOutlineThumbUpAlt} title="Liked Videos" />
        <SidebarRow  Icon={MdOutlineExpandMore} title="Show More" />
        <hr />
    </div>
  )
}

export default Sidebar