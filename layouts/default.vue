<template>
  <div>
        <AppHeader />
        <nuxt />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import AppHeader from "~/components/AppHeader.vue";

export default Vue.extend({
    components: {
        AppHeader
    }
});

</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #333;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
a {
    text-decoration: none;
    color: gray;
}
</style>
