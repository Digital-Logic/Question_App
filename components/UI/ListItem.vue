<template>
    <li class="list-item-root">
        <slot/>
    </li>
</template>

<style lang="scss">
    .list-item-root {
        border: 1px solid lightgray;
        padding: 10px;
        cursor: default;
    }
</style>