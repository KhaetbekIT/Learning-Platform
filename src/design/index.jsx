import { Card } from "@/components/card";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import 'tailwindcss/tailwind.css'; ``

const Design = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Design</title>
      </Helmet>
      <section>
        <div className="container mx-auto">
          <Card
            img={""}
            imgError={"nature"}
            title={"Hello world"}
            name={"Yunus"}
            lessons={"12 lessons"}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Design;
