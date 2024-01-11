import classNames from "classnames"
import { Children, Fragment, useState } from "react"
import propsTypes from "prop-types";


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

ComboBox.propsTypes = {
    allowCustomValue: propsTypes.bool,
    arialabel: propsTypes.string,
    ariaLabel: propsTypes.string,
    className: propsTypes.string,
    direction: propsTypes.oneOf
        ([
            'top',
            'bottom',
        ]),
    disabled: propsTypes.bool,
    downshiftProps: propsTypes.bool,
    helperText: propsTypes.node,
    id: propsTypes.string,
    initialSelectedItem: propsTypes.bool,
    invalid: propsTypes.bool,
    invalidText: propsTypes.node,
    itemToElement: propsTypes.bool,
    itemToString: propsTypes.bool,
    items: propsTypes.bool,
    light: propsTypes.bool,
    onChange: propsTypes.string,
    onInputChange: propsTypes.string,
    onToggleClick: propsTypes,
    placeholder: propsTypes.string,
    readOnly: propsTypes.bool,
    selectedItem: propsTypes.bool,
    shouldFilterItem: propsTypes.bool,
    size: propsTypes.oneOf
        ([
            'sm',
            'md',
        ]),
    slug: propsTypes.node,
    titleText: propsTypes.node,
    translateWithId: propsTypes.bool,
    warn: propsTypes.bool,
    warnText: propsTypes.node,
}

export default ComboBox;