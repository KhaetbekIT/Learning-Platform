import PropTypes from "prop-types";
import classNames from "classnames";
import { useState } from "react";
import { Image } from "./../image/Image.jsx";
import { Button } from "./../button/Button.jsx";
import { Icons } from "./../icon/Icons.jsx";
import { Drawer } from "./../drawer/Drawer.jsx";

const Menu = ({ logo, open, username, job }) => {
  const [ActiveButton, setActiveButton] = useState(1);
  const [OpenDrawer, setOpenDrawer] = useState(false);

  return (
    <menu className={classNames("menu", open ? "active" : null)}>
      <Image src={logo} className="menu-logo" />

      <div className="menu-items">
        <Button
          className={"menu-button"}
          active={ActiveButton === 1}
          onClick={() => setActiveButton(1)}
          htmlType="button"
          icon={<Icons name="dashboard" />}
        >
          {open && "Dashboard"}
        </Button>
      </div>

      <div className="menu-items">
        {open && <p className={"menu-subtitle"}>workspace</p>}
        <Button
          className={"menu-button"}
          active={ActiveButton === 2}
          onClick={() => setActiveButton(2)}
          htmlType="button"
          icon={<Icons name="course" />}
        >
          {open && "Courses"}
        </Button>

        <Button
          className={"menu-button"}
          active={ActiveButton === 3}
          onClick={() => setActiveButton(3)}
          htmlType="button"
          icon={<Icons name="prototype" />}
        >
          {open && "Prototypes"}
        </Button>

        <Button
          className={"menu-button"}
          active={ActiveButton === 4}
          onClick={() => setActiveButton(4)}
          htmlType="button"
          icon={<Icons name="discussion" />}
        >
          {open && "Discussion"}
        </Button>

        <Button
          className={"menu-button"}
          active={ActiveButton === 5}
          onClick={() => setActiveButton(5)}
          htmlType="button"
          icon={<Icons name="live" />}
        >
          {open && "Live"}
        </Button>
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
};

export { Menu };
