import Button from "@/components/elements/button";
import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import { getAboutPage } from "@/sanity/queries";
import Image from "next/image";
import React from "react";

const AboutUsPage = async () => {
  const data: AboutPageData = await getAboutPage();

  return (
    <>
      <Section>
        <Container>
          <div className="text-center">
            <h1 className="text-hero font-coolvetica uppercase relative">
              {data.title}
            </h1>
            <div className="-mt-20">
              <Image
                src={data.hero.heroImage || "/images/locations.jpg"}
                alt="rally "
                width={450}
                height={450}
                className="w-full h-full rounded-3xl"
              />
            </div>
            <div className="text-center w-full flex flex-col items-center mt-12">
              <p className="mb-6 sm:w-3/4">{data.hero.subTitle}</p>
              <Button>{data.hero.cta}</Button>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="relative">
        <Image
          src="/images/aboutus.jpg"
          alt="rally "
          fill
          className="object-cover object-top"
        />
        <Container className="relative">
          <div className="grid sm:grid-cols-2 text-white grid-cols-1">
            <div>
              <h2 className="text-section font-coolvetica leading-none">
                {data.history.heading}
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p>{data.history.tagline}</p>
              <div>
                <p className="pb-3 border-b-highlight-green border-b text-white/60 font-satoshi uppercase">
                  Our history
                </p>
                <ul>
                  {data.history.history.length > 0 &&
                    data.history.history.map((item, index) => (
                      <li key={index} className="flex gap-6 my-3">
                        <span className="font-bold mx-0 font-coolvetica text-sub-title">
                          {item.heading}
                        </span>
                        <p className="text-base font-satoshi text-white/80">
                          {item.excerpt}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutUsPage;
