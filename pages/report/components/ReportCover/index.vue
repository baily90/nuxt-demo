<template>
  <div class="container-com-report-cover">
    暖欣互联网医园
    颈动脉超声筛查报告
    CCA MEDICAL EXAMIMATION REPORT
    守护生命的“脉”搏
    <img
      src="/imgs/icon_carotid.png"
    />
    姓名：{{report?.patientName}}（{{report?.gender}}）
    联系电话：{{report?.patientMobile}}
    筛查单号：{{report?.checkCode}}
    筛查时间：{{report?.createTime}}
    <img
      src="/imgs/icon_qrcode.png"
    />
    早发现，早预防。早治疗，呵护您的健康！
  </div>
</template>

<script setup>
import useReportStore from '@/store/report'
import { ageUnitOptions } from './../../constants'

const reportStore = useReportStore()
const { report } = storeToRefs(reportStore)

</script>

<style lang="less" scoped>
.container-com-report-cover {
  background-color: bisque;
}
</style>