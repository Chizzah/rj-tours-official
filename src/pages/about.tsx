import React from "react";
import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import { StaticImage } from "gatsby-plugin-image";

export default function CommunityTours() {
  return (
    <Layout>
      <section className="bg-stone-400 text-neutral-100">
        <div className="flex flex-col max-w-3xl gap-4 px-4 py-16 mx-auto lg:py-32 lg:gap-8 ">
          <div>
            <Heading text="About RJ Tours" />
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Roydin John Engelbrecht is responsible for every aspect of your
              experience with RJ Tours is pleasing. He has been a guide for 7
              years and worked at a Game lodge and wildelife ranger.
            </p>

            <p>
              RJ Tours was established in 2019 but it all started when he was
              just 13 years old and saw a group of tourists in his area. This is
              where the hunger that burned inside of him pushed him to think
              about starting his own business. RJ tours is located in the
              Oudtshoorn area and tourists will get the opportunity to meet the
              locals (local creche, recycling project, local community, furture
              leaders) and interact with them.
            </p>

            <p>
              He is passionate about getting to share his experience and
              everything Oudtshoorn has to offer ,and is quite excited to leave
              a footprint. His main objective in his business plan is to
              introduce tourists to a whole new side of Oudtshoorn area, and
              with RJ Tours he would really like to do that. The slogan of his
              business says "RJ.Tours -Oudsthoorn Flo...let's Go!!! Giving
              tourists a chance to see Oudtshoorn in a whole different way, but
              also learn and educate the forthcoming generation.
            </p>

            <p>
              Tourists will feel safe, learn about other cultures, feel part of
              the community, professional guide, punctuality.
            </p>

            <p className="mb-4">
              365 days of beautiful weather in the Oudsthoorn area.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-1/3">
            <StaticImage
              placeholder="blurred"
              src="../images/creche.jpg"
              alt="Nomonde Creche"
            />
          </div>
          <div className="w-1/3">
            <StaticImage
              placeholder="blurred"
              src="../images/aurial-school.jpg"
              alt="Aurial College"
            />
          </div>
          <div className="w-1/3">
            <StaticImage
              placeholder="blurred"
              src="../images/recycling-center.jpg"
              alt="Recycling Center"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
