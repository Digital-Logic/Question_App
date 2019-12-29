<template>
    <ListItem class="listItem">
        <Paper class="paper"
            v-on:click="navigateToRoute">
            <Grid container :spacing="2" direction="column">
                <Grid container :spacing="2" direction="row">
                    <Grid item grow>
                        <h2>{{ question.question }}</h2>
                    </Grid>
                    <Grid item>
                        {{ question.slug}}
                    </Grid>
                </Grid>

                <Grid container :spacing="2" direction="row">
                    <Grid item>
                        {{ topAnswer }}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </ListItem>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { ListItem, Grid, Paper } from './UI';
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
        Paper
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
</style>