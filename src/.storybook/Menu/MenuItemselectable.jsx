import classNames from "classnames"
import { Fragment } from "react"
import propTypes from 'prop-types'

const MenuItemSelectable = ({
    className,
    defaultSelected,
    label,
    onChange,
    selected,
    ...props
}) => {
    const classes = classNames
        ([
            className,
            `MenuItemSelectable`
        ])
    return (
        <Fragment>
            <div
                className={classes}
                onChange={onChange}
                {...props}
            >

            </div>
        </Fragment>
    )
}
MenuItemSelectable.propTypes = {
    className: propTypes.string,
    defaultSelected: propTypes.bool,
    label: propTypes.string,
    onChange: propTypes.func,
    selected: propTypes.bool,
}

export default { MenuItemSelectable }