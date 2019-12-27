<template>
    <Grid container class="root" direction="column" :spacing="2">
        <Grid
            item
            :xs="12"
            class="item">item xs="12"</Grid>
        <Grid container :spacing="2" style="margin: 0">
            <Grid
                item
                :xs="12"
                :sm="6"
                :md="4"
                :lg="3"
                class="item"
                v-for="n in 8"
                :key="n">{{ n }} xs=4</Grid>
        </Grid>
    </Grid>
</template>

<script lang="ts">
import { Grid, List, ListItem } from '../components/UI';
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
    components: {
        Grid,
        List,
        ListItem
    }
});

</script>

<style lang="scss">
.root {
    padding: 20px;
}
.item {
    border: 2px solid gray;
    background-color: lightblue;
    padding: 20px;
    text-align: center;
}
</style>