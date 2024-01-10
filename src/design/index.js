import { Children, Fragment, useState } from "react";
import Accordion from "../.storybook/Accordion";
import { AccordionItem } from "../.storybook/Accordion/AccordionItem";
import Dropdown from "../.storybook/Dropdown";
import Form from "../.storybook/Form";

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

      <Dropdown items={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 5 }]} initialSelectedItem={["Open"]} />

      <Form className="form">
        <input type="text" placeholder="name" required />
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="password" required />
        <button>send</button>
      </Form>
    </Fragment>
  );
};

export default Design;
