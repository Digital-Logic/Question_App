<template>
    <component
        class="button-root"
        :is="component"
        v-bind="$attrs"
        v-on="$listeners"
        :class="{
            [`button-${variant}`]: variant
            }">
        <span :class="{
            [`button-text-${text}`]: text
        }">
            <slot />
        </span>
    </component>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
    props: {
        component: {
            default: "button"
        },
        variant: <PropOptions<"text" | "outlined" | "contained">>{
            type: String,
            default: "text"
        },
        text: <PropOptions<"none" | "uppercase" | "capitalize">>{
            type: String,
            default: "uppercase"
        }
    }
});
</script>

<style lang="scss">
    .button-root {
        padding: 10px 5px;
        display: inline-block;
        background-color: transparent;
        border: none;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        padding: 8px 15px;
        border-radius: 4px;
        transition: background-color 0.3s;
    }

    .button-text-uppercase {
        text-transform: uppercase;
    }
    .button-text-capitalize {
        text-transform: capitalize;
    }

    .button-text {
        &:active {
            background-color: #d6d6d6;
        }
    }

    .button-outlined {
        border: 1px solid gray;
        &:hover {
            background-color: #e4e4e4;
        }
        &:active {
            background-color: #bbbbbb;
        }
    }

    .button-contained {
        border: 1px solid gray;
        background-color: #f7f7f7;
        &:hover {
            background-color: #e4e4e4;
        }
         &:active {
            background-color: #bbbbbb;
        }
    }

</style>