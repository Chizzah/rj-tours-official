import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import CTA from "../components/CTA";

export default function CommunityTours() {
  return (
    <Layout>
      <section className="text-stone-400 bg-neutral-100">
        <div className="flex flex-col max-w-3xl gap-4 px-4 py-16 mx-auto lg:py-16 lg:gap-8 ">
          <div className="flex flex-col gap-8 mb-8">
            <Heading mode="secondary" text="About RJ Tours" />
            <StaticImage
              className="block object-cover w-full h-full"
              src="../images/about-img.jpg"
              alt="hero image"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Heading
              as="h2"
              mode="secondary"
              text="RJ Tours: Connecting You to the Culture and History of Oudtshoorn and the Garden
          Route"
            />
            <p>
              RJ Tours specializes in eco-friendly walking and cycling tours
              that immerse tourists in the rich culture and history of
              Oudtshoorn and the Garden Route. With a focus on bike tours,
              heritage walks, and local community interactions, RJ Tours offers
              visitors a unique opportunity to fall in love with the vibrant
              heritage and connect with the people of this historic town.
              Well-connected with cultural guides, public figures, and the
              Heritage and Tourism Boards, RJ Tours has established strong
              partnerships with guesthouses and other key players in the tourism
              industry. The company is actively expanding through new
              opportunities and promoting its offerings at expos and shows.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading
              as="h2"
              mode="secondary"
              text="What does this company provide?"
            />
            <p>
              RJ Tours fulfills the desire for authentic, eco-friendly travel
              experiences by offering bike tours, heritage walks, and community
              interactions in Oudtshoorn and the Garden Route. It caters to
              tourists seeking deeper cultural connections and meaningful
              interactions with locals. By emphasizing the town&#39;s rich
              history and sustainable tourism, RJ Tours meets the growing demand
              for more immersive and responsible travel. With strong industry
              connections, the company ensures a unique experience that allows
              visitors to explore and appreciate the area&#39;s culture and
              heritage.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as="h2" mode="secondary" text="Who is the Target Market" />
            <p>
              RJ Tours caters to a diverse target market, welcoming people of
              all races, religions, social backgrounds, ages, and educational
              levels. The company&#39;s offerings are designed to appeal to
              anyone with an interest in experiencing the culture, history, and
              community of Oudtshoorn and the Garden Route. Whether you&#39;re a
              seasoned traveler, a family looking for an enriching experience,
              or someone with a deep appreciation for local heritage, RJ Tours
              provides inclusive, eco-friendly tours that connect individuals
              from all walks of life with the area&#39;s rich cultural
              landscape.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA link="/contact/?reason=general-enquiry" text="Get in Touch" />
      {/* CTA */}
    </Layout>
  );
}
