import PropTypes from "prop-types";
import classNames from "classnames";
import { Badge } from "antd";
import { NavLink } from "react-router-dom";

const Button = ({
  children,
  className,
  htmlType,
  icon,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onBlur,
  active,
  badge,
  to,
  style,
}) => {
  return to ? (
    <NavLink
      to={to}
      className={classNames("button", active && "active", className)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlur={onBlur}
      style={style}
    >
      {icon}
      {children && <span>{children}</span>}
      {badge && <Badge color={active ? "#141a2f" : "#2d9cdb"} count={badge} />}
    </NavLink>
  ) : (
    <button
      type={htmlType}
      className={classNames("button", active && "active", className)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlur={onBlur}
    >
      {icon}
      {children && <span>{children}</span>}
      {badge && <Badge color={active ? "#141a2f" : "#2d9cdb"} count={badge} />}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlType: PropTypes.oneOf(["button", "submit", "reset"]),
  icon: PropTypes.node,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onBlur: PropTypes.func,
  badge: PropTypes.number,
  to: PropTypes.string,
  active: PropTypes.bool,
  style: PropTypes.object,
};

export { Button };
