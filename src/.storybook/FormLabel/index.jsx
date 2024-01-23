import { Fragment } from "react";
import propTypes from "prop-types";

const FormLabel = ({ children, label, className, id, ...props }) => {
  return (
    <Fragment>
      <label className={className} id={id} {...props}>
        <span> {label} </span>
        {children}
      </label>
    </Fragment>
  );
};

FormLabel.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  id: propTypes.string,
  label: propTypes.string,
};

export default FormLabel;
