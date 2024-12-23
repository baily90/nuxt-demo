<template>
  <div class="container-com-report-recom-footer">
    <div class="desc">扫右侧二维码进群，免费获取更多颈动脉权威专家健康建议</div>
    <img
      src="/imgs/icon_qrcode.png"
    />
    <div class="cooperation">
      合作机构
      华山医院    浙江省肿瘤医院
      香港大学   北大医学部
      中国老龄保健协会   美年大健康
    </div>
  </div>
</template>

<script setup>
import useReportStore from '@/store/report'

const reportStore = useReportStore()
const { report } = storeToRefs(reportStore)

</script>

<style>

</style>