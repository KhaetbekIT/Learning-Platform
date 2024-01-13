import classNames from 'classnames';
import { Fragment } from 'react';
import propTypes from "prop-types";

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

Link.propTypes = {
    as: propTypes.string,
    children: propTypes.node,
    className: propTypes.string,
    disabled: propTypes.bool,
    href: propTypes.string,
    inline: propTypes.bool,
    renderIcon: propTypes.object,
    size: propTypes.oneOf
        ([
            'sm',
            'md',
            'lg',
        ]),
    visited: propTypes.bool,
}

Link.defautProps = {
    disabled: false,
    inline: false,
    visited: false,
}

export default Link;