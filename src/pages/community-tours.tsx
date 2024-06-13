import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import { Link, navigate } from "gatsby";

export default function CommunityTours() {
  return (
    <Layout>
      <section className="relative lg:h-[600px]">
        <StaticImage
          className="inline-block object-cover w-full h-80 lg:h-full"
          src="../images/community-tours-home.jpg"
          alt="hero image"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-25"></div>
        <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full p-4 text-center">
          <Heading text="Community Tours" />
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:py-16">
        <div className="max-w-[768px] lg:max-w-[1024px] mx-auto flex flex-col gap-4">
          <Heading mode="secondary" as="h2" text="Experience community" />
          <p className="text-md lg:text-lg">
            During the community tour, tourists will have the opportunity to
            interact with the students at Aurial College and witness their
            enthusiasm for exploring the world. They will also get a glimpse
            into the rich history and strong sense of belonging in the
            Suikerbuilt 'Ghetto' Community.
          </p>
          <p className="text-md lg:text-lg">
            The tour highlights the importance of sustainability and the
            positive impact that these initiatives have on the local community.
            RJ Tours ensures that visitors not only enjoy their experience but
            also leave with a deeper understanding of the efforts being made to
            create a better living for all.
          </p>
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[1024px] mx-auto">
          <Heading as="h2" text="Times & Pricing" mode="secondary" />
          <div className="mb-8">
            <Heading as="h3" text="Monday to Friday Tours" mode="secondary" />
            <div className="mt-8">
              <p className="mb-2 text-sm md:mb-4">
                <i>
                  2 hours and 30 minutes of wonderful and exciting experiences.
                </i>
              </p>
              <p className="mb-2 md:mb-4 lg:w-1/2">
                <strong>REQUIREMENTS:</strong> Comfortable clothes, sneakers or
                closed shoes, a hat, sunblock, rain coat if its cold….and don’t
                forget your camera to capture the iconic memorable moments.
              </p>
              <p className="mb-2 md:mb-4">
                <strong>Summer:</strong> September - April
              </p>
              <p className="mb-2 md:mb-4">
                <strong>Summer Times Slots:</strong> 08:00 - 10:30 & 11:00 -
                13:30
              </p>
              <p className="mb-2 md:mb-4">
                <strong>Winter:</strong> May - August
              </p>
              <p className="mb-2 md:mb-4">
                <strong>Winter Time Slots:</strong> 09:00 - 11:30 & 12:00 -
                14:30
              </p>
            </div>
          </div>
          <div className="mb-8">
            <Heading as="h3" text="Saturday Tours" mode="secondary" />
            <div className="mt-8">
              <p className="mb-2 text-sm md:mb-4">
                <i>Only 1 hour and 30 minutes</i>
              </p>
              <p className="mb-2 md:mb-4">
                Suikerbult & Recycling @ less 15% discount
              </p>
              <p className="mb-2 md:mb-4">
                <strong>Time Slot One:</strong> 09:00 - 10:30
              </p>
              <p className="mb-2 md:mb-4">
                <strong>Time Slot Two:</strong> 11:00 – 12:30
              </p>
            </div>
          </div>
          <div>
            <Heading as="h3" text="Transportation" mode="secondary" />
            <div className="mt-8">
              <p className="mb-2 md:mb-4">
                @R120 per person (under 4 years complimentary)
              </p>
              <p className="mb-2 md:mb-4">
                Pick up and drop available on 30 minutes prior tour departure
                times
              </p>
              <p className="mb-2 md:mb-4">
                Arrival of 15min required prior departure to complete necessary
                documents.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center w-full py-8 bg-stone-400 lg:py-16">
        <button
          className="px-8 py-2 text-xl font-semibold uppercase lg:py-4 lg:px-16 bg-neutral-100 text-stone-400 lg:text-2xl"
          onClick={() => navigate("/contact/?reason=community-tour")}
        >
          Book a Community Tour
        </button>
      </section>
    </Layout>
  );
}
