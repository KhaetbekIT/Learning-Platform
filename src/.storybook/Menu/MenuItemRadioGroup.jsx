import classNames from "classnames"
import { Fragment } from "react"
import propTypes from 'prop-types'

const MenuItemRadioGroup = ({
    className,
    defaultSelectedItem,
    items,
    itemToString,
    label,
    onChange,
    selectedItem,
    ...props
}) => {
    const classes = classNames
        ([
            className,
            `MenuItemRadioGroup`
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
MenuItemRadioGroup.propTypes = {
    className: propTypes.string,
    defaultSelectedItem: propTypes.any,
    items,
    itemToString,
    label: propTypes.string,
    onChange,
    selectedItem: propTypes.any,
}

export default { MenuItemRadioGroup }