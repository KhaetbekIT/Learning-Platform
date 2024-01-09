import { Fragment } from "react";
import propTypes from "prop-types";

const FormLabel = ({
    children,
    className,
    id,
    ...props
}) => {
    return (
        <Fragment>
            <label className={className} id={id} {...props}>
                {children}
            </label>
        </Fragment>
    )
}

FormLabel.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    id: propTypes.string,
}

export default FormLabel;