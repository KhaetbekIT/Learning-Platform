import { Fragment } from "react"
import propTypes from "prop-types";

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

CodeSnippet.propTypes = {
    align: propTypes.oneOf
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
    arialabel: propTypes.string,
    ariaLabel: propTypes.bool,
    children: propTypes.node,
    className: propTypes.string,
    copyButtonDescription: propTypes.string,
    copyText: propTypes.string,
    disabled: propTypes.bool,
    feedback: propTypes.string,
    feedbackTimeout: propTypes.number,
    hideCopyButton: propTypes.bool,
    light: propTypes.bool,
    maxCollapsedNumberOfRows: propTypes.number,
    maxExpandedNumberOfRows: propTypes.number,
    minCollapsedNumberOfRows: propTypes.number,
    minExpandedNumberOfRows: propTypes.number,
    onClick: propTypes.bool,
    showLessText: propTypes.string,
    showMoreText: propTypes.string,
    type: propTypes.oneOf
        ([
            'single',
            'inline',
            'multi',
        ]).isRequired,
    wrapText: propTypes.bool,
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