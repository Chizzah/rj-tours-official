import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import AdditionalInformation from "../components/AdditionalInformation";
import CTA from "../components/CTA";

export default function BikeToursAndRentals() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[50vh] xl:h-[80vh]">
        <StaticImage
          className="block object-cover w-full h-full"
          src="../images/rentals.jpg"
          alt="hero image"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-25"></div>
        <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full p-4 text-center">
          <Heading text="Bikes & Rentals" />
        </div>
      </section>
      {/* HERO */}

      {/* INTRO */}
      <section className="p-8 bg-neutral-100 text-stone-400">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading
            mode="secondary"
            as="h2"
            text="Explore the Jewel of the Klein Karoo with RJ Tours on a Heritage Walk"
          />
          <p className="text-md lg:text-lg">
            Are you ready to emdark on an unforgettable adventure through the
            enchanting landscapes of Oudtshoorn? Join RJ Tours as we journey
            through this picturesque town nestled in the heart of the Klein
            Karoo, a region renowned for its natural beauty and rich cultural
            heritage. Immerse yourself in the stunning scenery, where rolling
            hills expansive plains create a breathtaking backdrop.
          </p>
        </div>
      </section>
      {/* INTRO */}

      {/* WHY CHOOSE */}
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="flex flex-col gap-8 max-w-[768px] lg:max-w-[1024px] mx-auto">
          <Heading
            mode="secondary"
            as="h2"
            text="Why Choose RJ Tours Biking in Oudtshoorn?"
          />
          <section className="flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-col w-full gap-2 p-12 bg-stone-400">
              <Heading as="h5" text="Eco-friendly Travel:" />
              <p className="text-md lg:text-lg text-neutral-100">
                Embrace sustainable tourism by opting into the experience of
                fresh air and scenic views while touring.
              </p>
            </div>
            <div className="flex flex-col w-full gap-2 p-12 bg-stone-400">
              <Heading as="h5" text="Convenience/Flexibility:" />
              <p className="text-md lg:text-lg text-neutral-100">
                Renting a bike allows you to explore at your own pace, stopping
                whenever you wish to take in the sights or snap a memorable
                photo.
              </p>
            </div>
            <div className="flex flex-col w-full gap-2 p-12 bg-stone-400">
              <Heading as="h5" text="Health Benefits:" />
              <p className="text-md lg:text-lg text-neutral-100">
                Biking is a great way to stay active, offering a healthy and fun
                way to explore the town and its surroundings.
              </p>
            </div>
          </section>
        </div>
      </section>
      {/* WHY CHOOSE */}

      {/* WHAT'S INCLUDED */}
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading
            mode="secondary"
            as="h2"
            text="What's Included in Your Bike Rental"
          />
          <p className="text-md lg:text-lg">
            Explore Oudtshoorn with our local insights map, designed to help you
            navigate the town and uncover its hidden gems. Whether you're
            interested in historical sites, local eateries, or
            off-the-beaten-path attractions, our map provides a valuable guide
            to enhance your experience.
          </p>
          <p className="text-md lg:text-lg">
            Additionally, we offer rental bikes suitable for solo travelers,
            couples, families, and groups, ensuring that everyone can join in on
            the adventure. With options tailored to different needs and group
            sizes, our bike rentals make it easy and enjoyable to explore
            Oudtshoorn at your own pace.
          </p>
        </div>
      </section>
      {/* WHAT'S INCLUDED */}

      {/* PRICING */}
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[1024px] mx-auto flex flex-col gap-4 lg:gap-8">
          <Heading as="h2" mode="secondary" text="Pricing" />
          <div className="flex justify-between overflow-x-scroll border-2 lg:flex-col lg:border-r-0 bg-slate-50 lg:overflow-x-hidden">
            {/* HEADER */}
            <div className="flex flex-col w-1/2 border-r-2 lg:flex-row lg:w-full">
              <div className="flex items-center justify-center h-20 px-2 text-center border-b-2 lg:w-4/12 lg:border-r-2 lg:text-left">
                <p className="text-sm lg:text-lg">ADULT</p>
              </div>
              <div className="flex items-center justify-center h-20 px-2 text-center border-b-2 lg:w-4/12 lg:border-r-2 lg:text-left">
                <p className="text-sm lg:text-lg">CHILD (4-12)</p>
              </div>
              <div className="flex items-center justify-center h-20 px-2 text-center lg:w-4/12 lg:border-b-2 lg:text-left">
                <p className="text-sm lg:text-lg">BIKE RENTALS</p>
              </div>
            </div>
            {/* HEADER */}

            {/* ROW ONE */}
            <div className="flex flex-col w-1/2 border-r-2 lg:flex-row lg:w-full lg:border-r-0 lg:border-b-2">
              <div className="flex flex-col items-center justify-center h-20 px-2 border-b-2 lg:h-40 lg:w-4/12 lg:border-b-0 lg:border-r-2">
                <Heading as="h2" mode="secondary" text="R249" />
                <p className="text-xs font-semibold lg:text-sm text-slate-400">
                  2 HOUR TOUR
                </p>
              </div>
              <div className="flex flex-col items-center justify-center h-20 px-2 border-b-2 lg:h-40 lg:w-4/12 lg:border-b-0 lg:border-r-2">
                <Heading as="h2" mode="secondary" text="R149" />
                <p className="text-xs font-semibold lg:text-sm text-slate-400">
                  2 HOUR TOUR
                </p>
              </div>
              <div className="flex flex-col items-center justify-center h-20 px-2 lg:h-40 lg:w-4/12 lg:border-r-2">
                <Heading as="h2" mode="secondary" text="R80" />
                <p className="text-xs font-semibold lg:text-sm text-slate-400">
                  1 HOUR
                </p>
              </div>
            </div>
            {/* ROW ONE */}

            {/* ROW TWO */}
            <div className="flex flex-col w-1/2 border-r-2 lg:flex-row lg:w-full lg:border-r-0 lg:border-b-2">
              <div className="flex flex-col items-center justify-center h-20 px-2 border-b-2 lg:h-40 lg:w-4/12 lg:border-b-0 lg:border-r-2"></div>
              <div className="flex flex-col items-center justify-center h-20 px-2 border-b-2 lg:h-40 lg:w-4/12 lg:border-b-0 lg:border-r-2"></div>
              <div className="flex flex-col items-center justify-center h-20 px-2 lg:h-40 lg:w-4/12 lg:border-r-2">
                <Heading as="h2" mode="secondary" text="R130" />
                <p className="text-xs font-semibold lg:text-sm text-slate-400">
                  2 HOURS
                </p>
              </div>
            </div>
            {/* ROW TWO */}

            {/* ROW THREE */}
            <div className="flex flex-col w-1/2 border-r-2 lg:flex-row lg:w-full lg:border-r-0 lg:border-b-2">
              <div className="flex flex-col items-center justify-center h-20 px-2 border-b-2 lg:h-40 lg:w-4/12 lg:border-b-0 lg:border-r-2"></div>
              <div className="flex flex-col items-center justify-center h-20 px-2 border-b-2 lg:h-40 lg:w-4/12 lg:border-b-0 lg:border-r-2"></div>
              <div className="flex flex-col items-center justify-center h-20 px-2 lg:h-40 lg:w-4/12 lg:border-r-2">
                <Heading as="h2" mode="secondary" text="R180" />
                <p className="text-xs font-semibold lg:text-sm text-slate-400">
                  3 HOURS
                </p>
              </div>
            </div>
            {/* ROW THREE */}

            {/* ROW FOUR */}
            <div className="flex flex-col w-1/2 border-r-2 lg:flex-row lg:w-full lg:border-r-0 lg:border-b-2">
              <div className="flex flex-col items-center justify-center h-20 px-2 border-b-2 lg:h-40 lg:w-4/12 lg:border-b-0 lg:border-r-2"></div>
              <div className="flex flex-col items-center justify-center h-20 px-2 border-b-2 lg:h-40 lg:w-4/12 lg:border-b-0 lg:border-r-2"></div>
              <div className="flex flex-col items-center justify-center h-20 px-2 lg:h-40 lg:w-4/12 lg:border-r-2">
                <Heading as="h2" mode="secondary" text="R240" />
                <p className="text-xs font-semibold lg:text-sm text-slate-400">
                  4 HOURS
                </p>
              </div>
            </div>
            {/* ROW FOUR */}

            {/* ROW FIVE */}
            <div className="flex flex-col w-1/2 border-r-2 lg:flex-row lg:w-full lg:border-r-0">
              <div className="flex flex-col items-center justify-center h-20 px-2 border-b-2 lg:h-40 lg:w-4/12 lg:border-b-0 lg:border-r-2"></div>
              <div className="flex flex-col items-center justify-center h-20 px-2 border-b-2 lg:h-40 lg:w-4/12 lg:border-b-0 lg:border-r-2"></div>
              <div className="flex flex-col items-center justify-center h-20 px-2 lg:h-40 lg:w-4/12 lg:border-r-2">
                <Heading as="h2" mode="secondary" text="R290" />
                <p className="text-xs font-semibold lg:text-sm text-slate-400">
                  8 HOURS
                </p>
              </div>
            </div>
            {/* ROW FIVE */}
          </div>
        </div>
      </section>
      {/* PRICING */}

      {/* TIMESLOTS */}
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4 lg:gap-8">
          <Heading mode="secondary" as="h2" text="TIMESLOTS (2H/3H Tours)" />
          <div className="flex flex-col gap-4 lg:gap-8">
            <Heading
              as="h4"
              mode="secondary"
              text="September - April (Summer)"
            />
            <ul className="list-disc">
              <li className="text-md lg:text-lg">
                (1) 07:30 - 09:30 / 07:30 - 10:30
              </li>
              <li className="text-md lg:text-lg">
                (2) 10:00 - 12:00 / 11:00 - 14:00
              </li>
              <li className="text-md lg:text-lg">
                (3) 14:00 - 16:00 / 14:30 - 17:30
              </li>
              <li className="text-md lg:text-lg">(4) 16:30 - 18:30</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 lg:gap-8">
            <Heading as="h4" mode="secondary" text="May - August (Winter)" />
            <ul className="list-disc">
              <li className="text-md lg:text-lg">
                (1) 08:00 - 10:00 / 08:00 - 11:00
              </li>
              <li className="text-md lg:text-lg">
                (2) 10:30 - 12:30 / 11:30 - 14:30
              </li>
              <li className="text-md lg:text-lg">
                (3) 13:00 - 15:00 / 15:00 - 18:00
              </li>
              <li className="text-md lg:text-lg">(4) 15:30 - 17:30</li>
            </ul>
          </div>
        </div>
      </section>
      {/* TIMESLOTS */}

      {/* RIDING RULES */}
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading mode="secondary" as="h2" text="Riding Rules" />
          <ul className="list-disc">
            <li className="text-md lg:text-lg">Give way to pedestrians</li>
            <li className="text-md lg:text-lg">No speeding</li>
            <li className="text-md lg:text-lg">
              Follow traffic rules and road signals
            </li>
            <li className="text-md lg:text-lg">Use hand signals</li>
            <li className="text-md lg:text-lg">No texting and riding</li>
            <li className="text-md lg:text-lg">
              Wearing a helmet is compulsory
            </li>
            <li className="text-md lg:text-lg">
              On the road, ride with the traffic
            </li>
            <li className="text-md lg:text-lg">
              Make sure you are comfortable on your bike
            </li>
            <li className="text-md lg:text-lg">Test your brakes</li>
            <li className="text-md lg:text-lg">Ask for help if required</li>
          </ul>
        </div>
      </section>
      {/* RIDING RULES */}

      {/* SPECIALS */}
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading mode="secondary" as="h2" text="Specials" />
          <ul className="list-disc">
            <li className="text-md lg:text-lg">
              <b>Birthday special:</b> Two hours heritage bike tour and 10%
              discount for the people who join the birthday person (Proof of
              birth date required)
            </li>
            <li className="text-md lg:text-lg">
              <b>Pensioners special:</b> 15% discount on all rental rides as
              well as heritage tour
            </li>
            <li className="text-md lg:text-lg">
              <b>Group pack (3):</b> 10% discount
            </li>
            <li className="text-md lg:text-lg">Ask about other specials</li>
          </ul>
        </div>
      </section>
      {/* SPECIALS */}

      {/* ADDITIONAL INFORMATION */}
      <AdditionalInformation />
      {/* ADDITIONAL INFORMATION */}

      {/* CTA */}
      <CTA
        link="/contact/?reason=bike-tour-or-rental"
        text="Book a Heritage Bike Tour"
      />
      {/* CTA */}
    </Layout>
  );
}
