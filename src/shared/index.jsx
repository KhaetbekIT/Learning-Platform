import "./styles/main.scss";
import { Icons } from "./ui/icon/Icons.jsx";
import { Button } from "./ui/button/Button.jsx";
import { Avatar } from "./ui/avatar/Avatar.jsx";
import { Drawer } from "./ui/drawer/Drawer.jsx";
import { Search } from "./ui/search/Search.jsx";
import { Statistics } from "./ui/statistic/Statistics.jsx";
import { GitHubCalendar } from "./ui/calendar/GitHubCalendar.jsx";
import {Image} from "./ui/image/Image.jsx";

const Shared = {
  components: {
    Avatar,
    Button,
    Drawer,
    Icons,
    Search,
    Statistics,
    GitHubCalendar,
    Image,
  },
};
export default Shared;
