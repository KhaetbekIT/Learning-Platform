import classNames from "classnames"
import { Children, Fragment, useState } from "react"
import propTypes from "prop-types";


const ComboBox = ({
    allowCustomValue,
    arialabel,
    ariaLabel,
    className,
    direction,
    disabled,
    downshiftProps,
    helperText,
    id,
    initialSelectedItem,
    invalid,
    invalidText,
    itemToElement,
    itemToString,
    items,
    light,
    onChange,
    onInputChange,
    onToggleClick,
    placeholder,
    readOnly,
    selectedItem,
    shouldFilterItem,
    size,
    slug,
    titleText,
    translateWithId,
    warn,
    warnText,
    ...props
}) => {

    const classes = classNames
        ([
            className,
            `media__${size}`,
            `combobox`
        ])

    const [Title, setTitle] = useState('')
    const [onToggleClick, setToggleClick] = useState(false)

    const onInputChange = (e) => {
        setTitle(inputText.textContent)
    }

    onChange = (e) => {
        setTitle(e.target.textContent)
    }

    onToggleClick = () => {
        setToggleClick(prev => !prev)
    }

    const child = Children.map(items, (item, i) => {
        return (
            <Fragment
                key={i}>
                <div
                    onClick={onChange}
                >
                    {item}
                </div>
            </Fragment>
        )
    })

    return (
        <Fragment>
            <div
                id={id}
                size={size}
                className={classes}
                disabled={disabled}
                onChange={onChange}
                {...props}
            >
                <h3>{Title}</h3>
                <div>{child}</div>
            </div>
        </Fragment>
    )
}

ComboBox.propTypes = {
    allowCustomValue: propTypes.bool,
    arialabel: propTypes.string,
    ariaLabel: propTypes.string,
    className: propTypes.string,
    direction: propTypes.oneOf
        ([
            'top',
            'bottom',
        ]),
    disabled: propTypes.bool,
    downshiftProps: propTypes.bool,
    helperText: propTypes.node,
    id: propTypes.string,
    initialSelectedItem: propTypes.bool,
    invalid: propTypes.bool,
    invalidText: propTypes.node,
    itemToElement: propTypes.bool,
    itemToString: propTypes.bool,
    items: propTypes.bool,
    light: propTypes.bool,
    onChange: propTypes.string,
    onInputChange: propTypes.string,
    onToggleClick: propTypes.func,
    placeholder: propTypes.string,
    readOnly: propTypes.bool,
    selectedItem: propTypes.bool,
    shouldFilterItem: propTypes.bool,
    size: propTypes.oneOf
        ([
            'sm',
            'md',
        ]),
    slug: propTypes.node,
    titleText: propTypes.node,
    translateWithId: propTypes.bool,
    warn: propTypes.bool,
    warnText: propTypes.node,
}

export default ComboBox;