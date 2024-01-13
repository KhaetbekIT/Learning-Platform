import classNames from "classnames"
import { Fragment, useState } from "react"
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
    ...props
}) => {
    const classes = classNames

    const [renderIcon, setRenderIcon] = useState(false)

    onClick = () => {
        setRenderIcon(prev => !prev)
    }

    ([
        className,
        `MenuItem`
    ])

    return (
        <Fragment>
            <div
                className={classes}
                disabled={disabled}
                {...props}
                onClick={setRenderIcon}
            >
                {children}
            </div>
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
}

MenuItem.defaultProps = {
    kind: 'default',
}


export default { MenuItem };