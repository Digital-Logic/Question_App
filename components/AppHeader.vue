<template>
    <Paper class="root"
        :radius="false">
        <Grid container :spacing="2" :xs="12">
            <Grid item grow>
                <h1>Question and Answer App</h1>
            </Grid>
            <Grid item>
                <nuxt-link to="/">Quesitons</nuxt-link>
            </Grid>
        </Grid>
    </Paper>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Grid, Paper } from './UI';

export default Vue.extend({
    components: {
        Grid,
        Paper
    }
});
</script>

<style lang="scss" scoped>
    .root {
        background-color: lightblue;
        padding: 10px;
    }
    .header {

    }
</style>