import {default as Calendar} from "react-github-calendar";
import classNames from "classnames";
import PropTypes from "prop-types";

const GitHubCalendar = ({ className, username }) => (
  <div className={classNames("github", className)}>
    <Calendar
      username={username}
      year={new Date().getFullYear()}
      showWeekdayLabels={true}
    />
  </div>
);

GitHubCalendar.propTypes = {
  className: PropTypes.string,
  username: PropTypes.string,
};

export { GitHubCalendar };
