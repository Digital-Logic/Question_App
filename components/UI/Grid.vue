<template>
    <div :class="{
        container: container,
        'grid-item': item,
        [`grid_${direction}`]: direction,
        [`xs-col-${xs}`]: xs,
        [`sm-col-${sm}`]: sm,
        [`md-col-${md}`]: md,
        [`lg-col-${lg}`]: lg,
        [`spacing-${spacing}`]: spacing,
        [`grid-grow`]: grow
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
        sm: <PropOptions<number>> {
            type: Number,
            default: 0
        },
        md: <PropOptions<number>> {
            type: Number,
            default: 0
        },
        lg: <PropOptions<number>> {
            type: Number,
            default: 0
        },
        spacing: <PropOptions<number>> {
            default: 0
        },
        direction: <PropOptions<Direction>> {
            type: String,
            default: "row"
        },
        grow: <PropOptions<boolean>> {
            type: Boolean,
            default: false
        },
    }
});

</script>

<style lang="scss">
    .container {
        display: flex;
        flex-wrap: wrap;
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
    .grid-grow {
        flex-grow: 1;
    }

    @for $s from 1 through 6 {
        .container.spacing-#{$s} {
            margin: -$s * 4px;
            width: calc(#{$s * 8px} + 100%);
        }

        // Sub Grid styling
        .container.spacing-#{$s} > .container {
            width: calc(100% + #{$s * 4px});
            margin: -$s * 4px;
        }

        .container.spacing-#{$s} > .grid-item {
            margin: $s * 4px;
        }

         // sizing and responsive layout
        @for $i from 1 through 12 {
            .xs-col-#{$i} {
                width: calc(#{(100 / (12 / $i) * 1%)} - #{$s * 4px} );
            }
        }

        @for $i from 1 through 12 {
                @media(min-width: 400px) {
                .sm-col-#{$i}{
                    width: calc(#{(100 / (12 / $i) * 1%)} - #{$s * 4px} );
                }
            }
        }


        @for $i from 1 through 12 {
                @media(min-width: 800px) {
                .md-col-#{$i} {
                    width: calc(#{(100 / (12 / $i) * 1%)} - #{$s * 4px} );
                }
            }
        }

        @for $i from 1 through 12 {
            @media(min-width: 1200px) {
                .lg-col-#{$i} {
                    width: calc(#{(100 / (12 / $i) * 1%)} - #{$s * 4px} );
                }
            }
        }
    }

</style>