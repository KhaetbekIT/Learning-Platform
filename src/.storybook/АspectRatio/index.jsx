import classNames from "classnames";
import { Fragment } from "react";
import propTypes from "prop-types"

const AspectRatio = ({
    as,
    children,
    className,
    ratio,
    ...props
}) => {
    const Tag = as;
    const classes = classNames([className, `media__${size}`,
        `aspectratio`])
    return (
        <Fragment>
            <Tag
                className={classes}
                {...props}
            >
                {children}
            </Tag>
        </Fragment>
    )
}

AspectRatio.propTypes = {
    as: propTypes.bool,
    children: propTypes.node,
    className: propTypes.string,
    ratio: propTypes.oneOf(['16x9', '9x16', '2x1', '1x2', '4x3', '3x4', '3x2', '2x3', '1x1',
    ]).isRequired,
};

AspectRatio.defaultProps = {
    as: true,
    ratio: "1x1",
}

export default AspectRatio;