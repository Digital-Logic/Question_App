<template>
    <Paper class="root"
        :radius="false">
        <Grid container :spacing="2" :xs="12">
            <Grid item grow>
                <h1>Question and Answer App</h1>
            </Grid>

            <Grid
                v-if="$route.path == '/'"
                item
                container
                spacing="2">
                <Tag
                    class="tags"
                    v-for="tag of tags"
                    :key="tag"
                    :label="tag"
                    v-on:click="() => removeTag(tag)"
                />
            </Grid>

            <Button
                v-else
                component="nuxt-link"
                to="/">Back to Questions</Button>
        </Grid>
    </Paper>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Grid, Paper, Button, Tag } from './UI';

export default Vue.extend({
    components: {
        Grid,
        Paper,
        Button,
        Tag
    },
    computed: {
        tags() {
            return this.$store.state.questions.filters.tags;
        }
    },
    methods: {
        removeTag(tag:string) {
            console.log("Clicked!");
            this.$store.commit("questions/REMOVE_TAG", tag);
        }
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
    .tags {
        cursor: pointer;
    }
</style>