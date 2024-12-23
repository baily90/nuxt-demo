<template>
  <div class="container-com-report-content">
    超声参数
    超声所见
    超声提示
  </div>
</template>

<script setup>
import useReportStore from '@/store/report'
import { ageUnitOptions } from './../../constants'

const reportStore = useReportStore()
const { report } = storeToRefs(reportStore)

</script>

<style>

</style>