<template>
    <component :is="component"
        class="paper-root"
        :class="{
            [`paper-elevation-${elevation}`]: elevation,
            [`paper-border-radius`]: radius
        }"
        v-bind="$attrs"
        v-on="$listeners">
        <slot />
    </component>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
    props: {
        elevation: <PropOptions<number>>{
            type: Number,
            default: 2
        },
        radius: <PropOptions<boolean>> {
            type: Boolean,
            default: true
        },
        component: {
            default: "div"
        }
    }
});
</script>

<style lang="scss">

.paper-root {
    display: block;
    border: 1px solid rgb(170, 170, 170);
    padding: 5px;
    color: #333;
}
.paper-border-radius {
    border-radius: 4px;
}

@for $i from 1 through 6 {
    .paper-elevation-#{$i} {
        box-shadow: ($i * 1px) ($i * 1px) ($i * 4px) rgba(0,0,0,0.4);
    }
}

</style>