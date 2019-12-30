<template>
    <Grid>
        <List>
            <Question
                v-for="question of questions"
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
            return this.$store.getters['questions/questions'];
        }
    }
});
</script>

<style lang="scss" scoped>


</style>
