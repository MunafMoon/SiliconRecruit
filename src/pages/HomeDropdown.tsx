import React, { useState } from 'react';

// 1. Define an interface for the shape of each accordion item
interface AccordionItemData {
  id: number;
  title: string;
  content: string; // Assuming content will be HTML string
}

// Data for your accordion items, now typed with AccordionItemData[]
const accordionData: AccordionItemData[] = [
  {
    id: 1,
    title: 'Banking, Financial Services, and Insurance',
    content: `
      Let’s talk — we’re always expanding our reach.</p>
    `,
  },
  {
    id: 2,
    title: 'Healthcare, Pharma, and Lifesciences',
    content: `
      Let’s talk — we’re always expanding our reach.</p>
      `,
      // <ul>
      //     <li>Sub-point 1</li>
      //     <li>Sub-point 2</li>
      // </ul>
  },
  {
    id: 3,
    title: 'Telecom, Media, and Technology',
    content: 'Let’s talk — we’re always expanding our reach.</p>',
  },
  {
    id: 4,
    title: 'Energy, Oil, and Gas',
    content: 'Let’s talk — we’re always expanding our reach.</p>',
  },
  // {
  //   id: 5,
  //   title: 'Question 5',
  //   content: '<p>Answer to Question 5.</p>',
  // },
  // {
  //   id: 6,
  //   title: 'Question 6',
  //   content: '<p>Answer to Question 6.</p>',
  // },
];

const Accordion: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenItemId(prevId => (prevId === id ? null : id));
  };

  return (
    <>
      {/* Embedded CSS for this component */}
      <style>{`
        /* General page background - assuming this is handled by App.css or index.css */
        /* For this component alone, we assume its parent has the background */
        /* body {
          background-color: #f0f2f5; // This matches the image background
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        } */

        .accordion-container {
          max-width: 600px; /* Adjusted to fit the right column width in the image */
          /* No specific background-color here to let parent's background show through */
          /* No box-shadow for a flat look */
          color:rgb(51, 51, 51); /* Default text color, similar to image */
          /* No border-radius */
        }

        /* Adjusting h1 if present, though in the image, it's outside the accordion part */
        .accordion-container h1 {
            text-align: left; /* Align left as in image */
            margin-bottom: 30px;
            color: #1a1a1a;
            font-size: 2.5em; /* Larger, bolder as in left section of image */
            line-height: 1.2;
            font-weight: bold;
        }

        .accordion-item-single {
          /* No border */
          background-color: transparent; /* Make background transparent */
          color: #333333; /* Consistent text color */
          margin-bottom: 0; /* No extra margin between items */
          /* No border-radius */
          /* No overflow hidden needed as no borders/backgrounds */
        }

        .accordion-header-single {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0px; /* Padding top/bottom, 0px left/right to match image */
          cursor: pointer;
          font-size: 1.2em; /* Matching the font size for titles */
          font-weight: bold; /* Bold as in the image */
          user-select: none;
          background-color: transparent; /* Transparent header background */
          border-bottom: 1px solid #e0e0e0; /* A subtle line at the bottom of each header */
          /* Ensure text aligns with the overall layout */
        }
        /* Last header should not have a border-bottom */
        .accordion-item-single:last-child .accordion-header-single {
            border-bottom: none;
        }


        .accordion-header-single h3 {
          margin: 0;
          font-size: inherit;
          color: #172959; /* Darker text for header titles */
        }

        .accordion-content-single {
          padding: 15px 0px 25px 0px; /* Padding for content. More padding at bottom */
          background-color: transparent; /* Transparent content background */
          border-top: none; /* No border here */
          line-height: 1.6;
        }

        /* For the dummy text within the content */
        .accordion-content-single p,
        .accordion-content-single ul {
          margin-bottom: 1em;
          margin-top: 0;
          color: #555555; /* Slightly lighter text for content, as in image */
        }
        .accordion-content-single ul {
            padding-left: 20px;
        }

        .arrow-single {
          transition: transform 0.3s ease;
          font-size: 1em; /* Adjust size to match image */
          color: #666666; /* Darker arrow color for visibility */
        }

        .arrow-single.open {
          transform: rotate(180deg);
        }
      `}</style>

      <div className="accordion-container">
        {/* The "Innovation Across Industries" title appears to be outside the accordion,
            but for a single component, I'll include a placeholder or you can remove it
            if your App.tsx already has it. */}
        {/* <h1>Innovation Across<br/>Industries</h1> */} {/* If you want this header here */}

        {accordionData.map((item: AccordionItemData) => (
          <div key={item.id} className="accordion-item-single">
            <div
              className="accordion-header-single"
              onClick={() => toggleAccordion(item.id)}
            >
              <h3>{item.title}</h3>
              <span className={`arrow-single ${openItemId === item.id ? 'open' : ''}`}>
                &#9660;
              </span>
            </div>
            {openItemId === item.id && (
              <div
                className="accordion-content-single"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;