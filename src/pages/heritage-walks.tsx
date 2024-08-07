import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import { navigate } from "gatsby";

export default function HeritageWalks() {
  return (
    <Layout>
      <section className="relative h-[50vh] xl:h-[80vh]">
        <StaticImage
          className="block object-cover w-full h-full"
          src="../images/heritage-walks-home.jpg"
          alt="hero image"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-25"></div>
        <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full p-4 text-center">
          <Heading text="Heritage Walks" />
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:py-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading
            mode="secondary"
            as="h2"
            text="Experience the rich heritage of Oudtshoorn"
          />
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
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading
            mode="secondary"
            as="h2"
            text="Highlight of RJ Tours Heritage Walk"
          />
          <Heading
            mode="secondary"
            as="h5"
            text="Historical Sandstone Buildings:"
          />
          <p className="text-md lg:text-lg">
            Marvel at the historical building made from locally sourced
            sandstone, dating back to 1860. These architectural gems are a
            testament to Oudtshoorn's enduring legacy and craftsmanship of the
            stonemasons that tell the story of the town's development and
            prosperity during the ostrich feather boom.
          </p>
          <Heading mode="secondary" as="h5" text="Culture Heritage:" />
          <p className="text-md lg:text-lg">
            Explore the rich cultural heritage of Oudtshoorn, from its early
            settlers to its vibrant present day community. Learn about the
            town's diverse influences and the pivotal role it played in the
            ostrich feather industry.
          </p>
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading mode="secondary" as="h2" text="Tour Features" />
          <Heading mode="secondary" as="h5" text="Expert Guides:" />
          <p className="text-md lg:text-lg">
            Our knowledgeable guides will lead you through the town, sharing
            fascinating insights into its history, architecture and cultural
            significance.
          </p>
          <Heading mode="secondary" as="h5" text="Interactive Experience:" />
          <p className="text-md lg:text-lg">
            Engage with local landmarks making your tour not just a visual feast
            but an enriching cultural experience
          </p>
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="flex flex-col gap-8 max-w-[768px] lg:max-w-[1024px] mx-auto">
          <Heading
            mode="secondary"
            as="h2"
            text="Why Choose RJ Tours Heritage Walk?"
          />
          <section className="flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-col w-full gap-2 p-12 bg-stone-400">
              <Heading as="h5" text="Personalized Attention:" />
              <p className="text-md lg:text-lg text-neutral-100">
                We cater to solo travellers, couples, groups and families
                ensuring a personalized and intimate tour experience.
              </p>
            </div>
            <div className="flex flex-col w-full gap-2 p-12 bg-stone-400">
              <Heading as="h5" text="Sustainable Tourism:" />
              <p className="text-md lg:text-lg text-neutral-100">
                Our tours emphasize eco friendly practices, contributing to the
                preservation of Oudtshoorn cultural treasures.
              </p>
            </div>
            <div className="flex flex-col w-full gap-2 p-12 bg-stone-400">
              <Heading as="h5" text="Local Expertise:" />
              <p className="text-md lg:text-lg text-neutral-100">
                With deep roots in the community, our guides offer authentic
                stories and local knowledge that you won't find in guidebooks.
              </p>
            </div>
          </section>
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading mode="secondary" as="h2" text="Pricing & Cancellation" />
          <div className="flex flex-col gap-4">
            <Heading mode="secondary" as="h5" text="Pricing" />
            <p className="text-md lg:text-lg">
              <b>Per person:</b> R150-00
            </p>
            <p className="text-md lg:text-lg">
              <b>Groups (7 or more):</b> 10% discount
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading mode="secondary" as="h5" text="Cancellation" />
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
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading mode="secondary" as="h2" text="Time Slots" />
          <div>
            <Heading
              mode="secondary"
              as="h5"
              text="Summer Time Slots (1 Septemper - 30 April)"
            />
            <p className="text-md lg:text-lg">07:00-19:00</p>
          </div>
          <div>
            <Heading
              mode="secondary"
              as="h5"
              text="Winter Time Slots (1 May - 31 August)"
            />
            <p className="text-md lg:text-lg">08:00-17:00</p>
          </div>
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
            onClick={() => navigate("/contact/?reason=heritage-walk")}
          >
            Book a Heritage Walk
          </button>
        </div>
      </section>
    </Layout>
  );
}
