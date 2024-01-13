import classNames from "classnames"
import { Fragment } from "react"
import propTypes from 'prop-types'

const MenuItemGroup = ({
    children,
    className,
    label,
    ...props
}) => {
    const classes = classNames
        ([
            className,
            `MenuItemGroup`
        ])
    return (
        <Fragment>
            <div
                className={classes}
                {...props}
            >
                {children}
            </div>
        </Fragment>
    )
}
MenuItemGroup.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    label: propTypes.string,
}

export default { MenuItemGroup }