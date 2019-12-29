<template>
    <Grid>
        <List>
            <Question
                v-for="question in questions()"
                :question="question"
                :key="question.id" />
        </List>
    </Grid>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Grid, List } from "~/components/UI";
import Question from "../components/Question.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
    fetch({ store }) { return store.dispatch("questions/fetchQuestions"); },
    components: {
        Grid,
        List,
        Question
    },
    computed: {
        questions() {
            return  (filter: string | string[] | undefined) => {
                return this.$store.getters['questions/questions'](filter);
            };
        }
    }
});
</script>

<style lang="scss" scoped>


</style>
