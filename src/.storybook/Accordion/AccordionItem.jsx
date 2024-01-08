import { Fragment } from "react";
import propTypes from "prop-types";

const AccordionItem = ({
  children,
  className,
  disabled,
  onClick,
  onHeadingClick,
  open,
  title,
  ...props
}) => {
  return (
    <Fragment>
      <li
        className={className}
        aria-disabled={disabled}
        onClick={onClick}
        {...props}
      >
        <div className="AccordionItem__wrap" onClick={onHeadingClick}>
          <h3>{title}</h3>
          <button>Icon</button>
        </div>
        <div className="Accordion__desc" hidden={open}>
          {children}
        </div>
      </li>
    </Fragment>
  );
};

AccordionItem.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  onHeadingClick: propTypes.func,
  open: propTypes.oneOf([true, false]).isRequired,
  title: propTypes.node,
};

AccordionItem.defaultProps = {
  className: "",
  open: false,
  title: "Title",
  children: "Accordion Item text or node elements",
};

export { AccordionItem };
