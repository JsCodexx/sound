"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";

// import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection1() {
  return (
    <section className="bg-background section-padding-y" aria-labelledby="faq-heading">
      <div
        className="container-padding-x flex max-w-8xl mx-10 flex-col gap-10 md:gap-12">


        <Accordion type="single" defaultValue="item-1" aria-label="FAQ items" >
          <AccordionItem value="item-1" >
            <div >
              <div>
                <AccordionTrigger className="text-left  font-bold text-xl">
                  What is shadcn/ui?
                </AccordionTrigger>
              </div>
              <div>
                <AccordionContent className="text-muted-foreground text-sm">
                  Shadcn/ui is a popular, open-source UI component library for React
                  that focuses on flexibility and customization. It provides a set
                  of accessible, customizable components that you can use to build
                  modern web applications.
                </AccordionContent>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-xl font-bold">
              What is shadcn/ui kit for Figma?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              The shadcn/ui kit for Figma is a comprehensive design resource
              that mirrors the components and styling of the shadcn/ui library.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-xl font-bold">
              I'm not familiar with shadcn/ui. Can I still use this kit?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Yes, you can still use this kit even if you're new to shadcn/ui.
              The components are designed to be intuitive and easy to use.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-xl font-bold">
              Can I create multi-brand design systems with this UI kit?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Yes, the UI kit is designed to be flexible and can be customized
              for multiple brands and design systems.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" >
            <AccordionTrigger className="text-left text-xl font-bold">
              How will this kit save me time?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              This kit provides pre-built components and consistent styling,
              reducing development and design time significantly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="">
            <AccordionTrigger className="text-left text-xl font-bold ">
              How does this improve my collaboration with developers?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              The kit provides a shared language and consistent components that
              both designers and developers can reference.
            </AccordionContent>
          </AccordionItem>
        </Accordion>


      </div>
    </section>
  );
}
