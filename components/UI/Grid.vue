<template>
    <div :class="{
        container: container,
        'grid-item': item,
        [`grid_${direction}`]: direction,
        [`col-${xs}`]: xs,
        [`spacing-${spacing}`]: spacing
    }">
        <slot/>
    </div>
</template>

<script lang="ts">
import Vue, {PropOptions} from 'vue';

export type Direction = "row" | "column" | "row-reverse" | "column-reverse";

export default Vue.extend({
    props: {
        container: <PropOptions<boolean>> {
            type: Boolean,
            default: false
        },
        item: <PropOptions<boolean>> {
            type: Boolean,
            default: false
        },
        xs: <PropOptions<number>> {
            type: Number,
            deault: 0
        },
        spacing: <PropOptions<number>> {
            default: 0
        },
        direction: <PropOptions<Direction>> {
            type: String,
            default: "row"
        }
    }
});

</script>

<style lang="scss">
    .container {
        display: flex;
        width: 100%;
    }
    .grid_row {
        flex-direction: row;
    }
    .grid_column {
        flex-direction: column;
    }
    .grid_row-reverse {
        flex-direction: row-reverse;
    }
    .grid_column-reverse {
        flex-direction: column-reverse;
    }
    .grid-item {

    }

    @for $s from 1 through 6 {
        .container.spacing-#{$s} {
            margin: -$s * 4px;
        }

        // handle sub grid
        .container.spacing-#{$s} > .container {
            width: 100%;
            margin: 0;
        }

        .container.spacing-#{$s} > .grid-item {
            margin: $s * 4px;
        }
        @for $i from 1 through 12 {
            .spacing-#{$s} > .col-#{$i} {
                width: calc(
                    #{(100 /(12 / $i) * 1%)} - #{($s * 8px)}
                );
            }
        }
    }

</style>