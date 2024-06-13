import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="relative flex justify-between w-full px-8 py-2 lg:px-16">
      <Link to="/">
        <StaticImage
          className="w-12 h-12"
          src="../../images/rj-tours-logo.png"
          alt="RJ Tours logo"
        />
      </Link>
      <ul className="items-center hidden lg:flex lg:gap-4">
        {/* <Link to="/about/">
          <li className="py-4 font-semibold uppercase text-stone-400 hover:text-stone-300">
            About
          </li>
        </Link> */}
        <Link to="/community-tours/">
          <li className="py-4 font-semibold uppercase text-stone-400 hover:text-stone-300">
            Community Tours
          </li>
        </Link>
        <Link to="/heritage-walks/">
          <li className="py-4 font-semibold uppercase text-stone-400 hover:text-stone-300">
            Heritage Walks
          </li>
        </Link>
        <Link to="/bike-tours-and-rentals/">
          <li className="py-4 font-semibold uppercase text-stone-400 hover:text-stone-300">
            Bike Tours & Rentals
          </li>
        </Link>
        <Link to="/contact/">
          <li className="py-4 font-semibold uppercase text-stone-400 hover:text-stone-300">
            Contact
          </li>
        </Link>
      </ul>
      <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute left-0 z-50 w-full h-screen mt-12 text-center top-4 bg-neutral-100">
          {/* <Link to="/about/">
            <li className="py-4 font-semibold uppercase text-stone-400 hover:bg-stone-400 hover:text-neutral-100">
              About
            </li>
          </Link> */}
          <Link to="/community-tours/">
            <li className="py-4 font-semibold uppercase text-stone-400 hover:bg-stone-400 hover:text-neutral-100">
              Community Tours
            </li>
          </Link>
          <Link to="/heritage-walks/">
            <li className="py-4 font-semibold uppercase text-stone-400 hover:bg-stone-400 hover:text-neutral-100">
              Heritage Walks
            </li>
          </Link>
          <Link to="/bike-tours-and-rentals/">
            <li className="py-4 font-semibold uppercase text-stone-400 hover:text-stone-300">
              Bike Tours & Rentals
            </li>
          </Link>
          <Link to="/contact/">
            <li className="py-4 font-semibold uppercase text-stone-400 hover:bg-stone-400 hover:text-neutral-100">
              Contact
            </li>
          </Link>
        </ul>
      )}
    </header>
  );
}
