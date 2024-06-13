import React from "react";
import { Link } from "gatsby";

import Heading from "../UI/Heading";
import Button from "../UI/Button";

export default function About() {
  return (
    <section className="p-8 text-neutral-100 bg-stone-400 lg:p-16 lg:mx-auto lg:h-[400px] lg:text-center lg:flex lg:flex-col lg:justify-center lg:items-center">
      <Heading as="h2" text="Discover Hidden Gems" />
      <p className="mt-4 mb-8 lg:mb-16 lg:text-xl lg:w-1/2">
        Immerse yourself in the charm of the Klein Karoo town with our community
        tours, heritage walks, and exciting bike adventures. At RJ Tours, we
        invite you to go beyond the surface and explore Oudtshoorn's rich
        cultural tapestry.
      </p>
      <Link to="/about/">
        <Button text="discover rj tours" mode="secondary" />
      </Link>
    </section>
  );
}
