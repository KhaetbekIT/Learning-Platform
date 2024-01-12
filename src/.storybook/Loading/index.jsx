import classNames from "classnames"
import { Fragment } from "react"
import propsTypes from "prop-types";

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

Loading.propsTypes = {
    active: propsTypes.bool,
    className: propsTypes.string,
    description: propsTypes.string,
    id: propsTypes.bool,
    small: propsTypes.bool,
    withOverlay: propsTypes.bool,
}
Loading.defaultProps = {
    active: true,
    description: 'loading',
    small: false,
    withOverlay: true,
}

export default Loading;