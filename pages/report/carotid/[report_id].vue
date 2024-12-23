<template>
  <div class="container-report">
    <ReportCover v-if="['pdf'].includes(type)" />
    <Report :type="type" />
    <ReportRecom v-if="['pdf'].includes(type)" />
  </div>
</template>

<script setup>
import useReportStore from '@/store/report'
import ReportCover from './components/ReportCover/index.vue'
import Report from './components/Report/index.vue'
import ReportRecom from './components/ReportRecom/index.vue'

const { setReport } = useReportStore()
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const report_id = ref(route.params.report_id * 1)
const type = ref(route.query.type || 'pdf') // report-报告页, pdf-完整pdf页, content-超声参数、所见、提示页

const { data: responseData } = await useFetch(`${runtimeConfig.public.baseURL}/intranet/report/struct_detail`, {
  method: 'post',
  body: {
    report_id: report_id.value
  }
})
setReport(responseData.value.data)



// useHead({
//   title: `检查单${id.value}`,
//   meta: [ { name: 'description', content: 'My amazing site.' } ]
// })
</script>

<style lang="less" scoped>
.container-report {

}
</style>