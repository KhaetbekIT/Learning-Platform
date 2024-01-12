import classNames from "classnames"
import { Fragment } from "react"
import propsTypes from 'prop-types'

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
MenuItemSelectable.propsTypes = {
    className: propsTypes.string,
    defaultSelected: propsTypes.bool,
    label: propsTypes.string,
    onChange: propsTypes.func,
    selected: propsTypes.bool,
}

export default { MenuItemSelectable }