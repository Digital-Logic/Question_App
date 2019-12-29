<template>
    <div class="paper-root"
        :class="{
            [`paper-elevation-${elevation}`]: elevation,
            [`paper-border-radius`]: radius
        }">
        <slot />
    </div>
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
        }
    }
});
</script>

<style lang="scss">

.paper-root {
    border: 1px solid gray;
    padding: 5px;
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