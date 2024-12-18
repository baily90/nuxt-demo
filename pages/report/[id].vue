<template>
  <div class="container-report">
    report-{{id}}

              <div @click="userStore.setUserInfo('张三')">{{ userInfo ? userInfo : '设置名称' }}</div>
  </div>
</template>

<script setup>








import useUserStore from '~/store/user'

const userStore = useUserStore()

const { userInfo } = storeToRefs(userStore)

const route = useRoute()
const id = ref(route.params.id)

useHead({
  title: `检查单${id.value}`,
  meta: [ { name: 'description', content: 'My amazing site.' } ]
})
</script>

<style lang="less" scoped>
.container-report {
  color: red;
}
</style>