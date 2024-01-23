import classNames from "classnames"
import { Fragment } from "react"
import propTypes from 'prop-types'

const CheckboxSkeleton = ({
    className,
    ...props
}) => {
    const
        classes = classNames
            ([
                className,
                `media__${size}`,
                `checkboxskeleton`
            ])
    return (
        <Fragment>
            <div
                className={classes}
                {...props}
            >

            </div>
        </Fragment>
    )
}

CheckboxSkeleton.propTypes = {
    className: propTypes.string,
}

export default { CheckboxSkeleton };