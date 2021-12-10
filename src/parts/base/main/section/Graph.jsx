import React from "react";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Graph(props) {
  // Chart.Legend.prototype.afterFit = function () {
  //   this.height = this.height + 50;
  // };
  const data = {
    labels: ["Locked liquidity", "Presale", "Marketing", "Development"],
    datasets: [
      {
        label: ["Locked liquidity", "Presale", "Marketing", "Development"],
        data: [45, 45, 5, 5],
        backgroundColor: ["#0081FF", "#8291A9", "#22CCE2", "#FDBF5E"],
        hoverOffset: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 10,
        titleSpacing: 10,
        // callbacks: {
        //   labelPointStyle: function (context) {
        //     return {
        //       rotation: 0,
        //     };
        //   },
        // label: function (context) {
        //   let label = context.dataset.label || "";
        //   if (label) {
        //     label += ": %";
        //   }
        //   return label;
        // },
        // },
      },
      legend: {
        position: "right",

        labels: {
          boxWidth: 18,
          boxHeight: 18,
          color: "#000",
          padding: 15,
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Chart.js Doughnut Chart",
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(0) + "%";
          return percentage;
        },
        font: {
          family: "Poppins, arial",
          size: 12,
          weight: 700,
        },
        color: "#fff",
      },
    },
  };
  var Chart = (
    <Doughnut
      data={data}
      options={options}
      height={50}
      plugins={[ChartDataLabels]}
    />
  );
  return Chart;
}
