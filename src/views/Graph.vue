<template>
  <div class="graph">
    <h1>This is an graph page</h1>
    <DoughnutChart />
    <LineChart />
  </div>
</template>

<script>
import DoughnutChart from '../components/ChartPieComponent.vue'
import LineChart from '../components/ChartLineComponent.vue'

export default {
  name: 'App',
  components: {
    DoughnutChart,
    LineChart
  }
}
</script>
