import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import React from "react";
import Button from "@/components/elements/button";
import Image from "next/image";

const Coaches = ({ data }: { data: CoachData }) => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col xl:flow-row mb-12 justify-between items-center">
          <h2 className="text-section font-coolvetica">
            {data.heading || "Meet the Coaches Behind elysain"}
          </h2>
          <Button>{data.tagline || "Explore Academy"}</Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-24">
          {data.coaches?.map((coach: Coach, index) => (
            <div key={index}>
              <div className="relative h-[450px] shadow-2xl mb-12 rounded-3xl overflow-hidden">
                <Image src={coach.image} alt="" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <p>{coach.tagline}</p>
                <h3 className="text-features font-coolvetica">
                  {coach.heading}
                </h3>
                <p className="font-satoshi font-light">{coach.excerpt}</p>
                <Button className="w-fit mt-6">{coach.cta}</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Coaches;
