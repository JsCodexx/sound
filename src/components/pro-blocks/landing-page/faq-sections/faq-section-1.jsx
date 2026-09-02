"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection1() {
  const navigate = useNavigate()

  function help() {
    navigate("/help")
  }

  return (
    <section className="bg-background py-10" aria-labelledby="faq-heading">
      <div
        className="container-padding-x flex max-w-8xl mx-10 flex-col gap-10 md:gap-12">


        <Accordion type="single" defaultValue="item-1" aria-label="FAQ items" >
          <AccordionItem value="item-1" >
            <div >
              <div>
                <AccordionTrigger className="text-left decoration-accent  font-bold text-xl" onClick={help}>
                  How do Sounds credits work?
                </AccordionTrigger>
              </div>

            </div>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-xl decoration-accent font-bold" onClick={help}>
              What is shadcn/ui kit for Figma?
            </AccordionTrigger>

          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-xl decoration-accent font-bold" onClick={help}>
              I'm not familiar with shadcn/ui. Can I still use this kit?
            </AccordionTrigger>

          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-xl decoration-accent font-bold" onClick={help}>
              Can I create multi-brand design systems with this UI kit?
            </AccordionTrigger>

          </AccordionItem>

          <AccordionItem value="item-5" >
            <AccordionTrigger className="text-left text-xl decoration-accent font-bold" onClick={help}>
              How will this kit save me time?
            </AccordionTrigger>

          </AccordionItem>

          <AccordionItem value="item-6" className="">
            <AccordionTrigger className="text-left text-xl decoration-accent font-bold " onClick={help}>
              How does this improve my collaboration with developers?
            </AccordionTrigger>

          </AccordionItem>
        </Accordion>


      </div>
    </section>
  );
}
