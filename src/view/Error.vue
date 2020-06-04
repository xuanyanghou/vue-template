<template>
  <div class="img-wrap">
    <img src="@/assets/imgs/404.svg?inline">
  </div>
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .img-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    img {
      width: 40%;
    }
  }
</style>
