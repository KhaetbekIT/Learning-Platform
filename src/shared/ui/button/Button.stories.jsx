import { Button } from "./Button.jsx";
import { Icons } from "./../icon/Icons.jsx";
import "./../index.scss";

export default {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
};

export const Colored = {
  name: "С цветом иконка",
  args: {
    htmlType: "button",
    icon: <Icons name={"dashboard"} />,
    active: true
  },
};

export const Transparent = {
  name: "Без цветом и текст",
  args: {
    htmlType: "button",
    icon: <Icons name={"dashboard"} />,
  },
};

export const Colored2 = {
  name: "С цветом и текст",
  args: {
    htmlType: "button",
    icon: <Icons name={"dashboard"} />,
    active: true,
    children: "Button",
  },
};

export const Transparent2 = {
  name: "Без цветом контентом",
  args: {
    htmlType: "button",
    icon: <Icons name={"dashboard"} />,
    children: "Button",
  },
};

export const ColoredAndBadge = {
  name: "С цветом и уведомление",
  args: {
    htmlType: "button",
    icon: <Icons name={"dashboard"} />,
    active: true,
    children: "Button",
    badge: 5
  },
};

export const TransparentAndBadge = {
  name: "Без цветом и уведомление",
  args: {
    htmlType: "button",
    icon: <Icons name={"dashboard"} />,
    children: "Button",
    badge: 5
  },
};