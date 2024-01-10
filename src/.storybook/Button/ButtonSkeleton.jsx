import { Fragment } from "react"
import propsTypes from 'prop-types'

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

ButtonSkeleton.protoTypes = {
    className: propsTypes.string,
    href: propsTypes.string,
    size: propsTypes.oneOf
        ([
            'sm',
            'md',
            'lg',
            'xl',
            '2xl',
        ]).isRequired,
    small: propsTypes.bool
}
ButtonSkeleton.defaultProps = {
    size: 'lg',
    small: false,
}

export default { ButtonSkeleton };