import React  from 'react'
import './Header.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrFormSearch} from 'react-icons/gr';
import {MdVideoCall} from 'react-icons/md';
import {IoMdApps} from 'react-icons/io';
import {MdNotifications} from 'react-icons/md';
import { useState } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
function Header() {
  const [inputSearch, setInputSearch]= useState("");
  return (
      <div className="header">
          <div className='header__left'>
        <GiHamburgerMenu className='header__button'/> 
       <Router> <Link to="/">
        <img className='header__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png' alt=""  /> </Link></Router>
        </div>
        <div className='header__input'>
        <input 
        onChange={e => setInputSearch(e.target.value)} 
        value={inputSearch} 
        placeholder='Search' 
        type="text"  
        />   
        <Router>
          <Link to={`/search/${inputSearch}`}>
            <GrFormSearch />
          </Link>
        </Router>
        
        </div>
        <div className='header__icons'> 
        <MdVideoCall className='header__icon'/>
        <IoMdApps className='header__icon' />
        <MdNotifications className='header__icon' />
        </div>  
    </div>
    
  )
}

export default Header
