import { GetterTree, ActionTree, MutationTree } from 'vuex';

export const state = () => ({
    todos: [] as { userId: number, id: number, title: string, completed: boolean }[]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    getAllTodos: (state) => state.todos
}

export const actions: ActionTree<RootState, RootState> = {
    async loadAllTodos({ commit }) {
        const res = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos');
        commit('SET_TODOS', res);
    },
    async addTodo({ commit }, title) {
        const res = await this.$axios.$post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
        commit('NEW_TODO', res);
    },
    async deleteTodo({ commit }, id) {
        await this.$axios.$delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('REMOVE_TODO', id);
    },
    async filterTodos({ commit }, event) {
        // Get selected number of tasks
        const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
        const res = await this.$axios.$get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('SET_TODOS', res);
    },
    async updateTodo({ commit }, updatedTodo) {
        const res = await this.$axios.$put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
        commit('UPD_TODO', res)
    }
}

export const mutations: MutationTree<RootState> = {
    SET_TODOS: (state, todos) => state.todos = todos,
    NEW_TODO: (state, todo) => state.todos.unshift(todo),
    REMOVE_TODO: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    UPD_TODO: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    }
}
