import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import { navigate } from "gatsby";

export default function CommunityTours() {
  return (
    <Layout>
      <section className="relative h-[50vh] xl:h-[80vh]">
        <StaticImage
          className="block object-cover w-full h-full"
          src="../images/community-tours-home.jpg"
          alt="hero image"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-25"></div>
        <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full p-4 text-center">
          <Heading text="Community Tours" />
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:py-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading
            mode="secondary"
            as="h2"
            text="Unique Community Interaction Experience"
          />
          <p className="text-md lg:text-lg">
            Join our community tour to experience the heart and soul of
            Oudtshoorn. Engage with local students, explore vibrant
            neighborhoods and witness firsthand the town's commitment to
            sustainability and community development.
          </p>
          <Heading mode="secondary" as="h5" text="Aurial College" />
          <p className="text-md lg:text-lg">
            Meet enthusiastic students who are passionate about learning and
            exploring the world. Gain insights into their education journeys
            aspirations.{" "}
            <span className="font-bold text-md">( Week days only )</span>
          </p>
          <Heading
            mode="secondary"
            as="h5"
            text='Suikerbuilt "Ghetto Community"'
          />
          <p className="text-md lg:text-lg">
            The first place in South Africa where the Group Areas Acts, No 41 of
            1950 and No 77 of 1957 determined that " the Coloured racial group "
            should live in its own separate area. Where people was forceful
            removed from their place of birth.
          </p>
          <p className="text-md lg:text-lg">
            Delve into the rich and strong sense of belonging within this
            vibrant neighborhood. Understand the communities unique heritage and
            efforts to preserve its cultural identity.
          </p>
          <Heading
            mode="secondary"
            as="h5"
            text="Extract, Refine and Reprocess"
          />
          <p className="text-md lg:text-lg">
            A lifetime story of how passion for constructing raw material cam
            into action. With plastic the main product, it instills the
            importance of its value in our community/ society.
          </p>
          <Heading mode="secondary" as="h5" text="Nomonde Crèche" />
          <p className="text-md lg:text-lg">
            The crèche came into existence in 1994 and is still laying the
            foundation of successful leaders for tomorrow. With conservation as
            a curriculum, reprocessing raw material work hand in hand with
            creating a better lifestyle.{" "}
            <span className="font-bold text-md">( Week days only )</span>
          </p>
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="flex flex-col gap-8 max-w-[768px] lg:max-w-[1024px] mx-auto">
          <Heading mode="secondary" as="h2" text="Tour Highlights" />
          <section className="flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-col w-full gap-2 p-12 bg-stone-400">
              <Heading as="h5" text="Local Engagement:" />
              <p className="text-md lg:text-lg text-neutral-100">
                Experience the warmth and hospitality of the local community,
                fostering connections that go beyond typical tourist
                interactions.
              </p>
            </div>
            <div className="flex flex-col w-full gap-2 p-12 bg-stone-400">
              <Heading as="h5" text="Cultural and Historical Insights:" />
              <p className="text-md lg:text-lg text-neutral-100">
                Discover the stories behind key landmarks and communities,
                enhancing your appreciation for the town's diverse heritage.
              </p>
            </div>
            <div className="flex flex-col w-full gap-2 p-12 bg-stone-400">
              <Heading as="h5" text="Sustainability focus:" />
              <p className="text-md lg:text-lg text-neutral-100">
                Learn about sustainable practices and initiatives that are
                making a positive impact on Oudtshoorn's environment and its
                residents.
              </p>
            </div>
          </section>
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading mode="secondary" as="h2" text="What to Expect" />
          <p className="text-md lg:text-lg">
            Join our community tour to experience the heart and soul of
            Oudtshoorn. Engage with local students, explore vibrant
            neighborhoods and witness firsthand the town's commitment to
            sustainability and community development.
          </p>
          <Heading mode="secondary" as="h5" text="Guided Tours: " />
          <p className="text-md lg:text-lg">
            Enjoy informative and engaging tours led by knowledgeable guide who
            are passionate about Oudtshoorn.
          </p>
          <Heading mode="secondary" as="h5" text="Interactive Experience:" />
          <p className="text-md lg:text-lg">
            Participate in interactive activities that highlight the community's
            culture history, feature learders and sustainability efforts.
          </p>
          <Heading mode="secondary" as="h5" text="Positive Impact: " />
          <p className="text-md lg:text-lg">
            Understand the significance of sustainable tourism and how your
            visit contributes to the well being of the local community.
          </p>
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-4">
          <Heading
            mode="secondary"
            as="h2"
            text="Why Choose RJ Tours Unique Community Interactions?"
          />
          <p className="text-md lg:text-lg">
            RJ Tours offers authentic and meaningful experiences that enrich
            your understanding of Oudtshoorn. Our tours are thoughtfully
            designed to be memorable, ensuring that you leave with a deeper
            connection to the community and its ongoing efforts. By
            participating in our tours, you directly support local initiatives
            focused on improving living conditions and promoting sustainability.
          </p>
          <p className="text-md lg:text-lg">
            Our guides, deeply rooted in the community, share genuine stories
            and local knowledge that go beyond what you find in guidebooks. This
            local expertise provides a unique perspective, making each adventure
            with RJ Tours not only informative but also a true immersion into
            the heart of Oudtshoorn.
          </p>
        </div>
      </section>
      <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
        <div className="max-w-[768px] lg:max-w-[864px] mx-auto">
          <Heading as="h2" text="Times & Pricing" mode="secondary" />
          <div className="mb-8">
            <Heading as="h5" text="Monday to Friday Tours" mode="secondary" />
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
            <Heading as="h5" text="Saturday Tours" mode="secondary" />
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
            <Heading as="h5" text="Transportation" mode="secondary" />
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
            onClick={() => navigate("/contact/?reason=community-tour")}
          >
            Book a Community Tour
          </button>
        </div>
      </section>
    </Layout>
  );
}
