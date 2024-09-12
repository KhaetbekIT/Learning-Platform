import { Button } from "./Button.jsx";
import { Icons } from "./../icon/Icons.jsx";
import "./../index.scss";
import { BrowserRouter } from "react-router-dom";

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
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Transparent = {
  name: "Без цветом и текст",
  args: {
    htmlType: "button",
    icon: <Icons name={"dashboard"} />,
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Colored2 = {
  name: "С цветом и текст",
  args: {
    htmlType: "button",
    icon: <Icons name={"dashboard"} />,
    active: true,
    children: "Button",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Transparent2 = {
  name: "Без цветом контентом",
  args: {
    htmlType: "button",
    icon: <Icons name={"dashboard"} />,
    children: "Button",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
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
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const TransparentAndBadge = {
  name: "Без цветом и уведомление",
  args: {
    htmlType: "button",
    icon: <Icons name={"dashboard"} />,
    children: "Button",
    badge: 5
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};