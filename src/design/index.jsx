import { Card } from "@/components/card";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import "tailwindcss/tailwind.css";

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
              title={`variant: 2, view: secondary`}
              copyright={`Shams Tabrez`}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Design;
