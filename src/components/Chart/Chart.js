import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = () => {
  return (
    <div>
      <div className="App">
        <h4>Gesamt 100 Mio EUR</h4>
        <div style={{ maxWidth: "700px", height: "250px" }}>
          <Bar
            data={{
              // Name of the variables on x-axies for each bar
              labels: ["2017", "2018", "2019", "2020"],
              datasets: [
                {
                  // Label for bars
                  label: "Gesamt",
                  // Data or value of each variable
                  data: [20, 15, 35, 30],
                  // Color of each bar
                  backgroundColor: ["#386dae", "#386dae", "#386dae", "#386dae"],
                  // Border color of each bar
                  /* borderColor: ["aqua", "green", "red", "yellow"],
                  borderWidth: 0.5, */
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
