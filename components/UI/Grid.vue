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
        [`grid-${wrap}`]: wrap,
        [`grid-justify-${justify}`]: justify,
        [`grid-align-items-${align}`]: align
    }"
    v-bind="$attrs"
    v-on="$listeners">
        <slot/>
    </div>
</template>

<script lang="ts">
import Vue, {PropOptions} from 'vue';
import { Prop } from 'vue/types/options';

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
        direction: <PropOptions<"row" | "column" | "row-reverse" | "column-reverse">> {
            type: String,
            default: "row"
        },
        grow: <PropOptions<boolean>> {
            type: Boolean,
            default: false
        },
        wrap: <PropOptions<"wrap" | "no-wrap" | "wrap-reverse" | "inhert">> {
            type: String,
            default: "wrap"
        },
        justify: <PropOptions<"start" | "end" | "center" | "space-between" | "space-around">> {
            type: String,
            default: "start"
        },
        align: <PropOptions<"start" | "center" | "end" | "stretch">> {
            type: String,
            default: "start"
        }
    }
});

</script>

<style lang="scss">
    .grid-container {
        display: flex;
        width: 100%;
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
    .grid-justify-center {
        justify-content: center;
    }
    .grid-justify-start {
        justify-content: flex-start;
    }
    .grid-justify-end {
        justify-content: flex-end;
    }
    .grid-justify-space-between {
        justify-content: space-between;
    }
    .grid-justify-space-around {
        justify-content: space-around;
    }
    .grid-align-items-center {
        align-items: center;
    }
    .grid-align-items-strech {
        align-items: stretch;
    }
    .grid-align-items-start {
        align-items: start;
    }
    .grid-align-items-end {
        align-items: end;
    }

    @for $s from 1 through 6 {
        .grid-container.spacing-#{$s} {
            margin: -$s * 4px;
            width: calc(#{$s * 8px} + 100%);
        }

        // Sub Grid styling
        .grid-container.spacing-#{$s} > .grid-container {
            width: calc(100% + #{$s * 4px});
            margin: 0;
        }


        // add margin to direct descendants of a grid container
        .grid-container.spacing-#{$s} > .grid-item {
            margin: $s * 4px;
        }
        .grid-container.spacing-#{$s} > .button-root {
            margin: $s * 4px;
        }
        .grid-container.spacing-#{$s} > .list-root {
            margin: $s * 4px;
        }


        // sizing and responsive layout
        // .xs-col-12, .xs-col-6, .xs-col-1
        @for $i from 1 through 12 {
            .spacing-#{$s} > .xs-col-#{$i} {
                width: calc(#{(100 / (12 / $i) * 1%)} - #{$s * 8px} );
            }
        }

        @for $i from 1 through 12 {
                @media(min-width: 400px) {
                .spacing-#{$s} > .sm-col-#{$i}{
                    width: calc(#{(100 / (12 / $i) * 1%)} - #{$s * 8px} );
                }
            }
        }


        @for $i from 1 through 12 {
                @media(min-width: 800px) {
                .spacing-#{$s} > .md-col-#{$i} {
                    width: calc(#{(100 / (12 / $i) * 1%)} - #{$s * 8px} );
                }
            }
        }

        @for $i from 1 through 12 {
            @media(min-width: 1200px) {
                .lg-col-#{$i} {
                    width: calc(#{(100 / (12 / $i) * 1%)} - #{$s * 8px} );
                }
            }
        }
    }

</style>