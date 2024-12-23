<template>
  <div class="container-com-report-content">
    <div class="content-item cscs">
      <div class="label">超声参数</div>
      <div class="table">
        <div class="table-row">
          <div class="table-cell"></div>
          <div class="table-cell">左侧</div>
          <div class="table-cell">右侧</div>
        </div>
        <div class="table-row">
          <div class="table-cell">颈动脉IMT(最厚部位)</div>
          <div class="table-cell" :class="{'abnormal': table.imt?.isLeftAbnormal}">{{table.imt?.left}}</div>
          <div class="table-cell" :class="{'abnormal': table.imt?.isRightAbnormal}">{{table.imt?.right}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">最厚IMT所在部位</div>
          <div class="table-cell" :class="{'abnormal': table.imt_position?.isLeftAbnormal}">{{table.imt_position?.left}}</div>
          <div class="table-cell" :class="{'abnormal': table.imt_position?.isRightAbnormal}">{{table.imt_position?.right}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">斑块部位</div>
          <div class="table-cell" :class="{'abnormal': table.patch_position?.isLeftAbnormal}">{{table.patch_position?.left}}</div>
          <div class="table-cell" :class="{'abnormal': table.patch_position?.isRightAbnormal}">{{table.patch_position?.right}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">斑块个数</div>
          <div class="table-cell" :class="{'abnormal': table.patch_count?.isLeftAbnormal}">{{table.patch_count?.left}}</div>
          <div class="table-cell" :class="{'abnormal': table.patch_count?.isRightAbnormal}">{{table.patch_count?.right}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">最大斑块长度(mm)</div>
          <div class="table-cell" :class="{'abnormal': table.patch_size_long?.isLeftAbnormal}">{{table.patch_size_long?.left}}</div>
          <div class="table-cell" :class="{'abnormal': table.patch_size_long?.isRightAbnormal}">{{table.patch_size_long?.right}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">最大斑块厚度(mm)</div>
          <div class="table-cell" :class="{'abnormal': table.patch_size_thick?.isLeftAbnormal}">{{table.patch_size_thick?.left}}</div>
          <div class="table-cell" :class="{'abnormal': table.patch_size_thick?.isRightAbnormal}">{{table.patch_size_thick?.right}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">低回声或等回声斑块个数</div>
          <div class="table-cell" :class="{'abnormal': table.low_echo_count?.isLeftAbnormal}">{{table.low_echo_count?.left}}</div>
          <div class="table-cell" :class="{'abnormal': table.low_echo_count?.isRightAbnormal}">{{table.low_echo_count?.left}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">强回声斑块个数</div>
          <div class="table-cell" :class="{'abnormal': table.strong_echo_count?.isLeftAbnormal}">{{table.strong_echo_count?.left}}</div>
          <div class="table-cell" :class="{'abnormal': table.strong_echo_count?.isRightAbnormal}">{{table.strong_echo_count?.left}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">混合回声斑块个数</div>
          <div class="table-cell" :class="{'abnormal': table.mixed_echo_count?.isLeftAbnormal}">{{table.mixed_echo_count?.left}}</div>
          <div class="table-cell" :class="{'abnormal': table.mixed_echo_count?.isRightAbnormal}">{{table.mixed_echo_count?.left}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">狭窄部位</div>
          <div class="table-cell" :class="{'abnormal': table.stenosis_position?.isLeftAbnormal}">{{table.stenosis_position?.left}}</div>
          <div class="table-cell" :class="{'abnormal': table.stenosis_position?.isRightAbnormal}">{{table.stenosis_position?.left}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">狭窄率（%）</div>
          <div class="table-cell" :class="{'abnormal': table.stenosis_percent?.isLeftAbnormal}">{{table.stenosis_percent?.left}}</div>
          <div class="table-cell" :class="{'abnormal': table.stenosis_percent?.isRightAbnormal}">{{table.stenosis_percent?.left}}</div>
        </div>
      </div>
    </div>
    <div class="content-item cssj">
      <div class="labe">超声所见</div>
      {{cssj}}
    </div>
    <div class="content-item csts">
      <div class="label">超声提示</div>
      {{csts}}
    </div>
  </div>
</template>

<script setup>
import useReportStore from '@/store/report'
import { getTableData } from './utils'

const reportStore = useReportStore()
const { report } = storeToRefs(reportStore)

const cssj = computed(() => {
  const diagData = report.value?.diagData ? JSON.parse(report.value?.diagData) : undefined
  if(diagData?.cssj) {
   return diagData.cssj
  }else {
    return undefined
  }
})

const csts = computed(() => {
  const diagData = report.value?.diagData ? JSON.parse(report.value?.diagData) : undefined
  if(diagData?.csts) {
   return diagData.csts
  }else {
    return undefined
  }
})

const table = computed(() => getTableData(report.value))




</script>

<style lang="less" scoped>
.container-com-report-content {
  .content-item {
    .label {

    }
    .table {
      .table-row {
        display: flex;
       .table-cell {
        flex: 1;
        &.abnormal {
          color: red;
        }
        &:first-child {
          flex: 2;
        }
       }
      }
    }
  }
}
</style>