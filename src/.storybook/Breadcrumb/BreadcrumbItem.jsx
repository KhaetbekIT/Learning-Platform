import classNames from "classnames"
import { Fragment } from "react"
import propTypes from "prop-types"


const BreadcrumbItem = ({
    ariacurrent,
    children,
    className,
    href,
    isCurrentPage,
    ...props
}) => {
    const
        classes = classNames([className,
            `media__${size}`,
            `breadcrumbitem`
        ])
    return (
        <Fragment>
            <div
                className={classes}
                {...props}
            >
                {children}
            </div>
        </Fragment>
    )
}

BreadcrumbItem.protoTypes = {
    ariacurrent: propTypes.oneOf([
        'bool',
        'false',
        'true',
        'page',
        'step',
        'location',
        'date',
        'time',
    ]),
    children: propTypes.node,
    className: propTypes.string,
    href: propTypes.string,
    isCurrentPage: propTypes.bool,
}

export default { BreadcrumbItem };