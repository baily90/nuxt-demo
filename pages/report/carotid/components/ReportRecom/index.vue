<template>
  <div class="container-com-report-recom">
    健康建议
    <Normal v-if="['normal'].includes(type)" />
    <Abnormal :type="type" v-if="['thick', 'patch'].includes(type)" />
    <RecomFooter />
  </div>
</template>

<script setup>
import Normal from './components/Normal/index.vue'
import Abnormal from './components/Abnormal/index.vue'
import RecomFooter from './components/RecomFooter/index.vue'
import useReportStore from '@/store/report'

const reportStore = useReportStore()
const { report } = storeToRefs(reportStore)

const type = computed(() => {
  const diagData = report.value?.diagData ? JSON.parse(report.value?.diagData) : undefined
  if(diagData) {
    const { left: { has_patch: left_has_patch, imt: left_imt }, right: { has_patch: right_has_patch, imt: right_imt } } = diagData
    if(left_has_patch === 2 && left_imt < 1 && right_has_patch === 2 && right_imt < 1) {
      return 'normal'
    }else if(left_has_patch === 2 && left_imt >= 1 && left_imt < 1.5 && right_has_patch === 2 && right_imt >= 1 && right_imt < 1.5) {
      return 'thick'
    }else if(left_has_patch === 1 || left_imt >= 1.5 || right_has_patch === 1 || right_imt >= 1.5) {
      return 'patch'
    }
  }else {
    return undefined
  }
})

</script>

<style lang="less" scoped>
.container-com-report-recom {
  background-color: antiquewhite;
}
</style>