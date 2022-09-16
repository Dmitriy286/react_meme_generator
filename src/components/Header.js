import React from 'react';

const Header = () => {
    return (
        <header className="header">
                <img className="logo-image" src={require("../images/troll_face.png")}/>
                <h2 className="logo-text">Meme Generator</h2>
            <h4 className="header-text">React Course - Project 3</h4>
        </header>
    );
};

export default Header;