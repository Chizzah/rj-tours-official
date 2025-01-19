import React from "react";
import Heading from "./UI/Heading";

export default function AdditionalInformation() {
  return (
    <section className="p-8 bg-neutral-100 text-stone-400 lg:p-0 lg:pb-16">
      <div className="max-w-[768px] lg:max-w-[864px] mx-auto flex flex-col gap-8 lg:gap-12">
        <Heading as="h2" mode="secondary" text="POLICIES" />
        <div className="flex flex-col gap-4 lg:gap-8">
          <Heading as="h4" mode="secondary" text="Banking Details" />
          <ul className="list-disc">
            <li className="text-md lg:text-lg">
              Account: FNB Business Account
            </li>
            <li className="text-md lg:text-lg">Account Name: RJ Tours</li>
            <li className="text-md lg:text-lg">Account number: 63038129185</li>
            <li className="text-md lg:text-lg">Branch code: 21 04 14</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <Heading as="h4" mode="secondary" text="Payment Policy" />
          <ul className="list-disc">
            <li className="text-md lg:text-lg">
              Deposits into RJ Tour business account
            </li>
            <li className="text-md lg:text-lg">EFT into RJ Tours Account</li>
            <li className="text-md lg:text-lg">Payment by card</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <Heading as="h4" mode="secondary" text="Cancellation Policy" />
          <ul className="list-disc">
            <li className="text-md lg:text-lg">
              The date of cancellation shall be deemed to be the date on which
              the written notication was received of the booking being cancelled
            </li>
            <li className="text-md lg:text-lg">
              When making the booking 100% must be paid
            </li>
            <li className="text-md lg:text-lg">
              21 days or more prior to departure, non-refundable deposit will be
              forfeited
            </li>
            <li className="text-md lg:text-lg">
              14 days prior to departure, 50% of the tour cost will be forfeited
            </li>
            <li className="text-md lg:text-lg">
              7 days prior to departure, 80% of the tour cost will be forfeited.
            </li>
            <li className="text-md lg:text-lg">
              In case of NO SHOW OFF, 100% of the tour cost will be forfeited
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <Heading as="h4" mode="secondary" text="Child Policy" />
          <ul className="list-disc">
            <li className="text-md lg:text-lg">
              All RJ Tours activities are child friendly
            </li>
            <li className="text-md lg:text-lg">
              No fee for a child under the age of 4 to participate in the
              activity
            </li>
            <li className="text-md lg:text-lg">
              Children from the age 4-12 years pays to participate in the
              activity
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <Heading as="h4" mode="secondary" text="STO Rates" />
          <ul className="list-disc">
            <li className="text-md lg:text-lg">
              10% off Heritage walk tour per person
            </li>
            <li className="text-md lg:text-lg">
              10% off Heritage Bike Tour & Rental bikes per person
            </li>
            <li className="text-md lg:text-lg">
              10% off Local Community Interactive Experience per person
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <Heading as="h4" mode="secondary" text="Transportation" />
          <ul className="list-disc">
            <li className="text-md lg:text-lg">
              @R120 per person (under 4 years complimentary)
            </li>
            <li className="text-md lg:text-lg">
              Pick up and drop available 35km outside Oudtshoorn area.
            </li>
            <li className="text-md lg:text-lg">
              Arrival of 15min required prior departure to complete necessary
              documents.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
