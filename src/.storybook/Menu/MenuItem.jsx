import classNames from 'classnames';
import { Fragment } from 'react'
import propTypes from 'prop-types'

const MenuItem = ({
    children,
    className,
    disabled,
    kind,
    label,
    onClick,
    renderIcon,
    shortcut,
    as,
    ...props
}) => {
    const Li = as;
    const classes = classNames
        ([
            className,
            `MenuItem`
        ])
    return (
        <Fragment>
            <Li
                className={classes}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </Li>
        </Fragment>
    )
}

MenuItem.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    disabled: propTypes.bool,
    kind: propTypes.oneOf
        ([
            'default',
            'danger',
        ]).isRequired,
    label: propTypes.string,
    onClick: propTypes.func,
    renderIcon: propTypes.func,
    shortcut: propTypes.string,
    as: propTypes.string,
}

MenuItem.defaultProps = {
    kind: 'default',
    as: 'string',
}

export default { MenuItem };