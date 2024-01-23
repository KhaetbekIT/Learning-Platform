import { Fragment } from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const Pagination = ({
  backwardText,
  className,
  disabled,
  forwardText,
  id,
  isLastPage,
  itemRangeText,
  itemsPerPageText,
  itemText,
  onChange,
  page,
  pageInputDisabled,
  pageNumberText,
  pageRangeText,
  pageSize,
  pageSizeInputDisabled,
  pageSizes,
  pagesUnknown,
  pageText,
  size,
  totalItems,
  ...props
}) => {
  const classes = classnames([className, `media__${size}`, "Pagination"]);

  return (
    <Fragment>
      <div className={classes} {...props}>
        <div className="Pagination_wrap">{children}</div>
      </div>
    </Fragment>
  );
};

Pagination.propTypes = {
  backwardText: propTypes.string,
  className: propTypes.string,
  disabled: propTypes.bool,
  forwardText: propTypes.string,
  id: propTypes.oneOf(["string", "number"]),
  isLastPage: propTypes.bool,
  itemRangeText: propTypes.func,
  itemsPerPageText: propTypes.string,
  itemText: propTypes.func,
  onChange: propTypes.func,
  page: propTypes.number,
  pageInputDisabled: propTypes.bool,
  pageNumberText: propTypes.string,
  pageRangeText: propTypes.func,
  pageSize: propTypes.number,
  pageSizeInputDisabled: propTypes.bool,
  pageSizes: propTypes.oneOf(["number[]" | [{ text: text, value: number }]]),
  pagesUnknown: propTypes.bool,
  pageText: propTypes.func,
  size: propTypes.oneOf(["sm", "md", "lg"]),
  totalItems: propTypes.number,
};

Pagination.defaultProps = {
  backwardText: "Previous page",
  disabled: "false",
  forwardText: "Next page",
  isLastPage: "false",
  itemRangeText: (min, max, total) => `${min}–${max} of ${total} items`,
  itemsPerPageText: "Items per page:",
  itemText: (min, max) => `${min}–${max} items`,
  pageNumberText: "Page Number",
  pageRangeText: (_current, total) =>
    `of ${total} ${total === 1 ? "page" : "pages"}`,
  pagesUnknown: "false",
  pageText: (page, pagesUnknown) => `page ${pagesUnknown ? "" : page}`,
  size: "md",
};

export default Pagination;
