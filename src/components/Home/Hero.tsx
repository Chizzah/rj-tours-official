import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Heading from "../UI/Heading";
import Button from "../UI/Button";

export default function Hero() {
  return (
    <section className="relative h-[50vh]">
      <StaticImage
        className="inline-block object-cover w-full h-[50vh] lg:h-full"
        src="../../images/hero-home.jpg"
        alt="hero image"
      />
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-25"></div>
      <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full p-4 text-center">
        <p className="text-lg font-semibold uppercase text-neutral-100">
          Enrich the experience
        </p>
        <Heading text="Discover Oudtshoorn with RJ Tours" />
        <h1 className="mb-4 text-2xl font-semibold uppercase text-neutral-100 lg:text-4xl"></h1>
        <p className="mb-8 text-neutral-100">
          Immerse yourself in the charm of the Klein Karoo town with our
          community tours, heritage walks, and exciting bike adventures.
        </p>
        <Link to="/booking/">
          <Button text="discover oudtshoorn" />
        </Link>
      </div>
    </section>
  );
}
