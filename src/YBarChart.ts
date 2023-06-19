import { BaseChart } from './BaseChart.ts';

export class YBarChart extends BaseChart {
  getOption() {
    return {
      tooltip: {},
      xAxis: {
        type : 'value',
      },
      yAxis: {
        type : 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      series: [{
        name: 'Sales',
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130],
      }]
    };
  }
}
