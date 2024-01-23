import { Fragment, useState } from "react";
import Accordion from "../.storybook/Accordion";
import { AccordionItem } from "../.storybook/Accordion/AccordionItem";
import Dropdown from "../.storybook/Dropdown";
import Form from "../.storybook/Form";
import FormLabel from "../.storybook/FormLabel";
import Heading from "../.storybook/Heading";
import { HeadingSection } from "../.storybook/Heading/HeadingSection";
import ErrorBoundary from "../.storybook/ErrorBoundary";

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

      <Dropdown
        items={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 5 }]}
        initialSelectedItem={["Open"]}
      />

      <Form className="form">
        <input type="text" placeholder="name" required />
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="password" required />
        <button>send</button>
      </Form>

      <FormLabel className="FormLabel" id="lebel" label={`Form label`}>
        <input type="text" />
      </FormLabel>

      <Heading as={"h1"}>
        <HeadingSection className="h1">h1</HeadingSection>
      </Heading>
      <Heading>
        <HeadingSection className="h2">h2</HeadingSection>
      </Heading>
      <Heading as={"h3"}>
        <HeadingSection className="h3">h3</HeadingSection>
      </Heading>
      <Heading as={"h4"}>
        <HeadingSection className="h4">h4</HeadingSection>
      </Heading>
      <Heading as={"h5"}>
        <HeadingSection className="h5">h5</HeadingSection>
      </Heading>
      <Heading as={"h6"}>
        <HeadingSection className="h6">h6</HeadingSection>
      </Heading>

      <ErrorBoundary fallback="An error occurred.">
        Toggle throwing error
      </ErrorBoundary>
    </Fragment>
  );
};

export default Design;
