import { Fragment } from "react"

const MenuItemDivider = ({
    className,
    ...props
}) => {
    return (
        <Fragment>
            <div className={className} {...props}
            ></div>
        </Fragment>
    )
}

export {MenuItemDivider}