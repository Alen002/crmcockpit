import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = () => {
  return (
    <div>
      <div className="App">
        <h4>Gesamt 100 Mio EUR</h4>
        <div style={{ maxWidth: "650px" }}>
          <Bar
            data={{
              // Name of the variables on x-axies for each bar
              labels: ["2017", "2018", "2019", "2020"],
              datasets: [
                {
                  // Label for bars
                  label: "total count/value",
                  // Data or value of your each variable
                  data: [1552, 1319, 613, 1400],
                  // Color of each bar
                  backgroundColor: ["aqua", "green", "red", "yellow"],
                  // Border color of each bar
                  borderColor: ["aqua", "green", "red", "yellow"],
                  borderWidth: 0.5,
                },
              ],
            }}
            // Height of graph
            height={400}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      // The y-axis value will start from zero
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 15,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
