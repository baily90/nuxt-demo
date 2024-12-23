<template>
  <div class="container-com-report">
    <ReportHeader v-if="['pdf', 'report'].includes(type)" />
    <ReportContent />
    <ReportFooter v-if="['pdf', 'report'].includes(type)" />
  </div>
</template>

<script setup>
import useReportStore from '@/store/report'
import ReportHeader from './../ReportHeader/index.vue'
import ReportContent from './../ReportContent/index.vue'
import ReportFooter from './../ReportFooter/index.vue'

const reportStore = useReportStore()
const { report } = storeToRefs(reportStore)

defineProps({
  type: {
    type: String,
    required: true
  }
})
</script>

<style lang="less" scoped>
.container-com-report {
  width: 100%;
  // padding: 30px 80px;
  background-color: beige;
  // box-sizing: border-box;
  // &.content {
  //   padding: 10px;
  // }
}
</style>