import propTypes from "prop-types";
import classnames from "classnames";

const FilterableMultiSelect = ({
  aria_label,
  ariaLabel,
  ariaLabel,
  clearSelectionText,
  compareItems,
  direction,
  disabled,
  downshiftProps,
  hideLabel,
  id,
  initialSelectedItems,
  invalid,
  invalidText,
  items,
  itemToElement,
  itemToString,
  light,
  locale,
  onChange,
  onInputValueChange,
  onMenuChange,
  open,
  placeholder,
  selectionFeedback,
  size,
  slug,
  sortItems,
  translateWithId,
  useTitleInItem,
  warn,
  warnText,
  ...props
}) => {
  const classes = classnames([
    className,
    `media__${size}`,
    "FilterableMultiSelect",
  ]);
  return (
    <div className={classes} {...props}>
      <div className="FilterableMultiSelect_wrap">{children} </div>
    </div>
  );
};

FilterableMultiSelect.prototype = {
  aria_label: propTypes.string,
  ariaLabel: propTypes.string,
  ariaLabel: propTypes.string,
  clearSelectionText: propTypes.string,
  direction: propTypes.oneOf(["top", "bottom"]),
  disabled: propTypes.bool,
  downshiftProps: propTypes.object,
  hideLabel: propTypes.bool,
  id: propTypes.string,
  initialSelectedItems: propTypes.array,
  invalid: propTypes.bool,
  invalidText: propTypes.node,
  items: propTypes.array,
  itemToElement: propTypes.func,
  itemToString: propTypes.func,
  light: propTypes.bool,
  locale: propTypes.string,
  onChange: propTypes.func,
  onInputValueChange: propTypes.func,
  onMenuChange: propTypes.func,
  open: propTypes.bool,
  placeholder: propTypes.string,
  selectionFeedback: propTypes.oneOf(["top", "fixed", "top-after-reopen"]),
  size: propTypes.oneOf(["sm", "md", "lg"]),
  slug: propTypes.node,
  translateWithId: propTypes.func,
  useTitleInItem: propTypes.bool,
  warn: propTypes.bool,
  warnText: propTypes.node,
};

FilterableMultiSelect.defaultProps = {
  clearSelectionDescription: "Total items selected: ",
  clearSelectionText: "To clear selection, press Delete or Backspace",
  compareItems: "defaultCompareItems",
  direction: "bottom",
  disabled: "false",
  initialSelectedItems: "[]",
  itemToString: "defaultItemToString",
  locale: "en",
  open: "false",
  selectionFeedback: "top-after-reopen",
  sortItems: "defaultSortItems",
};

export default FilterableMultiSelect;
