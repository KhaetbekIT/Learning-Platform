import classNames from "classnames"
import { Fragment } from "react"
import propsTypes from 'prop-types'

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
MenuItemRadioGroup.propsTypes = {
    className: propsTypes.string,
    defaultSelectedItem: propsTypes.any,
    items,
    itemToString,
    label: propsTypes.string,
    onChange,
    selectedItem: propsTypes.any,
}

export default { MenuItemRadioGroup }