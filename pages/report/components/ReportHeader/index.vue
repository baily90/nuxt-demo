<template>
  <div class="container-com-report-header">
    颈动脉超声筛查报告
    姓名：{{report?.patientName}}
    性别：{{report?.gender}}
    年龄：{{report?.age}}{{ageUnitOptions.find(item => item.value === report?.ageUnit)?.label}}
    筛查时间：{{report?.createTime}}
    筛查单位：{{report?.hospitalName}}
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