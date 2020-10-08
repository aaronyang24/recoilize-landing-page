import '../index.css';
import React from 'react';
import Github from '../assets/github-logo.svg';
import Linkedin from '../assets/linkedin-logo.svg';
// import { FaGithub } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
// {`${FaLinkedin}`}
// {`${FaGithub}`}

export default function Navbar() {
    return (  
        <div>  
                <ul>
                    <li><a href="https://www.google.com">Team</a></li>
                    <li><a href="https://www.google.com">Playground</a></li>
                </ul>
                <ul>
                    {/* fix the links, these should go to the corresponding social media site */}
                    <li><a href="https://www.google.com"><img id="linkedin-logo" src={Linkedin}alt="link to linkedin"/></a></li>
                    <li><a href="https://www.google.com"><img id="github-logo" src={Github} alt="link to github"/></a></li>
                </ul>
        </div>
    )
}
    