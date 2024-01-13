import classNames from "classnames"
import { Fragment } from "react"
import propTypes from 'prop-types'



const MenuButton = ({
    children,
    className,
    disabled,
    kind,
    label,
    size,
    tabIndex,
    ...props
}) => {
    const Ul = as;
    const classes = classNames
        ([
            className,
            `media__${size}`,
            `MenuButton`
        ])



    return (
        <Fragment>
            <Ul
                className={classes}
                disabled={disabled}
                size={size}
                {...props}
            >
                {children}
            </Ul>
        </Fragment>
    )
}

MenuButton.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    disabled: propTypes.bool,
    kind: propTypes.oneOf
        ([
            'primary',
            'tertiary',
            'ghost',
        ]).isRequired,
    label: propTypes.string,
    size: propTypes.oneOf
        ([
            'sm',
            'md',
            'lg',
        ]).isRequired,
    tabIndex: propTypes.number,

}

MenuButton.defaultProps = {
    kind: 'primary',
    size: 'lg',
    tabIndex: 0,
}


export default MenuButton;