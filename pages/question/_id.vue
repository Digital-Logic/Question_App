<template>
    <Grid container class="root">
        <Question
            class="question"
            :question="question"
        />
    </Grid>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Grid } from "~/components/UI";
import Question from "~/components/Question.vue";

export default Vue.extend({
    fetch: ({ store }) =>
        store.dispatch(`questions/fetchQuestions`),
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    components: {
        Question,
        Grid
    },
    computed: {
        question() {
            const id = this.$route.params.id;
            return this.$store.getters['questions/question'](this.$route.params.id);
        }
    }
});
</script>

<style lang="scss" scoped>
    .root {
        padding: 20px;
    }
    .question {
        width: 100%;
    }
</style>