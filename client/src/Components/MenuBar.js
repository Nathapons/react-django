import React from 'react'
import '../Styles/Menubar.css';
import logo from '../Image/Logo.PNG'

export default function MenuBar() {

  return (
    <nav class="navbar navbar-expand-lg px-4" className="menu-bar">
      <a href="/"><img src={logo} alt="Logo" className='haha'/></a>
    </nav>
  )
}
