import classNames from 'classnames';
import { Fragment } from 'react'
import propsTypes from 'prop-types'

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

MenuItem.propsTypes = {
    children: propsTypes.node,
    className: propsTypes.string,
    disabled: propsTypes.bool,
    kind: propsTypes.oneOf
        ([
            'default',
            'danger',
        ]).isRequired,
    label: propsTypes.string,
    onClick: propsTypes.func,
    renderIcon: propsTypes.func,
    shortcut: propsTypes.string,
    as: propsTypes.string,
}

MenuItem.defaultProps = {
    kind: 'default',
    as: 'string',
}

export default { MenuItem };