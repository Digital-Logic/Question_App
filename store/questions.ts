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
    questions: state => (filter: string | string[] | undefined) => {
        // no filter provide
        if (filter == undefined) {
            return state;
        }
    },
    answers: state => (questionId:number) => state[questionId].answers
};

export const mutations:MutationTree<QuestionsState> = {
    ADD(state, question: Question) {
        state[question.id] = question;
    }
};

export const actions:ActionTree<QuestionsState, RootState> = {
    fetchQuestions({ commit }) {
        return this.$axios.get<Question[]>("/api/questions")
            .then(({ data }) => {
                data.forEach(question => {

                    // presort answers before storing into state
                    commit("ADD", {
                        ...question,
                        answers: sortAnswers(question.answers || [])
                    });
                })
            }).catch(error => {
                console.log(error);
            });
    }
};


function sortAnswers(answers: Answer[]): Answer[] {
    return answers.sort(
        (answerA, answerB) => answerB.rank - answerA.rank
    );
}