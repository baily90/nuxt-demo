export default defineStore("report", () => {
  const report = ref(null)

  const setReport = (info) => {
    report.value = info
  }

  return {
    report,
    setReport
  }
});
