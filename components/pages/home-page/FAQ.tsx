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
import { faqs } from "@/data/mock.json";

const FAQ = () => {
  return (
    <Section className="bg-black">
      <Container>
        <div className="flex gap-12 sm:flex-row flex-col">
          <div className="text-white">
            <h2 className="font-coolvetica text-section">FaQs</h2>
            <p>
              Can&apos;t find the answer you&apos;re looking for? Please chat to
              our friendly team or write us an email at
            </p>
            <Link
              href="mailto:saundersdaniel.coding@gmail.com"
              className="text-highlight-green underline"
            >
              saundersdaniel.coding@gmail.com
            </Link>
          </div>
          <Accordion type="single" collapsible className="w-full text-white">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${faq.id}`}
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
