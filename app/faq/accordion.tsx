"use client"
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  const [activeItem, setActiveItem] = useState(null);

  const handleAccordionClick = (itemValue: any) => {
    setActiveItem((prevItem) => (prevItem === itemValue ? null : itemValue));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={` text-xl border-b border-gray-300 py-4 flex items-center justify-center ${
              activeItem === "item-1" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleAccordionClick("item-1")}
          >
            What are the minimum and maximum number of picks I can make?
          </AccordionTrigger>
          <AccordionContent
            className={` text-xl p-4 text-center ${
              activeItem === "item-1" ? "block" : "hidden"
            }`}
          >
            The minimum number of picks is 2 while the maximum number of picks is 5.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger
            className={`text-xl border-b border-gray-300 py-4 flex items-center justify-center ${
              activeItem === "item-2" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleAccordionClick("item-2")}
          >What are the various payouts corresponding to the number of picks?</AccordionTrigger>
          <AccordionContent
            className={`text-xl p-4 text-center ${
              activeItem === "item-2" ? "block" : "hidden"
            }`}
          >
          2 picks - 3x payout 3 picks - 5x payout 4 picks - 12x payout 5 picks - 20x payout Look out for payout boosters on specific days to further increase these payouts!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger
            className={`text-xl border-b border-gray-300 py-4 flex items-center justify-center ${
              activeItem === "item-3" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleAccordionClick("item-3")}
          >Can I choose picks from different teams or different games?</AccordionTrigger>
          <AccordionContent
            className={`text-xl p-4 text-center ${
              activeItem === "item-3" ? "block" : "hidden"
            }`}
          >
          Yes, you can certainly combine picks from not only different teams but also different games. The only restriction when it comes to the picks is the following: An entry cannot have all players from the same team in a given match.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
        <AccordionTrigger
            className={`text-xl border-b border-gray-300 py-4 flex items-center justify-center ${
              activeItem === "item-4" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleAccordionClick("item-4")}
          >What is the deadline for me to place my entry?</AccordionTrigger>
          <AccordionContent
            className={`text-xl p-4 text-center ${
              activeItem === "item-4" ? "block" : "hidden"
            }`}
          >
          All entries must be placed 5 minutes before the scheduled start time of the respective games. If the start times of the players in your entries vary, then the entry must be placed 5 minutes prior to the earliest scheduled start time. If you miss this deadline, don’t worry. For we have plenty of in-play pick options offered during timeouts and inning breaks. For entries placed during the innings break, the deadline is 10 minutes after the end of the first innings(so act quick!)
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
        <AccordionTrigger
            className={`text-xl border-b border-gray-300 py-4 flex items-center justify-center ${
              activeItem === "item-5" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleAccordionClick("item-5")}
          >What happens if one of my picks does not get a chance to bat/bowl?</AccordionTrigger>
          <AccordionContent
            className={`text-xl p-4 text-center ${
              activeItem === "item-5" ? "block" : "hidden"
            }`}
          >
          In case your pick does not get a chance to bat or bowl, your pick will get pushed/go null. In other words that pick will be eliminated from your entry and your payout will drop down to the next lowest payout option, i.e. your initial 4 pick entry will now be treated as a 3 pick entry. For 2-pick entries, the user will be refunded his original entry amount and the bet will be canceled.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
        <AccordionTrigger
            className={`text-xl border-b border-gray-300 py-4 flex items-center justify-center ${
              activeItem === "item-6" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleAccordionClick("item-6")}
          >I just won an entry, why does this not reflect in my balance?</AccordionTrigger>
          <AccordionContent
            className={`text-xl p-4 text-center ${
              activeItem === "item-6" ? "block" : "hidden"
            }`}
          >
          Congratulations! Unfortunately, there is a brief processing time on our end which may result in delays such as these. Expect to receive your money in 12 hours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
        <AccordionTrigger
            className={`text-xl border-b border-gray-300 py-4 flex items-center justify-center ${
              activeItem === "item-7" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleAccordionClick("item-7")}
          >When can I request a withdrawal?</AccordionTrigger>
          <AccordionContent
            className={`text-xl p-4 text-center ${
              activeItem === "item-7" ? "block" : "hidden"
            }`}
          >
          We have a 1x playthrough requirement for all deposits. This means for instance if you deposited Rs. 1000, you must place Rs. 1000 worth of entries before withdrawing.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
        <AccordionTrigger
            className={`text-xl border-b border-gray-300 py-4 flex items-center justify-center ${
              activeItem === "item-8" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleAccordionClick("item-8")}
          >What is the difference between promo funds and regular funds?</AccordionTrigger>
          <AccordionContent
            className={`text-xl p-4 text-center ${
              activeItem === "item-8" ? "block" : "hidden"
            }`}
          >
          Regular funds are funds in your Baazi account which are funds you get from depositing or winning entries. These are withdrawable funds.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }
  