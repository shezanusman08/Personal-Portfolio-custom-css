"use client";

import React from 'react';
import Image from 'next/image';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h4>Hi I am</h4>
          <h1>Muhammad Shezan</h1>
          <h2>Frontend Devoloper</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique amet sed massa nibh lectus netus in.</p>
          <button className="hire-btn">Hire Me</button>
        </div>
        <div className="hero-image">
          
          {/* Using the Next.js Image component for optimized loading */}
          <Image
            src="/shezan1.png" 
            alt="Fawzi Sayed" 
            width={300} 
            height={300} 
            className="rounded-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
