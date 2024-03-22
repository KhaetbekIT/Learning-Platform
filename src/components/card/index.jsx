import Image from "@/components/image";
import { Button, ConfigProvider, Flex, Typography } from "antd";
import classNames from "classnames";
import React, { Fragment } from "react";
import { PiUserFill } from "react-icons/pi";
import "tailwindcss/tailwind.css";
import CardStyle from "./card.module.scss";
import CardImage1 from "../../assets/image/Illustrator-1.svg";
import CardImage2 from "../../assets/image/Illustrator-2.svg";
import CardImage3 from "../../assets/image/Illustrator-2-1.svg";
import Logo from "../../assets/image/logo-for-card.svg";

export const Card = ({ variant, view, className, ...props }) => {
  if (variant === 1 && view === "default") {
    className = classNames([
      "Card",
      CardStyle[`Card__variant-${variant}`],
      CardStyle[`Card__view-${view}`],
    ]);
    return (
      <Fragment>
        <div className={`${className} w-80`} {...props}>
          <div className={`relative p-1 ${CardStyle["Card__top"]}`}>
            <div className={CardStyle[`Card__titles`]}>
              <ConfigProvider
                theme={{
                  components: {
                    fontWeightStrong: 400,
                    titleMarginBottom: 0,
                    titleMarginTop: 0,
                    fontSizeHeading3: 16,
                  },
                }}
              >
                <Typography.Title
                  level={3}
                  className={`inline-block ${CardStyle["Card__subtitle"]}`}
                >
                  {props.bannertitle}
                </Typography.Title>

                <Typography.Title
                  level={3}
                  className={`inline-block ${CardStyle["Card__title"]}`}
                >
                  {props.bannersubtitle}
                </Typography.Title>
              </ConfigProvider>
            </div>

            <Image
              src={Logo}
              alt={`Logo`}
              className={`max-w-32 mt-2.5 ${CardStyle["Card__logo"]}`}
            />
            <Image
              src={CardImage1}
              className={CardStyle["Card__illustrator"]}
            />
          </div>

          <div className={`py-3.5 px-4 ${CardStyle[`Card__body`]}`}>
            <ConfigProvider
              theme={{
                components: {
                  Typography: {
                    fontWeightStrong: 400,
                    titleMarginBottom: 0,
                    fontSizeHeading3: 16,
                  },
                },
              }}
            >
              <Typography.Title
                level={3}
                className={`font-normal ${CardStyle["Card__body-title"]}`}
              >
                {props.title}
              </Typography.Title>

              <Flex
                justify={"space-between"}
                align={"center"}
                className={`mt-1.5`}
              >
                <ConfigProvider
                  theme={{
                    components: {
                      Typography: {
                        fontSizeHeading3: 16,
                      },
                      Button: {
                        paddingBlock: 0,
                        paddingInline: 0,
                        colorBorder: "none",
                        defaultHoverBorderColor: "none",
                      },
                    },
                  }}
                >
                  <Button
                    icon={<PiUserFill />}
                    className={`flex gap-1.5 items-center`}
                  >
                    {props.copyright}
                  </Button>
                  <Typography.Text className={`flex gap-1.5 items-center`}>
                    <span>12 lessons</span>
                    <span>&#x2022;</span>
                    <span>7 quiz</span>
                  </Typography.Text>
                </ConfigProvider>
              </Flex>
            </ConfigProvider>
          </div>
        </div>
      </Fragment>
    );
  }

  if (variant === 2 && view === "secondary") {
    className = classNames([
      "Card",
      CardStyle[`Card__variant-${variant}`],
      CardStyle[`Card__view-${view}`],
    ]);

    return (
      <Fragment>
        <div className={`${className} w-80`} {...props}>
          <div className={`relative p-1 ${CardStyle["Card__top"]}`}>
            <div className={CardStyle[`Card__titles`]}>
              <ConfigProvider
                theme={{
                  components: {
                    fontWeightStrong: 400,
                    titleMarginBottom: 0,
                    titleMarginTop: 0,
                    fontSizeHeading3: 16,
                  },
                }}
              >
                <Typography.Title
                  level={3}
                  className={`inline-block ${CardStyle["Card__subtitle"]}`}
                >
                  {props.bannertitle}
                </Typography.Title>

                <Typography.Title
                  level={3}
                  className={`inline-block ${CardStyle["Card__title"]}`}
                >
                  {props.bannersubtitle}
                </Typography.Title>
              </ConfigProvider>
            </div>

            <Image
              src={Logo}
              alt={`Logo`}
              className={`max-w-32 mt-2.5 ${CardStyle["Card__logo"]}`}
            />
            <Image
              src={CardImage2}
              className={CardStyle["Card__illustrator"]}
            />
          </div>

          <div className={`py-3.5 px-4 ${CardStyle[`Card__body`]}`}>
            <ConfigProvider
              theme={{
                components: {
                  Typography: {
                    fontWeightStrong: 400,
                    titleMarginBottom: 0,
                    fontSizeHeading3: 16,
                  },
                },
              }}
            >
              <Typography.Title
                level={3}
                className={`font-normal ${CardStyle["Card__body-title"]}`}
              >
                {props.title}
              </Typography.Title>

              <Flex
                justify={"space-between"}
                align={"center"}
                className={`mt-1.5`}
              >
                <ConfigProvider
                  theme={{
                    components: {
                      Typography: {
                        fontSizeHeading3: 16,
                      },
                      Button: {
                        paddingBlock: 0,
                        paddingInline: 0,
                        colorBorder: "none",
                        defaultHoverBorderColor: "none",
                      },
                    },
                  }}
                >
                  <Button
                    icon={<PiUserFill />}
                    className={`flex gap-1.5 items-center`}
                  >
                    {props.copyright}
                  </Button>
                  <Typography.Text className={`flex gap-1.5 items-center`}>
                    <span>12 lessons</span>
                    <span>&#x2022;</span>
                    <span>7 quiz</span>
                  </Typography.Text>
                </ConfigProvider>
              </Flex>
            </ConfigProvider>
          </div>
        </div>
      </Fragment>
    );
  }

  if (variant == 3 && view === "light") {
    className = classNames([
      CardStyle["Card"],
      className,
      CardStyle[`Card__variant-${variant}`],
      CardStyle[`Card__view-${view}`],
    ]);
    return (
      <Fragment>
        <div
          className={`w-80 pt-4 px-6 pb-7 relative rounded-large ${className}`}
        >
          <div className={`flex justify-between ${CardStyle[`Card__header`]}`}>
            <span className={CardStyle[`Card__icon`]}>
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="38" height="38" rx="19" fill="#56CCF2" />
                <path
                  d="M19 28L12 24.2V18.2L8 16L19 10L30 16V24H28V17.1L26 18.2V24.2L19 28ZM19 19.7L25.85 16L19 12.3L12.15 16L19 19.7ZM19 25.725L24 23.025V19.25L19 22L14 19.25V23.025L19 25.725Z"
                  fill="white"
                />
              </svg>
            </span>

            <Typography.Text className={`flex gap-1.5 items-center`}>
              <span>12 lessons</span>
              <span>&#x2022;</span>
              <span>7 quiz</span>
            </Typography.Text>
          </div>

          <div className={`pt-4 space-y-2 ${CardStyle[`Card__body`]}`}>
            <ConfigProvider
              theme={{
                components: {
                  Typography: {
                    fontSizeHeading4: 14,
                    fontSizeHeading3: 16,
                    titleMarginBottom: 0,
                    titleMarginTop: 0,
                    fontWeightStrong: 400,
                  },
                },
              }}
            >
              <Typography.Title
                level={4}
                className={CardStyle["Card__title--light"]}
              >
                {props.title}
              </Typography.Title>
              <Typography.Title
                level={3}
                className={CardStyle["Card__subtitle--light"]}
              >
                {props.subtitle}
              </Typography.Title>
            </ConfigProvider>
          </div>

          <div className={`mt-14 pt-0.5 ${CardStyle[`Card__footer`]}`}>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    paddingBlock: 0,
                    paddingInline: 0,
                    colorBorder: "none",
                    defaultHoverBorderColor: "none",
                  },
                },
              }}
            >
              <Button
                icon={<PiUserFill />}
                className={`flex gap-1.5 items-center`}
              >
                {props.copyright}
              </Button>
            </ConfigProvider>

            <Image src={CardImage3} className={`absolute bottom-0 right-0`} />
          </div>
        </div>
      </Fragment>
    );
  }
};
