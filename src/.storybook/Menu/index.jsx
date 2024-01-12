import classNames from "classnames"
import { Fragment, useState } from "react"
import porpsTypes from 'prop-types'



const Menu = ({
    children,
    className,
    label,
    mode,
    onClose,
    onOpen,
    open,
    size,
    target,
    x,
    y,
    as,
    ...props
}) => {
    const Ul = as;
    const classes = classNames
        ([
            className,
            `media__${size}`,
            `Menu`
        ])



    return (
        <Fragment>
            <Ul
                className={classes}
                size={size}
                onClose={onOpen}
                {...props}
            >
            </Ul>
        </Fragment>
    )
}

Menu.porpsTypes = {
    children: porpsTypes.node,
    className: porpsTypes.string,
    label: porpsTypes.string,
    mode: porpsTypes.oneOf
        ([
            'full',
            'basic',
        ]).isRequired,
    onClose: porpsTypes.bool,
    onOpen: porpsTypes.bool,
    open: porpsTypes.bool,
    size: porpsTypes.oneOf([
        'xs',
        'sm',
        'md',
        'lg',
    ]).isRequired,
    target: this.porpsTypes.object,
    x: porpsTypes.number,
    y: porpsTypes.number,
    as: porpsTypes.bool,
}

Menu.defaultProps = {
    mode: 'full',
    size: 'sm',
    target: 'document.body',
    x: 0,
    y: 0,
}


export default Menu;