import { Fragment } from "react"
import propsTypes from "prop-types";

const CodeSnippet = ({
    align,
    arialabel,
    ariaLabel,
    children,
    className,
    copyButtonDescription,
    copyText,
    disabled,
    feedback,
    feedbackTimeout,
    hideCopyButton,
    light,
    maxCollapsedNumberOfRows,
    maxExpandedNumberOfRows,
    minCollapsedNumberOfRows,
    minExpandedNumberOfRows,
    onClick,
    showLessText,
    showMoreText,
    type,
    wrapText,
    ...props
}) => {
    const
        classes = classNames
            ([
                className,
                `media__${size}`,
                `codesnippet`
            ])
    return (
        <Fragment>
            <div
                className={classes}
                onClick={onClick}
                disabled={disabled}
                type={type}
                {...props}
            >
                {children}
            </div>
        </Fragment>
    )
}

CodeSnippet.propsTypes = {
    align: propsTypes.oneOf
        ([
            'top',
            'top-left',
            'top-right',
            'bottom',
            'bottom-left',
            'bottom-right',
            'left',
            'right',
        ]).isRequired,
    arialabel: propsTypes.string,
    ariaLabel: propsTypes.bool,
    children: propsTypes.node,
    className: propsTypes.string,
    copyButtonDescription: propsTypes.string,
    copyText: propsTypes.string,
    disabled: propsTypes.bool,
    feedback: propsTypes.string,
    feedbackTimeout: propsTypes.number,
    hideCopyButton: propsTypes.bool,
    light: propsTypes.bool,
    maxCollapsedNumberOfRows: propsTypes.number,
    maxExpandedNumberOfRows: propsTypes.number,
    minCollapsedNumberOfRows: propsTypes.number,
    minExpandedNumberOfRows: propsTypes.number,
    onClick: propsTypes.bool,
    showLessText: propsTypes.string,
    showMoreText: propsTypes.string,
    type: propsTypes.oneOf
        ([
            'single',
            'inline',
            'multi',
        ]).isRequired,
    wrapText: propsTypes.bool,
}

CodeSnippet.defaulProps = {
    align: 'button',
    arialabel: 'Copy to clipboard',
    maxCollapsedNumberOfRows: 15,
    maxExpandedNumberOfRows: 0,
    minCollapsedNumberOfRows: 3,
    minExpandedNumberOfRows: 16,
    showLessText: 'Show less',
    showMoreText: 'Show more',
    type: 'single',
    wrapText: false,
}

export default CodeSnippet;