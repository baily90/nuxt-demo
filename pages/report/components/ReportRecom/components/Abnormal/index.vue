<template>
  <div class="container-com-report-recom-abnormal">
    医生建议：根据筛查结果及颈动脉正常或异常诊断标准，您的颈动脉存在{{abnormalText}}，建议及时咨询您的医生。

    脑卒中风险性增加
    颈动脉{{abnormalText}}与脑卒中具备正相关性，脑卒中（俗称中风）是一种严重的神经系统疾病，具有高发病率、高致残率和高死亡率。

    脑卒中临床症状提示
    快速识别脑卒中症状可以挽救生命。记住”FAST”原则：
    F（Face）：面部不对称或口角歪斜。
    A（Arms）：一侧手臂无力或麻木，无法举起。
    S（Speech）：言语不清或无法说话。
    T（Time）：一旦出现上述症状，立即寻求治疗帮助。


    颈动脉{{abnormalText}}逆转推荐
    ·高危人群提醒
    如果有三高病史（高血压、高血脂、糖尿病）患者请密切关注血脂变化。
    ·合理膳食计划
    采用地中海饮食或DASH饮食，例如水果和蔬菜、全谷物、鱼类和海鲜、适量禽肉和蛋类、豆类和坚果，有助于改善和减缓当前症状，建议在营养师的指导下定制个人膳食计划。
    ·营养物质定量摄入
    合理适量补充不饱和脂肪酸，例如ω-3脂肪酸和ω-6脂肪酸，有一定可能性实现【斑块】逆转，因个人体质不同，建议在专业人士指导下，定制个人营养定量补充方案。过度摄入营养物质可能增加其他疾病风险。
  </div>
</template>

<script setup>
import useReportStore from '@/store/report'

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

const abnormalText = computed(() => props.type === 'thick' ? '增厚' : props.type === 'patch' ? '斑块' : '异常')

const reportStore = useReportStore()
const { report } = storeToRefs(reportStore)

</script>

<style>

</style>