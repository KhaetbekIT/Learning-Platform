import { Fragment } from "react";
import propTypes from "prop-types";

const MultiSelect = ({
  className,
  clearSelectionDescription,
  clearSelectionText,
  compareItems,
  direction,
  disabled,
  downshiftProps,
  helperText,
  hideLabel,
  id,
  initialSelectedItems,
  invalid,
  invalidText,
  items,
  itemToElement,
  itemToString,
  label,
  light,
  locale,
  onChange,
  onMenuChange,
  open,
  readOnly,
  selectedItems,
  selectionFeedback,
  size,
  slug,
  sortItems,
  titleText,
  translateWithId,
  type,
  useTitleInItem,
  warn,
  warnText,
  ...props
}) => {
  return (
    <Fragment>
      <div className={className} {...props}>
        {children}
      </div>
    </Fragment>
  );
};

MultiSelect.prototype = {
  className: propTypes.string,
  clearSelectionDescription: propTypes.string,
  clearSelectionText: propTypes.string,
  compareItems: propTypes.func,
  direction: propTypes.oneOf(["top", "bottom"]),
  disabled: propTypes.bool,
  downshiftProps: propTypes.oneOfType([propTypes.oneOf(["object ", "as"])]),
  helperText: propTypes.node,
  hideLabel: propTypes.bool,
  id: propTypes.string,
  initialSelectedItems: propTypes.array,
  invalid: propTypes.bool,
  invalidText: propTypes.node,
  items: propTypes.array,
  itemToElement: propTypes.func,
  itemToString: propTypes.func,
  label: propTypes.node,
  light: propTypes.bool,
  locale: propTypes.string,
  onChange: propTypes.func,
  onMenuChange: propTypes.func,
  open: propTypes.bool,
  readOnly: propTypes.bool,
  selectedItems: propTypes.array,
  selectionFeedback: propTypes.oneOf(["top", "fixed", "top-after-reopen"]),
  size: propTypes.oneOf(["sm", "md", "lg"]),
  slug: propTypes.node,
  sortItems: propTypes.func,
  titleText: propTypes.node,
  translateWithId: propTypes.func,
  type: propTypes.oneOf(["default", "inline"]),
  useTitleInItem: propTypes.bool,
  warn: propTypes.bool,
  warnText: propTypes.node,
};

MultiSelect.defaultProps = {
  clearSelectionDescription: "Total items selected: ",
  clearSelectionText: "To clear selection, press Delete or Backspace",
  compareItems: "defaultCompareItems",
  direction: "bottom",
  initialSelectedItems: "[]",
  itemToString: (item) => {
    if (typeof item === "string") {
      return item;
    } else if (typeof item === "number") {
      return `${item}`;
    } else if (
      item !== null &&
      typeof item === "object" &&
      "label" in item &&
      typeof item["label"] === "string"
    ) {
      return item["label"];
    }
    return "";
  },
  locale: "en",
  open: "false",
  selectionFeedback: "top-after-reopen",
  titleText: "false",
  type: "default",
};

export { MultiSelect };
