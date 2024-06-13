import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import { navigate } from "gatsby";

export default function BikeToursAndRentals() {
  return (
    <Layout>
      <section className="relative lg:h-[600px]">
        <StaticImage
          className="inline-block object-cover w-full h-80 lg:h-full"
          src="../images/rentals.jpg"
          alt="hero image"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-25"></div>
        <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full p-4 text-center">
          <Heading text="Bikes & Rentals" />
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:py-16">
        <div className="max-w-[768px] lg:max-w-[1024px] mx-auto flex flex-col gap-4">
          <Heading
            mode="secondary"
            as="h2"
            text="Explore the Jewel of the Little Karoo on Bike"
          />
          <p className="text-md lg:text-lg">
            Are you ready to embark on an unforgettable adventure through the
            enchanting landscapes of Oudtshoorn? Join RJ Tours as we journey
            through this picturesque town nestled in the heart of the Little
            Karoo, a region renowned for its natural beauty and rich cultural
            heritage. Immerse yourself in the stunning scenery, where rolling
            hills and expansive plains create a breathtaking backdrop.
          </p>
          <p className="text-md lg:text-lg">
            Our tour will take you through the heart of Oudtshoorn, where you
            can marvel at the historic buildings made from locally sourced
            sandstone, dating back to 1860. These architectural gems are a
            testament to the town's enduring legacy and craftsmanship.
          </p>
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[1024px] mx-auto flex flex-col gap-4">
          <Heading mode="secondary" as="h2" text="Pricing" />
          <div className="flex flex-col gap-4">
            <div>
              <Heading
                mode="secondary"
                as="h3"
                text="City Bike Rental (6 max):"
              />
              <p className="text-md lg:text-lg">
                <b>One hour:</b> R80-00
              </p>
              <p className="text-md lg:text-lg">
                <b>Two hours:</b> R130-00
              </p>
              <p className="text-md lg:text-lg">
                <b>Three hours:</b> R180-00
              </p>
              <p className="text-md lg:text-lg">
                <b>Half day (4 hours):</b> R240-00
              </p>
              <p className="text-md lg:text-lg">
                <b>Full day (8 hours):</b> R290-00
              </p>
            </div>
            <div>
              <Heading
                mode="secondary"
                as="h3"
                text="Heritage Bike Tour (5 max):"
              />
              <p className="text-md lg:text-lg">
                <b>Two hours:</b> R190-00
              </p>
              <p className="text-md lg:text-lg">
                <b>Three hours:</b> R260-00
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[1024px] mx-auto flex flex-col gap-4">
          <Heading mode="secondary" as="h2" text="Time Slots" />
          <div>
            <Heading
              mode="secondary"
              as="h3"
              text="Summer Time Slots (1 Septemper - 30 April)"
            />
            <ul className="list-disc">
              <li className="text-md lg:text-lg">
                <b>Rental Bikes:</b> 07:00-19:00
              </li>
              <li className="text-md lg:text-lg">
                <b>Heritage Bike Tours:</b> 07:00-19:00
              </li>
            </ul>
          </div>
          <div>
            <Heading
              mode="secondary"
              as="h3"
              text="Winter Time Slots (1 May - 31 August)"
            />
            <ul className="list-disc">
              <li className="text-md lg:text-lg">
                <b>Rental Bikes:</b> 08:00-17:00
              </li>
              <li className="text-md lg:text-lg">
                <b>Heritage Bike Tours:</b> 08:00-17:00
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[1024px] mx-auto flex flex-col gap-4">
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
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[1024px] mx-auto flex flex-col gap-4">
          <Heading mode="secondary" as="h2" text="Specials" />
          <ul className="list-disc">
            <li className="text-md lg:text-lg">
              <b>Birthday special:</b> Two hours heritage bike tour and 10%
              discount for the poeple who join the birthday person (Proof of
              birth date required)
            </li>
            <li className="text-md lg:text-lg">
              <b>Pensioners special:</b> 15% discon on all rental rides as well
              as heritage tour
            </li>
            <li className="text-md lg:text-lg">
              <b>Group pack (3):</b> 10% discount
            </li>
            <li className="text-md lg:text-lg">Ask about other specials</li>
          </ul>
        </div>
      </section>
      <section className="flex items-center justify-center w-full py-8 bg-stone-400 lg:py-16">
        <button
          className="px-8 py-2 text-xl font-semibold uppercase lg:py-4 lg:px-16 bg-neutral-100 text-stone-400 lg:text-2xl"
          onClick={() => navigate("/contact/?reason=bike-tour-or-rental")}
        >
          Book a Bike Tour
        </button>
      </section>
    </Layout>
  );
}
