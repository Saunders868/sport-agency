"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "@/components/layouts/section";
import Container from "@/components/layouts/container";
import Image from "next/image";
import Button from "@/components/elements/button";
gsap.registerPlugin(ScrollTrigger);

const Rally = ({ data }: { data: RallyData }) => {
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        scroller: "body",
        trigger: imageWrapRef.current,
        scrub: true,
        // markers: true,
        start: "-200% top",
        end: "-100% top",
        toggleActions: "play reverse play reverse",
      },
      scale: 1,
      borderRadius: 30,
    });
  }, []);
  return (
    <Section className="border-b">
      <Container className="flex flex-col gap-6 justify-center items-center">
        {" "}
        <h2 className="font-coolvetica leading-none z-20 text-hero text-center">
          Ready to <br />
          Rally?
        </h2>
        <div
          className="sm:h-[600px] h-[450px] -mt-16 relative w-full"
          ref={imageWrapRef}
        >
          <Image
            ref={imageRef}
            src={data.image || "/images/locations.jpg"}
            alt="rally images"
            fill
            className="w-full h-full scale-150 duration-300"
          />
        </div>
        <Button color="secondary" fullWidth>
          {data.cta || "Join the camp"}
        </Button>
      </Container>
    </Section>
  );
};

export default Rally;
