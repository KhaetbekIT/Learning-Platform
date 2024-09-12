import { CardPoint } from "./Point";
import "./../index.scss";
import { Icons } from "../icon/Icons";

export default {
    title: "UI/Card-Point",
    component: CardPoint,
    tags: ["autodocs"],
};

export const Default = {
    name: "Карточка",
    args: {
        icon: <Icons name={"course"} />,
        title: "Title",
        children: 3
    },
};
