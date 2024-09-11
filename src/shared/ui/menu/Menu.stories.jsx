import { Menu } from "./Menu";
import "./../index.scss"
import LogoImage from "./../../../assets/other/logo.png"

export default {
  title: "UI/Menu",
  component: Menu,
  tags: ["autodocs"],
};

export const Default = {
  name: "Меню",
  args: {
    logo: LogoImage,
    open: true,
    job: "UI / UX Developer",
    username: "Mohammad Shams Tabrez"
  },
};
