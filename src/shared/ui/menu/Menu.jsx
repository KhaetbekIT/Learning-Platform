import PropTypes from "prop-types";
import classNames from "classnames";
import { useState } from "react";
import { Image } from "./../image/Image.jsx";
import { Button } from "./../button/Button.jsx";
import { Icons } from "./../icon/Icons.jsx";
import { Drawer } from "./../drawer/Drawer.jsx";
import { Navigate } from "react-router-dom";

const Menu = ({ logo, open, username, job, className, list, initial }) => {
  const [ActiveButton, setActiveButton] = useState(1);
  const [OpenDrawer, setOpenDrawer] = useState(false);

  const menuItem = list?.map((item, index) => {
    return <Button
      key={index}
      className={"menu-button"}
      active={ActiveButton === item?.key}
      onClick={() => {
        setActiveButton(item?.key)
      }}
      icon={item?.icon}
      to={item?.link}
    >
      {open && item?.label}
    </Button>
  })

  return (
    <menu className={classNames("menu", open ? "active" : null, className)}>
      <Image src={logo} className="menu-logo" />

      <div className="menu-items">
        <Button
          className={"menu-button"}
          active={ActiveButton === 1}
          onClick={() => setActiveButton(1)}
          icon={<Icons name="dashboard" />}
          to={initial}
        >
          {open && "Dashboard"}
        </Button>
      </div>

      <div className="menu-items">
        {open && <p className={"menu-subtitle"}>workspace</p>}
        {menuItem}
      </div>

      <div className="menu-drawer-wrapper">
        {OpenDrawer && (
          <div className="menu-items">
            <Button
              className={"menu-button"}
              active={ActiveButton === 6}
              onClick={() => setActiveButton(6)}
              htmlType="button"
              icon={<Icons name="logout" />}
            >
              {open && "Logout"}
            </Button>

            <Button
              className={"menu-button"}
              active={ActiveButton === 7}
              onClick={() => setActiveButton(7)}
              htmlType="button"
              icon={<Icons name="profile" />}
            >
              {open && "Profile"}
            </Button>
          </div>
        )}

        <Drawer
          icon={OpenDrawer ? "expand-more" : "expand-less"}
          onClick={() => setOpenDrawer((prev) => !prev)}
          subtitle={open && job}
          title={open && username}
          className={"menu-drawer"}
        />
      </div>
    </menu>
  );
};

Menu.propTypes = {
  logo: PropTypes.string.isRequired,
  open: PropTypes.bool,
  job: PropTypes.string,
  username: PropTypes.string,
  className: PropTypes.string,
  list: PropTypes.array,
  initial: PropTypes.string,
};

export { Menu };
