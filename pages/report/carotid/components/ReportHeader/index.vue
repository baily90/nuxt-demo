<template>
  <div class="container-com-report-header">
    <div class="title">颈动脉超声筛查报告</div>
    <div class="base-info">
      <div class="row">
        <div class="info-item">姓名：{{report?.patientName}}</div>
        <div class="info-item">性别：{{report?.gender}}</div>
        <div class="info-item">年龄：{{report?.age}}{{ageUnitOptions.find(item => item.value === report?.ageUnit)?.label}}</div>
        <div class="info-item">筛查部位：{{report?.bodyRegionName}}</div>
      </div>
      <div class="row row2">
        <div class="info-item">筛查时间：{{report?.createTime}}</div>
        <div class="info-item">筛查单位：{{report?.orgName}}</div>
      </div>
    </div>

    <div class="sources">
      <img
        class="source-item"
        v-for="(img, index) in report?.sources"
        :key="img.source_url+index"
        :src="img.source_url"
      />
    </div>




  </div>
</template>

<script setup>
import useReportStore from '@/store/report'
import { ageUnitOptions } from './../../constants'

const reportStore = useReportStore()
const { report } = storeToRefs(reportStore)

</script>

<style lang="less" scoped>
.container-com-report-header {
  .title {
    text-align: center;
  }
  .base-info {
    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .sources {
    display: flex;
    width: 100%;
    gap: 1%;
    .source-item {
      display: flex;
      width: 24.25%;
    }
  }
}
</style>