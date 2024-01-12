import classNames from 'classnames';
import { Fragment } from 'react';
import propsTypes from "prop-types";

const Link = ({
    as,
    children,
    className,
    disabled,
    href,
    inline,
    renderIcon,
    size,
    visited,
    ...props
}) => {
    const Link = a;
    const classes = classNames
        ([
            className,
            `media__${size}`,
            `Link`
        ])
    return (
        <Fragment>
            <Link>
                <div
                    className={classes}
                    size={size}
                    {...props}
                >
                    {children}
                </div>
            </Link>
        </Fragment>
    )
}

Link.propstypes = {
    as: propsTypes.string,
    children: propsTypes.node,
    className: propsTypes.string,
    disabled: propsTypes.bool,
    href: propsTypes.string,
    inline: propsTypes.bool,
    renderIcon: propsTypes.object,
    size: propsTypes.oneOf
        ([
            'sm',
            'md',
            'lg',
        ]),
    visited: propsTypes.bool,
}

Link.defautProps = {
    disabled: false,
    inline: false,
    visited: false,
}

export default Link;