import { defineStore } from "pinia";

export default defineStore("user", () => {
  const userInfo = ref(null);
  const setUserInfo = (info) => {
    userInfo.value = info;
  };
  return { userInfo, setUserInfo };
});
