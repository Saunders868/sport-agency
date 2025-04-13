import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import Image from "next/image";
import React from "react";
import Button from "@/components/elements/button";

const Locations = ({ data }: { data: LocationData }) => {
  return (
    <Section className="relative">
      <Image
        alt=""
        fill
        src="/images/locations.jpg"
        className="object-cover blur object-top"
      />
      <Container className="relative">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-section font-coolvetica text-white">
              {data.heading || "Our Locations"}
            </h2>
            <p className="text-white font-satoshi">
              {data.tagline ||
                "Ready to take your tennis game to the next level? Experience world-class coaching, state-of-the-art facilities, and a vibrant tennis community. Enroll today and become part of a legacy of excellence."}
            </p>
            <Button className="w-fit">{data.cta || "Explore Academy"}</Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {data.locations.map((location: LocationT, index) => (
              <div key={index} className="flex flex-col gap-3 text-white">
                <div className="relative sm:h-[120px] h-[150px] shadow-2xl rounded-3xl overflow-hidden">
                  <Image
                    src={location.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sub-title font-coolvetica font-bold tracking-wide">
                  {location.heading}
                </h3>
                <p>{location.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Locations;
