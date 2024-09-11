import PropTypes from "prop-types";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { Icons } from "./../icon/Icons.jsx";

const Search = ({ className, data }) => {
  const [Value, setValue] = useState(undefined);
  const [Filtered, setFiltered] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (Value?.trim() === "") {
      setFiltered([])
    } else {
      setFiltered(() => {
        return data.filter((item) => {
          return Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(Value?.toLowerCase()),
          );
        });
      });
    }
  }, [Value]);

  const filteredItem = Filtered.map((item, i) => {
    return (
      <li className={"search-item"} key={i}>
        <div className="search-item-icon">
          <Icons name={"face"} />
        </div>

        <p className={"search-item-text"}>Ask your network!</p>
      </li>
    );
  });

  return (
    <>
      <div className={classNames("search", className)}>
        <label className={"search-label"}>
          <input
            placeholder={"Search"}
            className={"search-input"}
            value={Value}
            onChange={onChange}
          />
          <Icons className={"search-icon"} name="search" />
        </label>

        {filteredItem.length > 0 && (
          <ul className={"search-list"}>{filteredItem}</ul>
        )}
      </div>
    </>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  data: Array.isArray(),
};

export { Search };
