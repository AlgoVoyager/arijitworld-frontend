import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav w-full relative top-0'>
        <header className="header h-6 bg-blue-200">do you know, arijit singh is classically trained.</header>
        <nav className='mainNav h-20 bg-blue-300 flex justify-between items-center px-20'>
            <h1 className="logo text-blue-600 text-3xl font-bold">Arijit World</h1>
            <div className="nlinks flex gap-10 text-xl items-center flex-wrap">
              <Link to="/">Home</Link>
              <Link to="explore">Explore</Link>                
              <Link to="lyrics">lyrics</Link>
              <Link to="songs">Songs</Link>
              <Link to="wiki">Wiki</Link>
              <Link to="community">Community</Link>
              <Link to="blog">Blog</Link>
              <Link to="about">About</Link>
              <Link to="auth">
                <li className="cursor-pointer list-none border-blue-200 border-4 hover:bg-blue-600 px-4 py-2 rounded-2xl hover:text-blue-50 transition transform duration-200">
                  Sign In</li></Link>
            </div>
        </nav>
    </div>
  )
}

export default Nav