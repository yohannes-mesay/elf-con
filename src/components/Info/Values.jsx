import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function Values() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="flex justify-center gap-36 flex-wrap mt-5 sm:mt-20">
      <div>
        <p className="uppercase font-thin sm:text-xl text-sm mb-3">about us</p>
        <p className="md:w-96 font-extrabold tracking-normal uppercase sm:text-2xl">
          WE ARE DEDICATED TO TRANSFORMING VISIONS INTO REMARKABLE STRUCTURES.
          WITH YEARS OF EXPERIENCE IN THE CONSTRUCTION INDUSTRY.
        </p>
      </div>
      <div>
        <p className="uppercase font-thin sm:text-xl text-sm">our values</p>
        <div className="w-[30rem]">
          <Accordion

            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="customex" />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontFamily: "Kanit",
                fontSize: "normal",
              }}
            >
              Quality
            </AccordionSummary>
            <AccordionDetails className="text-sm font-[kanit]">
              We utilize the finest materials and employ meticulous
              craftsmanship to deliver superior results. Our focus on quality
              ensures that every project we undertake stands the test of time,
              meeting the highest industry standards.
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="customex" />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontFamily: "Kanit",
                fontSize: "normal",
              }}
            >
              Performance
            </AccordionSummary>
            <AccordionDetails className="text-sm font-[kanit]">
              We strive for excellence in every aspect of our work, from project
              planning to execution. Our team’s relentless pursuit of efficiency
              and innovation guarantees optimal performance, delivering
              exceptional outcomes for our clients.
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="customex" />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontFamily: "Kanit",
                fontSize: "normal",
              }}
            >
              Commitment
            </AccordionSummary>
            <AccordionDetails className="text-sm font-[kanit]">
              Our commitment is the foundation of everything we do. We pledge to
              meet and exceed client expectations through dedicated service,
              ensuring every project is completed on time and within budget. Our
              unwavering commitment fosters trust and long-lasting relationships
              with our clients.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Values;
