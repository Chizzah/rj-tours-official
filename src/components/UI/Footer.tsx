import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  const date = new Date();
  const now = date.getFullYear();
  return (
    <footer>
      <div className="flex flex-col gap-1 p-4 text-sm text-center lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:px-8 max-w-[1920px]">
        <Link to="/">
          <StaticImage
            className="w-16 h-16"
            src="../../images/rj-tours-logo.png"
            alt="RJ Tours logo"
          />
        </Link>
        <p>Copyright © RJ Tours {now} | All rights reserved.</p>
      </div>
    </footer>
  );
}
