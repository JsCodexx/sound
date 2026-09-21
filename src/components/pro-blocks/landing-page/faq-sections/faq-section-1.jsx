"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useContext } from 'react'
import { CreateLoaders } from '@/contextApi/context'
import { BlocksWave } from '@/components/ui/Loader'

import { useNavigate } from "react-router-dom";


export function FaqSection1({ faqs, load }) {
  const { showloading, hideloading, loading } = useContext(CreateLoaders);
  console.log(faqs)
  const navigate = useNavigate()

  function help() {
    navigate("/help")
  }

  return (
    <section className="bg-background py-10" aria-labelledby="faq-heading">

      <div
        className="container-padding-x flex  mx-10 flex-col justify-center item-center gap-10 md:gap-12">
        {load && <BlocksWave />}

        <Accordion type="single" defaultValue="item-1" aria-label="FAQ items" >
          
          {!load && faqs?.map((data) => (
            <AccordionItem value={data.id} >
              <div >

                <div>
                  <AccordionTrigger className="text-left decoration-accent  font-bold md:text-xl" >
                    {data.question}
                  </AccordionTrigger>
                </div>
                <div>
                  <AccordionContent>
                    {data.answer}
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </section>
  );
}
