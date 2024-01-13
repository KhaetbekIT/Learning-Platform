import classNames from "classnames"
import { Fragment } from "react"
import propTypes from "prop-types";

const Loading = ({
    active,
    className,
    description,
    id,
    small,
    withOverlay,
    ...props
}) => {
    const classes = classNames
        ([
            className,
            `Loading`
        ])
    return (
        <Fragment>
            <div
                id={id}
                className={classes}
                description={description}
                {...props}
            >

            </div>
        </Fragment>
    )
}

Loading.propTypes = {
    active: propTypes.bool,
    className: propTypes.string,
    description: propTypes.string,
    id: propTypes.bool,
    small: propTypes.bool,
    withOverlay: propTypes.bool,
}
Loading.defaultProps = {
    active: true,
    description: 'loading',
    small: false,
    withOverlay: true,
}

export default Loading;