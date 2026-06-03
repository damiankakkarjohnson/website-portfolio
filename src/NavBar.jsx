import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function NavBar(){
  
  return(
    <nav id="mainNav">
      <h2 id='myNameNav'>Damian <span>Kakkar-Johnson</span></h2>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Leadership</a></li>
        <li><a href="https://linkedin.com/in/damian-kakkar-johnson-579723311" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
        <li><a href="https://github.com/damiankakkarjohnson" target="_blank" rel="noreferrer"><FaGithub /></a></li>
        <li><a href="mailto:damiankakkarjohnson@gmail.com" target="_blank" rel="noreferrer"><MdEmail /></a></li>
      </ul>
    </nav>
  );
}

export default NavBar