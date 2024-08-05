<template>
    <li>
        <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
            {{ todo.text }}
        </span>
        <button @click="toggleTodo">{{ todo.completed ? 'Undo' : 'Complete' }}</button>
        <button @click="removeTodo">Delete</button>
    </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore } from 'vuex';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export default defineComponent({
    props: {
        todo: {
            type: Object as PropType<Todo>,
            required: true,
        },
    },
    setup(props) {
        const store = useStore();

        const toggleTodo = () => {
            store.dispatch('toggleTodo', props.todo.id);
        };

        const removeTodo = () => {
            store.dispatch('removeTodo', props.todo.id);
        };

        return {
            toggleTodo,
            removeTodo,
        };
    },
});
</script>

<style scoped>
</style>