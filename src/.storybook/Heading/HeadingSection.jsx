import { Fragment } from "react";
import propTypes from "prop-types";

const HeadingSection = ({
    as,
    children,
    className,
    level,
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

HeadingSection.propTypes = {
    as: propTypes.elementType,
    children: propTypes.node,
    className: propTypes.string,
    level: propTypes.number
}

HeadingSection.defaultProps = {
    as: "section"
}

export { HeadingSection };