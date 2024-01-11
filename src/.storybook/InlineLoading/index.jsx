import classNames from "classnames"
import { Fragment } from "react"
import propsTypes from 'prop-types'

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

InlineLoading.propsTypes = {
    className: propsTypes.string,
    description: propsTypes.node,
    iconDescription: propsTypes.string,
    onSuccess: propsTypes.bool,
    status: propsTypes.oneOf
        ([
            'inactive',
            'active',
            'finished',
            'error',
        ]).isRequired,
    successDelay: propsTypes.number,
}

InlineLoading.defaultProps = {
    onSuccess: 'active',
    successDelay: 1500,
}

export default InlineLoading;