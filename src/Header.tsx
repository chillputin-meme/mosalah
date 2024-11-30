import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="/">Mo Salah</a>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#mission">Mission</a>
                    </li>
                    <li className="nav-item">
                        <a href="#tokenomics">Tokenomics</a>
                    </li>
                    <li className="nav-item">
                        <a href="#how-to-buy">How to Buy</a>
                    </li>

                    <li className="nav-item">
                        <a href="#socials">Socials</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

