import { BaseChart } from './BaseChart.ts';

export class PieChart extends BaseChart {
  getOption() {
    return {
      series: [{
        name: 'Sales',
        type: 'pie',
        data: [
          {value: 335, name: 'Direct'},
          {value: 310, name: 'Email'},
          {value: 234, name: 'Union Ads'},
          {value: 135, name: 'Video Ads'},
          {value: 548, name: 'Search Engine'}
        ]
      }],
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      xAxis: {
        show: false
      },
      yAxis: {
        show: false
      },
    };
  }
}
