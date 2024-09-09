import "./../index.scss";
import { Search } from "./Search";

export default {
  title: "UI/Search",
  component: Search,
  tags: ["autodocs"],
};

export const Default = {
  name: "Поиск",
  args: {
    data: [
      { name: "Ivan", surname: "Petr", age: 32 },
      { name: "Andreev", surname: "Alexandr", age: 20 },
    ],
  },
};
