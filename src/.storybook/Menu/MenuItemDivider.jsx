import classNames from "classnames"
import { Fragment } from "react"
import propsTypes from 'prop-types'

const MenuItemDivider = ({
    className,
    ...props
}) => {
    const classes = classNames
        ([
            className,
            `MenuItemDivider`
        ])
    return (
        <Fragment>
            <div
                className={classes}
                {...props}
            >

            </div>
        </Fragment>
    )
}
MenuItemDivider.propsTypes = {
    className: propsTypes.string,
}

export default { MenuItemDivider }