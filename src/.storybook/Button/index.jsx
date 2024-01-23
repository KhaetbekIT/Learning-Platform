import classNames from "classnames";
import { Fragment } from "react";
import propTypes from "prop-types";

const Button = ({
    as,
    children,
    className,
    dangerDescription,
    disabled,
    hasIconOnly,
    href,
    iconDescription,
    isExpressive,
    isSelected,
    kind,
    onBlur,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    renderIcon,
    role,
    size,
    tabIndex,
    tooltipAlignment,
    tooltipPosition,
    type,
    ...props
}) => {
    const Tag = as;
    const
        classes = classNames
            ([
                className,
                `media__${size}`,
                `button`,
            ])
    return (
        <Fragment>
            <Tag
                className={classes}
                disabled={disabled}
                {...props}
            >
                {children}
            </Tag>
        </Fragment>
    )
}

Button.protoTypes = {
    as: propTypes.oneOf(['func', 'string', 'bool']),
    children: propTypes.node,
    className: propTypes.string,
    dangerDescription: propTypes.string,
    disabled: propTypes.bool,
    hasIconOnly: propTypes.bool,
    href: propTypes.string,
    iconDescription: propTypes.func,
    isExpressive: propTypes.bool,
    isSelected: propTypes.bool,
    kind: propTypes.oneOf
        ([
            'primary',
            'secondary',
            'danger',
            'ghost',
            'danger--primary',
            'danger--ghost',
            'danger--tertiary',
            'tertiary',
        ]).isRequired,
    onBlur: propTypes.func,
    onClick: propTypes.func,
    onFocus: propTypes.func,
    onMouseEnter: propTypes.func,
    onMouseLeave: propTypes.func,
    renderIcon: propTypes.oneOf
        ([
            'func',
            'Object',
        ]),
    role: propTypes.string,
    size: propTypes.oneOf
        ([
            'sm',
            'md',
            'lg',
            'xl',
            '2xl',
        ]),
    tabIndex: propTypes.number,
    tooltipAlignment: propTypes.oneOf
        ([
            'start',
            'center',
            'end',
        ]).isRequired,
    tooltipPosition: propTypes.oneOf
        ([
            'top',
            'right',
            'bottom',
            'left',
        ]).isRequired,
    type: propTypes.oneOf
        ([
            'button',
            'reset',
            'submit',
        ]).isRequired,
}

Button.defaultProps = {
    dangerDescription: 'danger',
    disabled: false,
    hasIconOnly: false,
    isExpressive: false,
    kind: 'primary',
    tooltipAlignment: 'center',
    tooltipPosition: 'top',
    type: 'button',
}

export default Button;