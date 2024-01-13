import classNames from "classnames";
import { Fragment } from "react";
import propTypes from 'prop-types'

const Layer = ({
    as,
    children,
    className,
    level,
    ...props
}) => {
    const Layer = as;
    const calsses = classNames
        ([
            className,
            `Layer`
        ])
    return (
        <Fragment>
            <Layer>
                <div
                    className={calsses}
                    {...props}
                >
                    {children}
                </div>
            </Layer>
        </Fragment>
    )
}

Layer.propTypes = {
    as: propTypes.oneOf
        ([
            'ol',
            'ul',
        ]).isRequired,
    children: propTypes.node,
    className: propTypes.string,
    level: propTypes.oneOf
        ([
            0,
            1,
            2,
        ]),
}

Layer.defaultProps = {
    as: true,
}