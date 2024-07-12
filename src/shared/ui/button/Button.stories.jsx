import { Button } from "./Button.jsx";

export default {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
};

export const Primary = {
  name: "Первостепенная",
  args: {
    children: "Primary",
  },
};
export const Secondary = {
  name: "Второстепенная ",
  args: {
    children: "black",
  },
  parameters: {
    docs: {
      description: {
        story: "Черная кнопка с белым текстом",
      },
    },
  },
};
