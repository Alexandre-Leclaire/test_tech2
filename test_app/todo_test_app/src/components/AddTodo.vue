<template>
    <div>
        <h2>Add New Todo</h2>
        <input v-model="newTodo" placeholder="Enter a new todo" />
        <button @click="addTodo">Add Todo</button>
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const store = useStore();
        const router = useRouter();
        const newTodo = ref('');
        const error = ref('');

        const addTodo = () => {
            if (!newTodo.value.trim()) {
                error.value = 'Todo cannot be empty';
                return;
            }
            store.dispatch('addTodo', newTodo.value);
            newTodo.value = '';
            error.value = '';
            router.push('/');
        };

        return {
            newTodo,
            error,
            addTodo,
        };
    },
});
</script>

<style scoped>
.error {
    color: red;
}
</style>