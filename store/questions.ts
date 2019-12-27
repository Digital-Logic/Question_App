import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export type Answer = {
    id: number;
    answer: string;
    rank: number;
}

export type Question = {
    id: number;
    question: string;
    slug: string;
    answers: Answer[];
}

export interface Questions {
    [id:number]: Question;
}

export const state = ():Questions => ({});

export type QuestionsState = ReturnType<typeof state>;

export const getters:GetterTree<QuestionsState, RootState> = {
    questions(state) {
        return state;
    }
};

export const mutations:MutationTree<QuestionsState> = {
    ADD(state, question: Question) {
        if (!state[question.id]) {
            state[question.id] = question;
        }
    }
};

export const actions:ActionTree<QuestionsState, RootState> = {
    fetchQuestions({ commit }) {
        return this.$axios.get<Question[]>("/api/questions")
            .then(({ data }) => {
                data.forEach(question => {
                    commit("ADD", question);
                })
            }).catch(error => {
                console.log(error);
            });
    }
};
