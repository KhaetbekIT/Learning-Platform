import PropTypes from "prop-types";
import React from "react";
import { Avatar as AvatarAntD, Progress, Statistic } from "antd";
import classNames from "classnames";

const Avatar = ({ className, percent, avatar }) => {
  const getStrokeColor = (percent) => {
    if (percent <= 25) {
      return "#05e6f2";
    } else if (percent <= 50) {
      return "#ba68c8";
    } else if (percent <= 75) {
      return "#ff725e";
    } else {
      return "#ffc700";
    }
  };

  return (
    <div className={classNames("avatar", className)}>
      <Progress
        type="circle"
        percent={percent}
        width={56}
        strokeWidth={9}
        format={() => ""}
        strokeColor={getStrokeColor(percent)}
      />

      <AvatarAntD
        src={avatar}
        size={42}
        className={"picture"}
      />
    </div>
  );
};
Avatar.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
  avatar: PropTypes.string,
};

export { Avatar };
