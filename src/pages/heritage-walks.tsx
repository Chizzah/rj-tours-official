import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import AdditionalInformation from "../components/AdditionalInformation";
import CTA from "../components/CTA";

export default function HeritageWalks() {
  return (
    <Layout>
      {/* HERO */}
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
      {/* HERO */}

      {/* INTRO */}
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
      {/* INTRO */}

      {/* HIGHLIGHTS */}
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
      {/* HIGHLIGHTS */}

      {/* FEATURES */}
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
      {/* FEATURES */}

      {/* WHY CHOOSE */}
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
      {/* WHY CHOOSE */}

      {/* PRICING */}
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[1024px] mx-auto flex flex-col gap-4 lg:gap-8">
          <Heading as="h2" mode="secondary" text="Pricing" />
          <div className="flex justify-between border-2 lg:flex-col lg:border-r-0 bg-slate-50">
            <div className="flex flex-col w-1/2 border-r-2 lg:flex-row lg:w-full">
              <div className="flex items-center justify-center h-20 px-2 border-b-2 lg:w-4/12 lg:border-r-2">
                <p className="text-md lg:text-xl">ADULT</p>
              </div>
              <div className="flex items-center justify-center h-20 px-2 border-b-2 lg:w-4/12 lg:border-r-2">
                <p className="text-md lg:text-xl">CHILD (4-12)</p>
              </div>
              <div className="flex items-center justify-center h-20 px-2 lg:w-4/12 lg:border-b-2">
                <p className="text-md lg:text-xl">GROUP (7+)</p>
              </div>
            </div>
            <div className="flex flex-col w-1/2 lg:flex-row lg:w-full">
              <div className="flex items-center justify-center h-20 px-2 border-b-2 lg:h-40 lg:w-4/12 lg:border-b-0 lg:border-r-2">
                <Heading as="h3" mode="secondary" text="R170-00" />
              </div>
              <div className="flex items-center justify-center h-20 px-2 border-b-2 lg:h-40 lg:w-4/12 lg:border-b-0 lg:border-r-2">
                <Heading as="h3" mode="secondary" text="R110-00" />
              </div>
              <div className="flex items-center justify-center h-20 px-2 lg:h-40 lg:w-4/12 lg:border-r-2">
                <Heading as="h3" mode="secondary" text="10% DISCOUNT" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PRICING */}

      {/* TIMESLOTS */}
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4 lg:gap-8">
          <Heading mode="secondary" as="h2" text="TIMESLOTS" />
          <div className="flex flex-col gap-4 lg:gap-8">
            <Heading
              as="h4"
              mode="secondary"
              text="September - April (Summer)"
            />
            <ul className="list-disc">
              <li className="text-md lg:text-lg">(1) 07:30 – 09:30</li>
              <li className="text-md lg:text-lg">(2) 10:00 – 12:00</li>
              <li className="text-md lg:text-lg">(3) 14:00 – 16:00</li>
              <li className="text-md lg:text-lg">(4) 16:30 – 18:30</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 lg:gap-8">
            <Heading as="h4" mode="secondary" text="May - August (Winter)" />
            <ul className="list-disc">
              <li className="text-md lg:text-lg">(1) 08:00 – 10:00</li>
              <li className="text-md lg:text-lg">(2) 10:30 – 12:30</li>
              <li className="text-md lg:text-lg">(3) 13:00 – 15:00</li>
              <li className="text-md lg:text-lg">(4) 15:30 – 17:30</li>
            </ul>
          </div>
        </div>
      </section>
      {/* TIMESLOTS */}

      {/* ADDITIONAL INFORMATION */}
      <AdditionalInformation />
      {/* ADDITIONAL INFORMATION */}

      {/* CTA */}
      <CTA link="/contact/?reason=heritage-walk" text="Book a Heritage Walk" />
      {/* CTA */}
    </Layout>
  );
}
