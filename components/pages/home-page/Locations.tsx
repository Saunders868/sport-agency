import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import Image from "next/image";
import React from "react";
import { locations } from "@/data/mock.json";

const Locations = () => {
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
              {" "}
              Our Locations
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {locations.map((location, index) => (
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
                  {location.name}
                </h3>
                <p>{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Locations;
