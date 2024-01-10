import classNames from "classnames"
import { Fragment } from "react"
import propsTypes from 'prop-types'

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

CheckboxSkeleton.propsTypes = {
    className: propsTypes.string,
}

export default { CheckboxSkeleton };