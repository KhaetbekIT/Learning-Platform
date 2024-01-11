import classNames from "classnames";
import { Fragment } from "react";
import propsTypes from 'prop-types'

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

Layer.propsTypes = {
    as: propsTypes.oneOf
        ([
            'ol',
            'ul',
        ]).isRequired,
    children: propsTypes.node,
    className: propsTypes.string,
    level: propsTypes.oneOf
        ([
            0,
            1,
            2,
        ]),
}

Layer.defaultProps = {
    as: true,
}