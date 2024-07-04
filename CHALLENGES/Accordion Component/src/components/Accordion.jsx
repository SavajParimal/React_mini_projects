import AccordionItem from "./AccordionItem";
import React, { useState } from "react";

function Accordion() {
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  const [seter, setSeter] = useState(null);

  return (
    <>
      <div className="accordion">
        {faqs.map((faq, i) => (
          <AccordionItem title={faq.title} curOpen={seter} setSeter={setSeter} i={i} key={i} text={faq.text} />
        ))}
      </div>
    </>
  );
}

export default Accordion;
