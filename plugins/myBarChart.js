export default function(elementName) {
  var container = document.getElementById(elementName);
  var data = {
    categories: ["2013", "2014", "2015", "2016", "2017", "2018"],
    series: [
      {
        name: "시장 규모(억 원)",
        data: [5000, 3000, 5000, 7000, 6000, 4000]
      },
      {
        name: "Income",
        data: [8000, 10000, 14000, 18000, 25000, 40000]
      }
    ]
  };
  tui.chart.barChart(container, data);
}
