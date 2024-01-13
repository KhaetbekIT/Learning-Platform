import classNames from "classnames"
import { Fragment } from "react"
import propTypes from 'prop-types'

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
MenuItemDivider.propTypes = {
    className: propTypes.string,
}

export default { MenuItemDivider }