import { Card } from "@/components/card";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import "tailwindcss/tailwind.css";
import { Title } from "@/components/title";

const Design = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Design</title>
      </Helmet>
      <section>
        <div className="container mx-auto">
          <div className="flex gap-2 ">
            <Card
              variant={1}
              view={"default"}
              bannertitle={`Machine Learning`}
              bannersubtitle={`Basic data-structure and algorithm`}
              title={`Variant: 1, view: default`}
              copyright={`Shams Tabrez`}
            />

            <Card
              variant={2}
              view={"secondary"}
              bannertitle={`Machine Learning`}
              bannersubtitle={`Basic data-structure and algorithm`}
              title={`variant: 2, view: secondary`}
              copyright={`Shams Tabrez`}
            />

            <Card
              variant={3}
              view={"light"}
              bannertitle={`Machine Learning`}
              subtitle={`Overview of available development boards`}
              title={`variant: 3, view: light`}
              copyright={`Shams Tabrez`}
            />

            <Card
              variant={4}
              view={"dark"}
              bannertitle={`Machine Learning`}
              subtitle={`Overview of available development boards`}
              title={`variant: 4, view: dark`}
              copyright={`Shams Tabrez`}
            />

            <Card variant={5} view={"solution"} />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <Title mb={3} level={3} colorText={"red"}>
            1 - Heading 1
          </Title>
        </div>
      </section>
    </Fragment>
  );
};

export default Design;
