import { createStore } from 'vuex';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
  nextTodoId: number;
}

export default createStore<State>({
  state: {
    todos: [],
    nextTodoId: 1,
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  mutations: {
    addTodo (state, text: string) {
      state.todos.push({
        id: state.nextTodoId++,
        text,
        completed: false,
      });
      },
      
    toggleTodo (state, id: number) {
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      },
    
    removeTodo (state, id: number) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
  },
  actions: {
    addTodo ({ commit }, text: string) {
      commit('addTodo', text);
    },
    toggleTodo ({ commit }, id: number) {
      commit('toggleTodo', id);
    },
    removeTodo ({ commit }, id: number) {
      commit('removeTodo', id);
    },
  },
});