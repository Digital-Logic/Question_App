import Vue from 'vue';
import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export type Answer = {
    id: number;
    answer: string;
    rank: number;
}

interface NewAnswer {
    questionId: number;
    answer: Answer;
}

export type Question = {
    id: number;
    question: string;
    slug: string;
    answers: Answer[];
    tags: string[];
}

export interface Questions {
    questions: { [id:number]: Question };
    filters: {
        tags: string[]
    };
}

export const state = ():Questions => ({
    questions: {},
    filters: {
        tags: []
    }
});

export type QuestionsState = ReturnType<typeof state>;

export const getters:GetterTree<QuestionsState, RootState> = {
    questions: state => {
        return Object.values(state.questions).filter(question =>
            state.filters.tags.reduce((result: boolean, tag:string) => {
                if (!question.tags.includes(tag))
                    return false;
                return result;
            }, true));
    },
    question: state => (id:number) => {
        return state.questions[id];
    },
    answers: state => (questionId:number) => state.questions[questionId].answers,
};

export const mutations:MutationTree<QuestionsState> = {
    ADD(state, question: Question) {
        state.questions[question.id] = question;
    },
    ADD_ANSWER(state, {questionId, answer }) {
        // push new answer on `question.answer` array, and sort it
        const question:Question = state.questions[questionId];
        Vue.set(state.questions[questionId], "answers",
            sortAnswers([...question.answers, answer])
        );
    },
    ADD_TAG(state, tag: string) {
        if (!state.filters.tags.includes(tag)) {
            state.filters.tags.push(tag);
        }
    },
    REMOVE_TAG(state, tag:string) {
        let index = state.filters.tags.indexOf(tag);
        state.filters.tags.splice(index, index + 1);
    }
};

export const actions:ActionTree<QuestionsState, RootState> = {
    fetchQuestions({ commit }) {
        return this.$axios.get<Question[]>(`/api/questions`)
            .then(({ data }) => {
                data.forEach(question => {

                    // presort answers before storing into state
                    commit("ADD", {
                        ...question,
                        answers: sortAnswers(question.answers || []),
                        tags: question.tags || []
                    });
                });
            }).catch(error => {
                console.log(error);
            });
    },
    addQuestion({commit}, question: { question: string, slug?: string, tags?: string[] }) {
        return this.$axios.post<Question>(`/api/questions`, question)
            .then(({ data }) => {
                commit("ADD", {
                    ...data,
                    answers: sortAnswers(data.answers || []),
                    tags: data.tags || []
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    addAnswer({ commit }, answer: { questionId:number, answer: string }) {
        return this.$axios.post<NewAnswer>(`/api/questions/${answer.questionId}`)
            .then(({ data }) => {
                commit("ADD_ANSWER", data);
            })
            .catch( error => {
                console.log(error);
            });
    }
};


function sortAnswers(answers: Answer[]): Answer[] {
    return answers.sort(
        (answerA, answerB) => answerB.rank - answerA.rank
    );
}