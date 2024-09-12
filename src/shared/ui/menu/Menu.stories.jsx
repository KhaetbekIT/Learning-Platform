import { Menu } from "./Menu";
import "./../index.scss"
import LogoImage from "./../../../assets/other/logo.png"
import { Icons } from "../icon/Icons";

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
    username: "Mohammad Shams Tabrez",
    list: [
      { icon: <Icons name={"course"} />, label: "Course", link: "/course", key: "1" },
      { icon: <Icons name={"prototype"} />, label: "Prototype", link: "/prototype", key: "2" },
      { icon: <Icons name={"discussion"} />, label: "Discussion", link: "/discussion", key: "3" },
      { icon: <Icons name={"live"} />, label: "Live", link: "/live", key: "4" },
    ]
  },
};
