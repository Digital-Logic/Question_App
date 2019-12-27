<template>
    <Grid>
        <List>

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
        ...mapGetters({
            questions: "questions/questions"
        })
    }
});
</script>

<style lang="scss">


</style>
