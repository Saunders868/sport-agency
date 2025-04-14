import Form from "@/components/elements/form";
import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import { getContactPage } from "@/sanity/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const data: ContactPageData = await getContactPage();
  console.log(data.social.socials);

  return (
    <Section className="sm:py-0 overflow-hidden">
      <Container>
        <div className="grid sm:grid-cols-2 w-full items-center justify-between">
          <div>
            <div className="mb-12">
              <h1 className="uppercase text-hero font-coolvetica">
                {data.title}
              </h1>
              <p>{data.hero.tagline}</p>
              <div className="flex gap-6 mt-6">
                {data.social.socials.map((item, index) => (
                  <Link href={item.cta} key={index} className="underline">
                    {item.heading}
                  </Link>
                ))}
              </div>
            </div>
            <Form />
          </div>
          <div className="hidden sm:block relative h-full -mr-24">
            <Image
              src={data.hero.heroImage || "/images/aboutus.jpg"}
              alt=""
              fill
              className="object-cover pl-12 h-full w-full object-top"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Page;
