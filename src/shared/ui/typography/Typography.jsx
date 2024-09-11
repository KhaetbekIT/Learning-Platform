import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Typography = ({ name, children, className }) => {
    switch (name) {
        case "h2": {
            return <h2 className={classNames("typography" + name, className)}>{children}</h2>
        }

        default: {
            return <span>{children}</span>
        }
    }
}

Typography.propTypes = {
    name: PropTypes.oneOf(["h2", "h3", "text"]),
    children: PropTypes.node,
    className: PropTypes.string,
}

export { Typography }
