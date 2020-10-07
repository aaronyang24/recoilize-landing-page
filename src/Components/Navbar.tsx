import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div id="nav-bar">
                {/* these will link to the corresponding section */}
                <a href="https://www.google.com"><button>Team</button></a>
                <a href="https://www.google.com"><button>Playground</button></a>
            </div>
            <div id="social-media-links">
                {/* fix the links, these should go to the corresponding social media site */}
                <a href="https://www.google.com"><img src="" alt="links to linkedin"/></a>
                <a href="https://www.google.com"><img src="" alt="linked to github"/></a>
            </div>
        </div>
    )
}
    