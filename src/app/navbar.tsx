"use client"

// navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import './navbar.css';  
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {isMobile ? (
        <span className="more-text" onClick={toggleMenu}>More</span>
      ) : (
        <a href="www.linkedin.com/in/muhammad-shezan

" className="download-btn">LinkdIn</a>
      )}
      <div className="menu-toggle" onClick={toggleMenu}>
      <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
