import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Heading from "../UI/Heading";
import Button from "../UI/Button";

export default function BikeTours() {
  return (
    <section className="w-full mx-auto bg-neutral-100 lg:flex lg:h-[720px]">
      <div className="h-60 lg:w-8/12 lg:order-2 lg:h-full">
        <StaticImage
          className="block object-cover w-full h-60 lg:h-full"
          src="../../images/bike.jpg"
          alt="bike tours"
        />
      </div>
      <div className="p-8 text-stone-400 lg:w-4/12 lg:p-16">
        <Heading mode="secondary" as="h2" text="Bike Tours" />
        <p className="mt-4 mb-4 lg:mb-8 lg:text-xl">
          Embark on a captivating bike tour through Oudtshoorn, discovering its
          rich history and architectural gems. Pedal past landmarks like St
          Jude's Anglican Church, the Synagogue Complex, and Ostrich Feather
          Palaces, exploring the town's cultural diversity and its ties to the
          flourishing ostrich feather industry.
        </p>
        <p className="mb-8 lg:mb-16 lg:text-xl">
          Visit Arbeidsgenot and cross the suspension bridge for a thrilling
          experience and panoramic views. Marvel at the sandstone buildings
          dating back to the late 1800s, which add a timeless charm to
          Oudtshoorn's streets. Join us for a two-wheeled adventure, where
          history, culture, and natural beauty converge in this Klein Karoo gem.
          Start your exploration today!
        </p>
        <Link to="/bike-tours-and-rentals/">
          <Button text="Discover Town Biking" />
        </Link>
      </div>
    </section>
  );
}
