import { CardCourseImage } from "./Card-Course.jsx";
import "./../index.scss";
import Image from "../../../assets/other/variant-1.svg";

export default {
  title: "UI/Card-Course-Image",
  component: CardCourseImage,
  tags: ["autodocs"],
};

export const Default = {
  name: "Карточка курсов",
  args: {
    mode: "dark",
    lessons: 1,
    subtitle: "Fundamental to IoT",
    by: "Khaetbek",
    icon: Image,
    title: "Overview of available development boards"
  },
};
