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
          className="inline-block object-cover w-full h-60 lg:h-full"
          src="../../images/community-tours-home.jpg"
          alt="community tours"
        />
      </div>
      <div className="p-8 text-neutral-100 lg:w-4/12 lg:p-16">
        <Heading as="h2" text="Community Tours" />
        <p className="mt-4 mb-4 lg:mb-8 lg:text-xl">
          Embark on a captivating bike tour through Oudtshoorn's rich history.
          Pedal past landmarks like St Jude's Church, the Synagogue Complex, and
          Ostrich Feather Palaces, delving into the town's cultural diversity
          and ties to the ostrich feather industry.
        </p>
        <p className="mb-8 lg:mb-16 lg:text-xl">
          Visit Arbeidsgenot and cross the suspension bridge for panoramic
          views. Marvel at sandstone buildings from the late 1800s, adding
          timeless charm to Oudtshoorn. Join us for a two-wheeled adventure
          where history, culture, and natural beauty converge in this Klein
          Karoo gem. Start your exploration today!
        </p>
        <Link to="/community-tours/">
          <Button mode="secondary" text="Discover Community" />
        </Link>
      </div>
    </section>
  );
}
