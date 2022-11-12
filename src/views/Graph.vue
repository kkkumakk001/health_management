<template>
  <div class="graph">
    <h1>This is an graph page</h1>
    <DoughnutChart />
  </div>
</template>

<script>
import DoughnutChart from '../components/ChartPie.vue'

export default {
  name: 'App',
  components: {
    DoughnutChart
  }
}
</script>
