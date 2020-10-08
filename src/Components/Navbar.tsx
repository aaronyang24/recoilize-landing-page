import React from 'react';
import '../index.css';

export default function Navbar() {
    return (  
        <div>  
                <ul>
                    <li><a href="https://www.google.com">Team</a></li>
                    <li><a href="https://www.google.com">Playground</a></li>
                </ul>
                <ul>
                    {/* fix the links, these should go to the corresponding social media site */}
                    <li><a href="https://www.google.com"><img src={} alt="links to linkedin"/></a></li>
                    <li><a href="https://www.google.com"><img src={} alt="linked to github"/></a></li>
                </ul>
        </div>
    )
}
    