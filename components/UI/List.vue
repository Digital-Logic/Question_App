<template>
    <ul class="list-root">
        <slot />
    </ul>
</template>

<script lang="ts">
    import Vue, { PropOptions } from "vue";

    export default Vue.extend({
        props: {
            spacing:<PropOptions<number>> {
                type: Number,
                default: 0
            }
        }
    });
</script>

<style lang="scss">
    .list-root {
        list-style: none;
        margin: 0;
        padding: 15px;
    }
</style>