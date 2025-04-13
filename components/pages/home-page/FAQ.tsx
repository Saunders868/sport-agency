import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = ({ data }: { data: FAQData }) => {
  return (
    <Section className="bg-black">
      <Container>
        <div className="flex gap-12 sm:flex-row flex-col">
          <div className="text-white">
            <h2 className="font-coolvetica text-section">
              {data.heading || "FaQs"}
            </h2>
            <p>
              {data.tagline ||
                "Can't find the answer you're looking for? Please chat to our friendly team or write us an email at"}
            </p>
            <Link
              href={
                `mailto:${data.cta}` || "mailto:saundersdaniel.coding@gmail.com"
              }
              className="text-highlight-green underline"
            >
              {data.cta || "saundersdaniel.coding@gmail.com"}
            </Link>
          </div>
          <Accordion type="single" collapsible className="w-full text-white">
            {data.faqs.map((faq: FAQ, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-highlight-green"
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
