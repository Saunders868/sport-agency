import Button from "@/components/elements/button";
import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import { getHomepage } from "@/sanity/queries/homepage";
import Image from "next/image";
import React from "react";

const LocationsPage = async () => {
  const { location }: { location: LocationData } = await getHomepage();

  return (
    <Section>
      <Container>
        <div className="mb-12">
          <h1 className="text-hero mb-3 font-coolvetica uppercase leading-none">
            {location.heading || "Our Locations"}
          </h1>
          <p className="mb-5 font-satoshi text-label">
            {location.tagline ||
              "Discover Your Perfect Court- Ready to elevate your tennis game? Experience world-class coaching, state-of-the-are facilities, and a vibrant tennis community. Enroll now and be part of a legacy of excellence."}
          </p>
          <Button>Start Today</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {location.locations?.map((item, index) => (
            <div
              key={index}
              className="relative h-[300px] rounded-3xl overflow-hidden flex-col flex items-start justify-end"
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover object-top"
              />
              <div className="relative p-6 text-white">
                <h2 className="text-sub-title font-bold font-coolvetica">
                  {item.heading}
                </h2>
                <p>{item.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default LocationsPage;
