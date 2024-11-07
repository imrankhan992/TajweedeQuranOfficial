import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import faqData from './FaqData'
const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full mt-8">
   
   {
    faqData.map((faq)=>{
        return (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className="md:text-2xl text-lg font-semibold">{faq.id}. {faq.question}</AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm text-[#032E3C]">
                    {faq.answer}
                </AccordionContent>
            </AccordionItem>
        )
    })
   }
  </Accordion>
  )
}

export default FAQ



  

  