import classNames from "classnames"
import { Fragment } from "react"
import propTypes from 'prop-types'

const InlineLoading = ({
    className,
    description,
    iconDescription,
    onSuccess,
    status,
    successDelay,
    ...props
}) => {
    const classes = classNames
        ([
            className,
            `InlineLoading`
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

InlineLoading.propTypes = {
    className: propTypes.string,
    description: propTypes.node,
    iconDescription: propTypes.string,
    onSuccess: propTypes.bool,
    status: propTypes.oneOf
        ([
            'inactive',
            'active',
            'finished',
            'error',
        ]).isRequired,
    successDelay: propTypes.number,
}

InlineLoading.defaultProps = {
    onSuccess: 'active',
    successDelay: 1500,
}

export default InlineLoading;