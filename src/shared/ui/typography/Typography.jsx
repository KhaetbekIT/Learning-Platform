import PropTypes from 'prop-types'
import classNames from 'classnames'

const Typography = ({ name, children, className }) => {
    switch (name) {
        case "h1": {
            return <h1 className={classNames("typography typography-" + name, className)}>{children}</h1>
        }

        case "h2": {
            return <h2 className={classNames("typography typography-" + name, className)}>{children}</h2>
        }

        case "h3": {
            return <h3 className={classNames("typography typography-" + name, className)}>{children}</h3>
        }

        case "h4": {
            return <h4 className={classNames("typography typography-" + name, className)}>{children}</h4>
        }

        case "h5": {
            return <h5 className={classNames("typography typography-" + name, className)}>{children}</h5>
        }

        case "h6": {
            return <h6 className={classNames("typography typography-" + name, className)}>{children}</h6>
        }

        case "text": {
            return <h6 className={classNames("typography typography-" + name, className)}>{children}</h6>
        }

        default: {
            return <span className='typography'>{children}</span>
        }
    }
}

Typography.propTypes = {
    name: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "text"]),
    children: PropTypes.node,
    className: PropTypes.string,
}

export { Typography }
