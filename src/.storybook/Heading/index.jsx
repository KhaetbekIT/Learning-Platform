import { Fragment } from "react";
import propTypes from "prop-types";

const Heading = ({
    children,
    className,
    as,
    ...props
}) => {
    const Heading = as
    return (
        <Fragment>
            <Heading className={className} {...props}>
                {children}
            </Heading>
        </Fragment>
    )
}

Heading.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    as: propTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired
}

Heading.defaultProps = {
    as: "h2"
}

export default Heading;