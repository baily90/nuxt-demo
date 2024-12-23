<template>
  <div class="container-com-report-footer">
   <div class="sign">
    签名医生：
    <img class="autograph" :src="report?.autograph" />
   </div>
    <div class="tips">特别声明：本报告参考“中国非公会里医疗机构协会”2024年9月11日实施的《一套实用性综合性医院超声报告模板》团体标准出具，仅供临床参考</div>
  </div>
</template>

<script setup>
import useReportStore from '@/store/report'

const reportStore = useReportStore()
const { report } = storeToRefs(reportStore)

</script>

<style lang="less" scoped>
.container-com-report-footer {
  .sign {
    display: flex;
    align-items: center;
  }
  .autograph {
    width: 20%;
  }
}
</style>