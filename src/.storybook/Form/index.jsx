import { Fragment } from "react"
import propTypes from "prop-types";

const Form = ({
    children,
    className,
    ...props
}) => {
    return (
        <Fragment>
            <form className={className} {...props}>
                {children}
            </form>
        </Fragment>
    )
}

Form.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
}

export default Form;