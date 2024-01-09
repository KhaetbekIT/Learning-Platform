import { Fragment } from "react"
import propTypes from 'prop-types'

const AccordionSkileton = ({
    align,
    className,
    count,
    open
}) => {
    return (
        <Fragment>
            <ul
                className={className}
                hidden={open}>
                {
                    [
                        ...Array(count)
                    ].map(() =>
                        <li
                            className={className}
                            align={align}
                            size={size}
                            {...props}
                        >
                        </li>
                    )
                }
            </ul>
        </Fragment>
    )
}

AccordionSkileton.propTypes = {
    align: propTypes.oneOf(['start', 'end']).isRequired,
    classNames: propTypes.string,
    count: propTypes.number,
    isFlush: propTypes.bool,
    open: propTypes.bool,
}

AccordionSkileton.defaultProps = {
    align: 'end',
    count: 4,
    open: true
}

export default AccordionSkileton