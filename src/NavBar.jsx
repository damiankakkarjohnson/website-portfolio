import { useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

function NavBar(){
  const [isOpen, setIsOpen] = useState(false)

  return(
    <nav id="mainNav">
      <h2 id='myNameNav'>Damian <span>Kakkar-Johnson</span></h2>
      
      <button id="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </button>

      <ul id={isOpen ? 'navOpen' : 'navClosed'}>
        <li><a href="#" onClick={() => setIsOpen(!isOpen)}>About</a></li>
        <li><a href="#experience" onClick={() => setIsOpen(!isOpen)}>Experience</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(!isOpen)}>Projects</a></li>
        <li><a href="#" onClick={() => setIsOpen(!isOpen)}>Leadership</a></li>
        <li id="navIcons">
          <a href="https://linkedin.com/in/damian-kakkar-johnson-579723311" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/damiankakkarjohnson" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="mailto:damiankakkarjohnson@gmail.com" target="_blank" rel="noreferrer"><MdEmail /></a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar