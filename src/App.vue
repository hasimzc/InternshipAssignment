<template>
  <div>
    <v-toolbar color="primary">
      <v-btn @click="activeChart = 'bar'" class="chart-button" :class="{ active: activeChart === 'bar' }">
        BAR
      </v-btn>
      <v-btn @click="activeChart = 'pie'" class="chart-button" :class="{ active: activeChart === 'pie' }">
        PIE
      </v-btn>
      <v-btn @click="activeChart = 'yBar'" class="chart-button" :class="{ active: activeChart === 'yBar' }">
        Y-BAR
      </v-btn>
    </v-toolbar>
    <v-fade-transition>
      <div style="height: 500px; width: 500px; margin-top: 10px;" ref="myChart"></div>
    </v-fade-transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch, Ref, computed } from 'vue';
import { init, ECharts, EChartsOption } from 'echarts';
import {BarChart} from './BarChart';
import {PieChart} from './PieChart';
import {YBarChart} from './YBarChart';

export default defineComponent({
  name: 'App',
  setup() {
    const myChart: Ref<HTMLElement | null> = ref(null);
    const activeChart = ref('bar');

    const chart = computed<ECharts | undefined>(() => {
      let selectedChart;
      switch (activeChart.value) {
        case 'pie':
          selectedChart = new PieChart();
          break;
        case 'bar':
          selectedChart = new BarChart();
          break;
        case 'yBar':
          selectedChart = new YBarChart();
          break;
        default:
          selectedChart = new BarChart();
          break;
      }

      if (myChart.value) {
        const chartInstance = init(myChart.value as HTMLElement, {}, { renderer: 'canvas' });
        chartInstance.setOption(selectedChart.getOption() as EChartsOption);
        return chartInstance;
      }
      return undefined;
    });

    watch(chart, (newChart, oldChart) => {
      if (oldChart) {
        oldChart.dispose();
      }
      if (newChart) {
        newChart.resize();
      }
    });

    onMounted(() => {
      chart.value?.resize();
    });

    return {
      myChart,
      activeChart,
      chart,
    };
  },
});
</script>

<style scoped>

.chart-button {
  border: 2px solid #e0e0e0;
  cursor: pointer;
  margin: 3px;
  margin-bottom: 5px;
  border-radius: 3px;
  padding: 5px;
  font-size: 15px;
}


.chart-button.active {
  background-color: #000;
  color: #e0e0e0;
  
}

*{
  background-color: #e0e0e0;
}
</style>