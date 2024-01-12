import classNames from "classnames"
import { Fragment } from "react"
import propsTypes from 'prop-types'

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
MenuItemGroup.propsTypes = {
    children: propsTypes.node,
    className: propsTypes.string,
    label: propsTypes.string,
}

export default { MenuItemGroup }