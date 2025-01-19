import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Heading from "../UI/Heading";
import Button from "../UI/Button";

export default function CommunityTours() {
  return (
    <section className="w-full mx-auto bg-stone-400 lg:flex lg:h-[720px]">
      <div className="h-60 lg:w-8/12 lg:h-full">
        <StaticImage
          className="block object-cover w-full h-60 lg:h-full"
          src="../../images/community-tours-home.jpg"
          alt="community tours"
        />
      </div>
      <div className="p-8 text-neutral-100 lg:w-4/12 lg:p-16">
        <Heading as="h2" text="Community Tours" />
        <p className="mt-4 mb-4 lg:mb-8 lg:text-xl">
          A local, socially responsible tour designed to immense guests in the
          authentic culture and warmth of the local community. Guests can engage
          with residents, fostering meaningful connections beyond typical
          tourist experiences.
        </p>
        <p className="mb-8 lg:mb-16 lg:text-xl">
          The tour emphasizes sustainability and community involvement, ensuring
          that guests not only learn but actively contribute to the area’s
          social fabric and well-being.
        </p>
        <Link to="/community-tours/">
          <Button mode="secondary" text="Discover Community" />
        </Link>
      </div>
    </section>
  );
}
