import React, { useEffect } from 'react';
import './Header.css';

function Header() {
    useEffect(() => {
        const header = document.getElementById('header');
        const menuToggle = document.getElementById("menu-toggle");
        const navbar = document.getElementById("navbar");

        const headerScrolledHandler = () => {
            if (window.scrollY > 100 || navbar.style.display === "flex") {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        };

        window.addEventListener('load', headerScrolledHandler);
        document.addEventListener('scroll', headerScrolledHandler);

        // Hamburger menu
        menuToggle.addEventListener("click", () => {
            navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";

        });

        return () => {
            window.removeEventListener('load', headerScrolledHandler);
            document.removeEventListener('scroll', headerScrolledHandler);
            menuToggle.removeEventListener("click", headerScrolledHandler);
        };
    }, []);

    return (
        <header id="header" className="fixed-top">
            <div className="container">
                <div className="logo">
                    <img src="./images/logo.png" alt="Logo" />
                </div>
                <button id="menu-toggle" className="menu-toggle" aria-label="Toggle navigation">
                    &#9776;
                </button>
                <nav id="navbar" className="navbar">
                    <ul id="navbar-nav" className="navbar-nav">
                        <li id="nav-item" className="nav-item active">
                            <a className="nav-link" href="#hero">Home</a>
                        </li>
                        <li id="nav-item" className="nav-item">
                            <a className="nav-link" href="#classes">Classes</a>
                        </li>
                        <li id="nav-item" className="nav-item">
                            <a className="nav-link" href="#trainer">Trainer</a>
                        </li>
                        <li id="nav-item" className="nav-item">
                            <a className="nav-link" href="#review">Review</a>
                        </li>
                        <li id="nav-item" className="nav-item">
                            <a className="nav-link" href="#contact-us">Contact</a>
                        </li>
                        <li>
                            <button id="nav-btn">JOIN US</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
