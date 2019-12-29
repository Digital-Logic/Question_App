<template>
    <li class="list-item-root"
        v-bind="$attrs"
        v-on="$listeners">
        <slot/>
    </li>
</template>

<script lang="tc">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
    props: {

    }
});
</script>

<style lang="scss">
    .list-item-root {
        padding: 10px;
    }

</style>