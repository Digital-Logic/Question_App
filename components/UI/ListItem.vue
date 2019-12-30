<template>
    <li class="list-item-root"
        :class="{
            [`list-item-variant-${variant}`]: variant
        }"
        v-bind="$attrs"
        v-on="$listeners">
        <slot/>
    </li>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
    props: {
        variant: <PropOptions<"outlined">> {
            type: String,
            required: false
        }
    }
});
</script>

<style lang="scss">
    .list-item-root {
        padding: 10px;
    }

    .list-item-variant-outlined {
        border: 1px solid gray;
    }
</style>