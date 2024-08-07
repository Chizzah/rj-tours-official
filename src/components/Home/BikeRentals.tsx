import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Heading from "../UI/Heading";
import Button from "../UI/Button";

export default function BikeRentals() {
  return (
    <section className="w-full mx-auto bg-stone-400 lg:flex lg:h-[720px]">
      <div className="h-60 lg:w-8/12 lg:h-full">
        <StaticImage
          className="block object-cover w-full h-60 lg:h-full"
          src="../../images/rentals.jpg"
          alt="bike rentals"
        />
      </div>
      <div className="p-8 text-neutral-100 lg:w-4/12 lg:p-16">
        <Heading as="h2" text="Bike Rentals" />
        <p className="mt-4 mb-4 lg:mb-8 lg:text-xl">
          Explore Oudtshoorn in the Klein Karoo with the convenience of bike
          rentals. Discover the charm of this South African town, known for its
          stunning landscapes and attractions like the Cango Caves.
        </p>
        <p className="mb-8 lg:mb-16 lg:text-xl">
          Enjoy an eco-friendly and immersive experience, equipped with safety
          gear and local insights. Whether solo, with a partner, or as a family,
          biking in Oudtshoorn provides a refreshing and accessible way to
          embrace the beauty of the region.
        </p>
        <Link to="/bike-rentals/">
          <Button mode="secondary" text="Discover Bike Rentals" />
        </Link>
      </div>
    </section>
  );
}
