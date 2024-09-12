import PropTypes from "prop-types";
import classNames from "classnames";
import {
  MdOutlineSchool,
  MdOutlineEmojiObjects,
  MdArchitecture,
  MdMenu,
  MdExpandLess,
  MdExpandMore,
  MdOutlineDashboard,
  MdOutlineSettings,
  MdOutlinePowerSettingsNew,
  MdLogout,
  MdOutlineNotificationsNone,
  MdOutlineChat,
  MdOutlineSportsScore,
  MdOutlineSchedule,
  MdOutlineWifiTethering,
  MdOutlineAdd,
  MdOutlineLocalLibrary,
  MdOutlineCheck,
  MdGrade,
  MdEdit,
  MdFaceUnlock,
  MdOutlineSearch,
  MdPerson,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

const Icons = ({ className, style, name }) => {
  switch (name) {
    case "dashboard": {
      return (
        <MdOutlineDashboard
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "course": {
      return (
        <MdOutlineSchool
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "prototype": {
      return (
        <MdOutlineEmojiObjects
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "resources": {
      return (
        <MdArchitecture
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "hamburger": {
      return <MdMenu className={classNames("icon", className)} style={style} />;
    }
    case "expand-less": {
      return (
        <MdExpandLess className={classNames("icon", className)} style={style} />
      );
    }
    case "expand-more": {
      return (
        <MdExpandMore className={classNames("icon", className)} style={style} />
      );
    }
    case "settings": {
      return (
        <MdOutlineSettings
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "power": {
      return (
        <MdOutlinePowerSettingsNew
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "logout": {
      return (
        <MdLogout className={classNames("icon", className)} style={style} />
      );
    }
    case "profile": {
      return (
        <CgProfile className={classNames("icon", className)} style={style} />
      );
    }
    case "bell": {
      return (
        <MdOutlineNotificationsNone
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "discussion": {
      return (
        <MdOutlineChat
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "score": {
      return (
        <MdOutlineSportsScore
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "clock": {
      return (
        <MdOutlineSchedule
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "live": {
      return (
        <MdOutlineWifiTethering
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "add": {
      return (
        <MdOutlineAdd className={classNames("icon", className)} style={style} />
      );
    }
    case "model": {
      return (
        <MdOutlineLocalLibrary
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "tic": {
      return (
        <MdOutlineCheck
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "grade": {
      return (
        <MdGrade className={classNames("icon", className)} style={style} />
      );
    }
    case "edit": {
      return <MdEdit className={classNames("icon", className)} style={style} />;
    }
    case "face": {
      return (
        <MdFaceUnlock className={classNames("icon", className)} style={style} />
      );
    }
    case "search": {
      return (
        <MdOutlineSearch
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "person": {
      return (
        <MdPerson
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "telegram": {
      return (
        <FaTelegram
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "instagram": {
      return (
        <FaInstagram
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    case "youtube": {
      return (
        <FaYoutube
          className={classNames("icon", className)}
          style={style}
        />
      );
    }
    default: {
      return name;
    }
  }
};

Icons.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.oneOf([
    "dashboard",
    "course",
    "prototype",
    "resources",
    "hamburger",
    "expand-less",
    "expand-more",
    "settings",
    "power",
    "logout",
    "profile",
    "bell",
    "discussion",
    "score",
    "clock",
    "live",
    "add",
    "model",
    "tic",
    "grade",
    "edit",
    "face",
    "search",
    "person",
    "telegram",
    "instagram",
    "youtube"
  ]),
};

export { Icons };
