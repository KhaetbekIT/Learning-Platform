import { Fragment } from "react"
import propTypes from "prop-types";

const Form = ({
    children,
    className,
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

From.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
}

export default Form;