<template>
    <Grid>
        <List>
            <ListItem class="listItem"
                 v-for="question of questions"
                 :key="question.id" >
                <Question
                    :question="question"
                    component="a"
                    :href="`/question/${question.id}`"
                    v-on:click.prevent="() => navigateToRoute(question.id)"
                    />
            </ListItem>
        </List>
    </Grid>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Grid, List, ListItem } from "~/components/UI";
import Question from "../components/Question.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
    fetch:({ store }) => store.dispatch("questions/fetchQuestions"),
    components: {
        Grid,
        List,
        ListItem,
        Question
    },
    computed: {
        questions() {
            return this.$store.getters['questions/questions'];
        }
    },
    methods: {
        navigateToRoute(id:number) {
            this.$router.push({
                path: `/question/${id}`
            })
        }
    }
});
</script>

<style lang="scss" scoped>
    .listItem {
        padding: 5px;
    }

</style>
