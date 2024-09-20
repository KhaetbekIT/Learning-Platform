import { useState } from "react";
import { format, addDays, subDays, startOfWeek } from "date-fns";
import { Typography } from "../typography/Typography.jsx";
import { Icons } from "../icon/Icons.jsx";
import { Button } from "../button/Button.jsx";
import classNames from "classnames";

export const WeeklyCalendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());

  const startOfTheWeek = startOfWeek(currentDay, { weekStartsOn: 1 });
  // const endOfTheWeek = endOfWeek(currentDay, { weekStartsOn: 1 });

  const handleNextDay = () => {
    setCurrentDay(addDays(currentDay, 1));
  };

  const handlePrevDay = () => {
    setCurrentDay(subDays(currentDay, 1));
  };

  const daysOfWeek = [];
  for (let i = 0; i < 7; i++) {
    const day = addDays(startOfTheWeek, i);
    daysOfWeek.push(day);
  }

  const weekItem = daysOfWeek.map((day) => (
    <div
      key={day}
      className={classNames(
        "day",
        format(day, "yyyy-MM-dd") === format(currentDay, "yyyy-MM-dd")
          ? "active"
          : undefined,
      )}
    >
      <Typography name={"text"} className={"day-title"}>
        {format(day, "eee")}
      </Typography>
      <Typography name={"text"} className={"day-number"}>
        {format(day, "dd")}
      </Typography>
    </div>
  ));

  return (
    <div className={"weekly"}>
      <div className="weekly-header">
        <Typography name={"h3"}>{format(currentDay, "MMMM yyyy")}</Typography>
        <div className="weekly-arrows">
          <Button
            onClick={handlePrevDay}
            icon={<Icons name={"arrow-drop-left"} />}
            className={"weekly-arrow"}
          />
          <Button
            onClick={handleNextDay}
            icon={<Icons name={"arrow-drop-right"} />}
            className={"weekly-arrow"}
          />
        </div>
      </div>

      <div className="weekly-content">{weekItem}</div>
    </div>
  );
};
