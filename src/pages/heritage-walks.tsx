import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import { navigate } from "gatsby";

export default function HeritageWalks() {
  return (
    <Layout>
      <section className="relative lg:h-[600px]">
        <StaticImage
          className="inline-block object-cover w-full h-80 lg:h-full"
          src="../images/heritage-walks-home.jpg"
          alt="hero image"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-25"></div>
        <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full p-4 text-center">
          <Heading text="Heritage Walks" />
        </div>
      </section>
      <section className="p-8 bg-stone-400 text-neutral-100 lg:py-16">
        <div className="max-w-[768px] lg:max-w-[1024px] mx-auto flex flex-col gap-4">
          <Heading as="h2" text="Experience the rich heritage of Oudtshoorn" />
          <p className="text-md lg:text-lg">
            Embark on an exciting journey with RJ Tours through the charming
            town of Oudtshoorn, where history comes alive in its remarkable
            architecture. Explore an array of historical buildings, masterfully
            constructed from locally sourced sandstone as far back as 1860, and
            marvel at how they continue to stand strong today.
          </p>
          <p className="text-md lg:text-lg">
            As you wander through the streets, be captivated by the grandiose
            Ostrich Feather Palaces, opulent mansions built during the
            prosperous Feather Boom era when ostrich feathers were a symbol of
            wealth and extravagance. These palaces, with their intricate designs
            and lavish details, offer a fascinating glimpse into a bygone era of
            affluence and style.
          </p>
        </div>
      </section>
      <section className="p-8 bg-stone-400 text-neutral-100 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[1024px] mx-auto flex flex-col gap-4">
          <Heading as="h2" text="Pricing & Cancellation" />
          <div className="flex flex-col gap-4">
            <Heading as="h3" text="Pricing" />
            <p className="text-md lg:text-lg">
              <b>Per person:</b> R150-00
            </p>
            <p className="text-md lg:text-lg">
              <b>Groups (7 or more):</b> 10% discount
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as="h3" text="Cancellation" />
            <p className="text-md lg:text-lg">
              The date of cancellation shall be deemed to be the date on which
              the written notification is received. If a booking is cancelled.
            </p>
            <ul className="list-disc">
              <li className="text-md lg:text-lg">
                When making the booking 100% must be paid.
              </li>
              <li className="text-md lg:text-lg">
                21 days or more prior to departure, non-refundable deposit will
                be forfeited.
              </li>
              <li className="text-md lg:text-lg">
                14 days prior to departure, 50% of the tour cost will be
                forfeited.
              </li>
              <li className="text-md lg:text-lg">
                7 days prior to departure, 80% of the tour cost will be
                forfeited.
              </li>
              <li className="text-md lg:text-lg">
                NO SHOW- 100% of tour cost will be forfeited.{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="p-8 bg-stone-400 text-neutral-100 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[1024px] mx-auto flex flex-col gap-4">
          <Heading as="h2" text="Time Slots" />
          <div>
            <Heading
              as="h3"
              text="Summer Time Slots (1 Septemper - 30 April)"
            />
            <p className="text-md lg:text-lg">07:00-19:00</p>
          </div>
          <div>
            <Heading as="h3" text="Winter Time Slots (1 May - 31 August)" />
            <p className="text-md lg:text-lg">08:00-17:00</p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center w-full py-8 bg-neutral-100 lg:py-16">
        <button
          className="px-8 py-2 text-xl font-semibold uppercase lg:py-4 lg:px-16 bg-stone-400 text-neutral-100 lg:text-2xl"
          onClick={() => navigate("/contact/?reason=heritage-walk")}
        >
          Book a Heritage Walk
        </button>
      </section>
    </Layout>
  );
}
