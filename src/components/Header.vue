<template>
  <h1 class="main-header">{{ title }}</h1>
  <hr>
</template>

<script>
export default {
  name: "Header",
  props: ["title"],
  data() {
    return {};
  },
  created() {
    console.log(this.title);
  },
};
</script>

<style scoped>

</style>
