import { Fragment } from "react"
import propTypes from 'prop-types'

const ButtonSkeleton = ({
    className,
    href,
    size,
    small,
    ...props
}) => {
    const
        classes = classNames
            ([
                className,
                `media__${size}`,
                `buttonskeleton`
            ])
    return (
        <Fragment>
            <div
                className={classes}
                size={size}
                {...props}
            >

            </div>
        </Fragment>
    )
}

ButtonSkeleton.propTypes = {
    className: propTypes.string,
    href: propTypes.string,
    size: propTypes.oneOf
        ([
            'sm',
            'md',
            'lg',
            'xl',
            '2xl',
        ]).isRequired,
    small: propTypes.bool
}
ButtonSkeleton.defaultProps = {
    size: 'lg',
    small: false,
}

export default { ButtonSkeleton };