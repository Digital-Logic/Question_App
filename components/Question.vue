<template>
    <Grid>
        <Paper class="paper"
            v-bind="$attrs"
            v-on="$listeners">
            <Grid container :spacing="2" direction="column">
                <Grid container :spacing="2" direction="row">
                    <Grid item grow>
                        <h2>{{ question.question }}</h2>
                    </Grid>
                    <Grid item>
                        {{ question.slug}}
                    </Grid>
                </Grid>

                <Grid container :spacing="2" align="center">
                    <Grid item grow>
                        {{ topAnswer }}
                    </Grid>

                    <Grid item container wrap="no-wrap">
                        <Tag
                            class="tag"
                            v-for="tag in question.tags"
                            :key="tag"
                            :label="tag"
                            v-on:click.prevent.stop="() => filterTag(tag)"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Paper>

        <Grid v-if="this.$route.path != '/'">

            <h3 class="subheading">Other Answers</h3>

            <Paper class="answers">
                <List>
                    <ListItem
                        class="listItem"
                        v-for="(answer, index) of answers"
                        :key="index">
                        <Grid container :spacing="2">
                            <Grid item grow>
                                <span>{{ answer.answer }}</span>
                            </Grid>
                            <span>Rank: {{ answer.rank }}</span>
                        </Grid>
                    </ListItem>
                </List>

                <h5>Add answer form goes here...</h5>
            </Paper>
        </Grid>
    </Grid>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Grid, Paper, Tag, List, ListItem } from './UI';
import { Question, Answer } from "~/store/questions";

export default Vue.extend({
    props: {
        question: <PropOptions<Question>>{
            type: Object
        }
    },
    components: {
        Grid,
        Paper,
        Tag,
        List,
        ListItem
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
            return this.$props.question.answers.slice(1);
        }
    },
    methods: {
        filterTag(tag: string) {
            this.$store.commit("questions/ADD_TAG", tag);
        }
    }
});

</script>

<style lang="scss" scoped>
    .paper {
        padding: 15px;
        cursor: pointer;
    }
    .tag {
        transition: background-color 0.3s;
        background-color: transparent;
        margin-left: 10px;
        &:hover {
            background-color: rgb(224, 224, 224);
        }
        &:active {
            background-color: rgb(194, 194, 194);
        }
    }
    .subheading {
        margin-top: 30px;
    }
    .listItem {
        border-bottom: 1px solid rgb(212, 212, 212);
        &:last-child {
            border-bottom: none;
        }
    }
    .answers {
        margin-top: 20px;
    }
</style>