import classNames from "classnames";
import { Fragment } from "react";
import "tailwindcss/tailwind.css";
import ImageStyle from "./image.module.scss";

const Image = ({ className, src, alt, onClick, children }) => {
  className = classNames([ImageStyle["Image"], className]);

  return (
    <Fragment>
      <div className={className} onClick={onClick}>
        <img src={src} alt={alt} title={alt} className={`w-full h-auto`} />
        {children}
      </div>
    </Fragment>
  );
};

export default Image;
