import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Heading from "../UI/Heading";
import Button from "../UI/Button";

export default function HeritageWalks() {
  return (
    <section className="w-full mx-auto bg-neutral-100 lg:flex lg:h-[720px]">
      <div className="h-60 lg:w-8/12 lg:order-2 lg:h-full">
        <StaticImage
          className="block object-cover w-full h-60 lg:h-full"
          src="../../images/heritage-walks-home.jpg"
          alt="heritage walks"
        />
      </div>
      <div className="p-8 text-stone-400 lg:w-4/12 lg:p-16">
        <Heading mode="secondary" as="h2" text="Heritage Walks" />
        <p className="mt-4 mb-4 lg:mb-8 lg:text-xl">
          Are you ready to embark on an unforgettable adventure through the
          enchanting landscapes of Oudtshoorn? Join RJ Tours as we journey
          through this picturesque town nestled in the heart of the Klein Karoo,
          a region renowned for its natural beauty and rich cultural heritage.
        </p>
        <p className="mb-8 lg:mb-16 lg:text-xl">
          Immerse yourself in the stunning scenery, where rolling hills,
          expensive plains create a breathtaking backdrop.
        </p>
        <Link to="/heritage-walks/">
          <Button text="Discover Heritage" />
        </Link>
      </div>
    </section>
  );
}
