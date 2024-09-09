import PropTypes from "prop-types";
import classNames from "classnames";
import { MdFaceUnlock } from "react-icons/md";
import { Icons } from "./../icon/Icons.jsx";

const Drawer = ({ className, title, subtitle, icon }) => {
  return (
    <div className={classNames("drawer", className)}>
      <div className="drawer-icon">
        <Icons name={"face"} />
      </div>
      {(title || subtitle) && (
        <div className={"drawer-content"}>
          {title && <h5 className={"drawer-title"}>{title}</h5>}
          {subtitle && <p className={"drawer-subtitle"}>{subtitle}</p>}
        </div>
      )}
      
      {
        icon && <Icons className={"drawer-expand"} name={icon} />
      }
    </div>
  );
};

Drawer.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.oneOf(["expand-less","expand-more"]),
};

export { Drawer };
