import { Fragment } from "react"
import propTypes from "prop-types";

const FormGroup = ({
    children,
    className,
    invalid,
    legendId,
    legendText,
    message,
    messageText,
    ...props
}) => {

    return (
        <Fragment>
            <div className={className} {...props}>
                {children}
            </div>
        </Fragment>
    )
}

FormGroup.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    invalid: propTypes.bool,
    legendId: propTypes.node,
    message: propTypes.bool,
    messageText: propTypes.string
}

FormGroup.defaultProps = {
    invalid: false,
    message: false,
    messageText: ''
}

export default FormGroup;