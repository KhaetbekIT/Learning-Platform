import { CardCourse, CardCourseImage } from "./Card-Course.jsx";
import "./../index.scss";
import LogoImage from "../../../assets/other/logo.png";

export default {
  title: "UI/Card-Course",
  component: CardCourse,
  tags: ["autodocs"],
};

export const Default = {
  name: "Карточка курсов",
  args: {
    course: "Machine Learning",
    title: "Basic data-structure and algorithm",
    logo: LogoImage,
    illustration: "first",
    subtitle: "Machine Learning and Data analysis",
    by: "Shams Tabrez",
    lessons: 12,
  },
};
