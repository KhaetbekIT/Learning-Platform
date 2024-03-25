import { Fragment } from "react";
import { ConfigProvider, Typography } from "antd";
import classNames from "classnames";
import TypographyStyle from "./title.module.scss";

const Title = ({
  className,
  children,
  level = 1,
  mb = 0.5,
  mt = 1.2,
  colorText = "inherit",
}) => {
  className = classNames([
    TypographyStyle["Typography"],
    TypographyStyle[`Typography-${level}`],
  ]);
  return (
    <Fragment>
      <ConfigProvider
        theme={{
          components: {
            Typography: {
              titleMarginBottom: mb,
              titleMarginTop: mt,
              colorText: colorText,
            },
          },
        }}
      >
        <Typography.Title level={level}>
          <span className={className}>{children}</span>
        </Typography.Title>
      </ConfigProvider>
    </Fragment>
  );
};

export { Title };
