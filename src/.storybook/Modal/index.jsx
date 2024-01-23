import classNames from "classnames"
import { Fragment } from "react"
import propTypes from 'prop-types'

const MenuButton = ({
    alert,
    arialabel,
    children,
    className,
    closeButtonLabel,
    danger,
    hasScrollingContent,
    id,
    isFullWidth,
    launcherButtonRef,
    loadingDescription,
    loadingIconDescription,
    loadingStatus,
    modalAriaLabel,
    modalHeading,
    modalLabel,
    onKeyDown,
    onLoadingSuccess,
    onRequestClose,
    onRequestSubmit,
    onSecondarySubmit,
    open,
    passiveModal,
    preventCloseOnClickOutside,
    primaryButtonDisabled,
    primaryButtonText,
    secondaryButtons,
    secondaryButtonText,
    selectorPrimaryFocus,
    selectorsFloatingMenus,
    shouldSubmitOnEnter,
    size,
    slug,
    ...props
}) => {
    const classes = classNames
        ([
            className,
            `media__${size}`,
            `MenuButton`
        ])



    return (
        <Fragment>
            <div
                id={id}
                className={classes}
                size={size}
                {...props}
            >
                {children}
            </div>
        </Fragment>
    )
}

MenuButton.propTypes = {
    alert: propTypes.bool,
    arialabel: propTypes.string,
    children: propTypes.node,
    className: propTypes.string,
    closeButtonLabel: propTypes.string,
    danger: propTypes.bool,
    hasScrollingContent: propTypes.bool,
    id: propTypes.string,
    isFullWidth: propTypes.bool,
    launcherButtonRef: propTypes.func,
    loadingDescription: propTypes.string,
    loadingIconDescription: propTypes.string,
    loadingStatus: propTypes.oneOf
        ([
            'inactive',
            'active',
            'finished',
            'error',
        ]).isRequired,
    modalAriaLabel: propTypes.string,
    modalHeading: propTypes.node,
    modalLabel: propTypes.node,
    onKeyDown: propTypes.func,
    onLoadingSuccess: propTypes.func,
    onRequestClose: propTypes.func,
    onRequestSubmit: propTypes.func,
    onSecondarySubmit: propTypes.func,
    open: propTypes.bool,
    passiveModal: propTypes.bool,
    preventCloseOnClickOutside: propTypes.bool,
    primaryButtonDisabled: propTypes.bool,
    primaryButtonText: propTypes.bool,
    secondaryButtons: propTypes.func,
    secondaryButtonText: propTypes.node,
    selectorPrimaryFocus: propTypes.string,
    selectorsFloatingMenus: propTypes.string,
    shouldSubmitOnEnter: propTypes.bool,
    size: propTypes.oneOf
        ([
            'xs',
            'sm',
            'md',
            'lg',
        ]),
    slug: propTypes.node,
}

MenuButton.defaultProps = {
    hasScrollingContent: false,
    loadingStatus: 'inactive',
    onLoadingSuccess: propTypes.noopFn,
    onRequestClose: propTypes.noopFn,
    onRequestSubmit: propTypes.noopFn,
    passiveModal: false,
    preventCloseOnClickOutside: false,
    primaryButtonDisabled: false,
    selectorPrimaryFocus: '[data-modal-primary-focus]',
}


export default MenuButton;