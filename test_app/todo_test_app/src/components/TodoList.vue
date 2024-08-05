<template>
    <div>
        <ul>
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import TodoItem from './TodoItem.vue';

export default defineComponent({
    components: {
        TodoItem,
    },
    setup() {
        const store = useStore();

        return {
            todos: store.getters.allTodos,
        };
    },
});
</script>
<style scoped>
</style>