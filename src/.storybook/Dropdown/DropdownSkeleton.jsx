import propTypes from "prop-types";
import { Fragment } from "react";

const DropdownSkeleton = ({
    className,
    size,
    ...props
}) => {
    return (
        <Fragment>
            <div
                className={className}
                size={size}
                {...props}
            >
            </div>
        </Fragment>
    )
}

export { DropdownSkeleton }