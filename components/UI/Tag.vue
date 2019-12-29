<template>
    <div
        :class="{
            [`tag-variant-${variant}`]: variant
        }"
        class="tag-root"
        v-bind="$attrs"
        v-on="$listeners">
        <span class="tag-label">{{ text }}</span>
    </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
    props: {
        text: <PropOptions<string>> {
            type: String,
            required: true
        },
        deletable: <PropOptions<boolean>> {
            type: Boolean,
            default: false
        },
        variant: <PropOptions<"outlined">> {
            type: String,
            default: "outlined"
        }
    }
});
</script>

<style lang="scss">
    .tag-root {
        display: inline-flex;
        align-items: center;
        height: 32px;
        border-radius: 16px;
        font-size: .8125rem;
    }
    .tag-variant-outlined {
        border: 1px solid gray;
    }
    .tag-label {
        padding-left: 12px;
        padding-right: 12px;
    }
</style>