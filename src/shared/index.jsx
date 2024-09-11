import "./styles/main.scss";
import "./ui/index.scss";
import { Icons } from "./ui/icon/Icons.jsx";
import { Button } from "./ui/button/Button.jsx";
import { Avatar } from "./ui/avatars/Avatar.jsx";
import { Drawer } from "./ui/drawer/Drawer.jsx";
import { Search } from "./ui/search/Search.jsx";
import { Statistics } from "./ui/statistics/Statistics.jsx";
import { GitHubCalendar } from "./ui/github-calendar/GitHub-Calendar.jsx";
import { Image } from "./ui/image/Image.jsx";
import { CardCourse, CardCourseImage } from "./ui/card/Card-Course.jsx";
import { Menu } from "./ui/menu/Menu.jsx";

const Shared = {
  Components: {
    Avatar,
    Button,
    Drawer,
    Icons,
    Search,
    Statistics,
    GitHubCalendar,
    Image,
    CardCourse,
    CardCourseImage,
    Menu
  },
};

export default Shared;
