import { Fragment, useState } from "react";
import Accordion from "../.storybook/Accordion";
import { AccordionItem } from "../.storybook/Accordion/AccordionItem";
import Dropdown from "../.storybook/Dropdown";

const Design = () => {
  const [isOpen, setOpen] = useState(true);
  const onHeadingClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Fragment>
      <Accordion>
        <AccordionItem onHeadingClick={onHeadingClick} open={isOpen}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, molestias.
          </p>
        </AccordionItem>
      </Accordion>

      <Dropdown items={[{ name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }]} />
    </Fragment>
  );
};

export default Design;
