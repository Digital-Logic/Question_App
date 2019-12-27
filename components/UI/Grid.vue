<template>
    <div :class="{
        'grid-container': container,
        'grid-item': item,
        [`grid_${direction}`]: direction,
        [`xs-col-${xs}`]: xs,
        [`sm-col-${sm}`]: sm,
        [`md-col-${md}`]: md,
        [`lg-col-${lg}`]: lg,
        [`spacing-${spacing}`]: spacing,
        [`grid-grow`]: grow,
        [`grid-${wrap}`]: wrap
    }"
    v-bind="$attrs"
    v-on="$listeners">
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
        wrap: <PropOptions<string>> {
            type: String,
            default: "wrap"
        }
    }
});

</script>

<style lang="scss">
    .grid-container {
        display: flex;
        width: 100%;
        overflow: hidden;
    }
    .grid-row {
        flex-direction: row;
    }
    .grid-column {
        flex-direction: column;
    }
    .grid-row-reverse {
        flex-direction: row-reverse;
    }
    .grid-column-reverse {
        flex-direction: column-reverse;
    }
    .grid-grow {
        flex-grow: 1;
    }
    .grid-wrap {
        flex-wrap: wrap;
    }
    .grid-no-wrap {
        flex-wrap: nowrap;
    }
    .grid-wrap-reverse {
        flex-wrap: wrap-reverse;
    }
    .grid-wrap-inherit {
        flex-wrap: inherit;
    }

    @for $s from 1 through 6 {
        .grid-container.spacing-#{$s} {
            margin: -$s * 4px;
            width: calc(#{$s * 8px} + 100%);
        }

        // Sub Grid styling
        .grid-container.spacing-#{$s} > .grid-container {
            width: calc(100% + #{$s * 4px});
            margin: -$s * 4px;
        }

        .grid-container.spacing-#{$s} > .grid-item {
            margin: $s * 4px;
        }

         // sizing and responsive layout
        @for $i from 1 through 12 {
            .xs-col-#{$i} {
                width: calc(#{(100 / (12 / $i) * 1%)} - #{$s * 3px} );
            }
        }

        @for $i from 1 through 12 {
                @media(min-width: 400px) {
                .sm-col-#{$i}{
                    width: calc(#{(100 / (12 / $i) * 1%)} - #{$s * 3px} );
                }
            }
        }


        @for $i from 1 through 12 {
                @media(min-width: 800px) {
                .md-col-#{$i} {
                    width: calc(#{(100 / (12 / $i) * 1%)} - #{$s * 3px} );
                }
            }
        }

        @for $i from 1 through 12 {
            @media(min-width: 1200px) {
                .lg-col-#{$i} {
                    width: calc(#{(100 / (12 / $i) * 1%)} - #{$s * 3px} );
                }
            }
        }
    }

</style>