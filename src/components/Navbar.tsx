import React from 'react';

export const Navbar = () => {
  const navLinks = ["About", "Works", "Reviews", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      {/*
        This new version uses a solid, opaque 'border-brand-lime'.
        This is a very direct style that will force a visible change.
      */}
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3 bg-soft-black rounded-full border border-brand-lime">
        
        <a href="/" className="flex items-center gap-3 no-underline">
          <img src="/images/logo.png" alt="branly logo" className="h-6 w-auto" />
          <span className="text-xl font-bold text-brand-lime">Branly</span>
        </a>

        <ul className="hidden md:flex items-center space-x-6 list-none">
          {navLinks.map((link) => (
            <li key={link}>
              <a 
                href="#" 
                className="relative text-soft-white/80 hover:text-soft-white transition-colors duration-300 no-underline
                           after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full 
                           after:bg-brand-lime after:scale-x-0 after:origin-center hover:after:scale-x-100 
                           after:transition-transform after:duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        
        <a 
          href="#"
          className="relative hidden md:inline-block no-underline overflow-hidden rounded-full border border-brand-lime px-10 py-3 font-bold text-brand-lime transition-colors duration-300 ease-in-out hover:text-soft-black group bg-white/5 shadow-[0_0_8px_0_#D7FF0080]"
        >
          <span
            className="absolute inset-0 bg-brand-lime transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full"
          ></span>
          <span className="relative">Get in Touch</span>
        </a>

      </nav>
    </header>
  );
};