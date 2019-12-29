<template>
    <ListItem class="listItem">
        <Paper class="paper"
            component="a"
            :href="`question/${question.id}`"
            v-on:click.prevent="navigateToRoute">
            <Grid container :spacing="2" direction="column">
                <Grid container :spacing="2" direction="row">
                    <Grid item grow>
                        <h2>{{ question.question }}</h2>
                    </Grid>
                    <Grid item>
                        {{ question.slug}}
                    </Grid>
                </Grid>

                <Grid container :spacing="2">
                    <Grid item grow>
                        {{ topAnswer }}
                    </Grid>

                    <Grid item container :spacing="2" wrap="no-wrap">
                        <Tag
                            class="tag"
                            v-for="tag in question.tags"
                            :key="tag"
                            :text="tag"
                            v-on:click.prevent.stop="filterTag"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </ListItem>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { ListItem, Grid, Paper, Tag } from './UI';
import { Question, Answer } from "~/store/questions";

export default Vue.extend({
    props: {
        question: <PropOptions<Question>>{
            type: Object
        }
    },
    components: {
        ListItem,
        Grid,
        Paper,
        Tag
    },
    computed: {
        topAnswer() {
            try {
                return this.$props.question.answers[0].answer;
                // Catch TypeError, if answers[0] is not a valid answer
            } catch(error) {
                return "";
            }
        },
        answers() {
            return this.$props.question.answers;
        }
    },
    methods: {
        navigateToRoute() {
            this.$router.push({
                path: `/question/${this.$props.question.id}`
            })
        },
        filterTag(event: MouseEvent) {
            console.log(event);
        }
    }
});

</script>

<style lang="scss" scoped>
    .listItem {
        padding: 5px;
    }
    .paper {
        padding: 15px;
        cursor: pointer;
    }
    .tag {
        transition: background-color 0.3s;
        background-color: transparent;
        &:hover {
            background-color: gray;
        }
        &:click {
            background-color: gray;
        }
    }
</style>