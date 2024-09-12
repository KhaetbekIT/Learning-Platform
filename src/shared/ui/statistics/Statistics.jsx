import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";

const Statistics = ({ data, title, className }) => {
  const series = [
    {
      name: "Lessons",
      data,
    },
  ];

  const options = {
    title: {
      text: title,
      align: "left",
    },
    legend: {
      show: false,
    },
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      colors: ["rgba(47, 128, 237, 0.6)", "rgba(47, 128, 237, 0.25)"],
    },
    grid: {
      show: false,
    },
  };

  return (
    <div className={className}>
      <ReactApexChart height={300} type="bar" options={options} series={series} />
    </div>
  );
};

Statistics.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  className: PropTypes.string
};

export { Statistics };
