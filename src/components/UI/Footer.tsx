import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  const date = new Date();
  const now = date.getFullYear();
  return (
    <footer>
      <div className="flex flex-col gap-4 p-4 text-sm text-center lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:px-8 max-w-[1920px]">
        <Link to="/">
          <StaticImage
            className="w-16 h-16"
            src="../../images/rj-tours-logo.png"
            alt="RJ Tours logo"
          />
        </Link>
        <p>Copyright © RJ Tours {now} | All rights reserved.</p>
        <div className="flex items-center justify-center gap-4">
          {/* phone */}
          <a
            className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-400 hover:bg-stone-300"
            href="tel:+27738361654"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          {/* facebook */}
          <a
            className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-400 hover:bg-stone-300"
            href="https://www.facebook.com/RJToursOudtshoorn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          {/* instagram */}
          <a
            className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-400 hover:bg-stone-300"
            href="https://www.instagram.com/rjtours_6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
