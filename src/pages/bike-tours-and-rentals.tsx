import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import { navigate } from "gatsby";

export default function BikeToursAndRentals() {
  return (
    <Layout>
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
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading
            mode="secondary"
            as="h2"
            text="Why Choose RJ Tours Biking in Oudtshoorn?"
          />
          <Heading mode="secondary" as="h5" text="Eco-friendly Travel:" />
          <p className="text-md lg:text-lg">
            Embrace sustainable tourism by opting the fresh air and scenic
            views.
          </p>
          <Heading
            mode="secondary"
            as="h5"
            text="Convenience and Flexibility:"
          />
          <p className="text-md lg:text-lg">
            Renting a bike allows you to explore at your own pace, stopping
            whenever you wish to take in the sights or snap a memorable photo.
          </p>
          <Heading mode="secondary" as="h5" text="Health Benefits:" />
          <p className="text-md lg:text-lg">
            Biking is a great way to stay active, offering a healthy and fun way
            to explore the town and its surroundings.
          </p>
          <Heading mode="secondary" as="h5" text="Local Expertise:" />
          <p className="text-md lg:text-lg">
            With deep roots in the community, our guides offer authentic stories
            and local knowledge that you won't find in guidebooks.
          </p>
        </div>
      </section>
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
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading mode="secondary" as="h2" text="Pricing" />
          <div className="flex flex-col gap-4">
            <div>
              <Heading
                mode="secondary"
                as="h5"
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
                as="h5"
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
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading mode="secondary" as="h2" text="Time Slots" />
          <div>
            <Heading
              mode="secondary"
              as="h5"
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
              as="h5"
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
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
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
      <section className="flex flex-col items-center justify-center w-full p-8 bg-stone-400 lg:py-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading as="h2" text="Book Your Tour Today" />
          <p className="text-md lg:text-lg text-neutral-100">
            Embark on a journey that goes beyond sightseeing. Experience the
            essence of Oudtshoorn through our community tours, where history,
            culture and sustainability converge.
          </p>
          <button
            className="w-full px-8 py-2 text-sm font-semibold uppercase lg:py-4 lg:px-16 bg-neutral-100 text-stone-400 lg:text-lg lg:w-96"
            onClick={() => navigate("/contact/?reason=bike-tour-or-rental")}
          >
            Book a Heritage Bike Tour
          </button>
        </div>
      </section>
    </Layout>
  );
}
