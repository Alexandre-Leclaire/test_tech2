<template>
  <div id="app">
    <h1>Todo List</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add Todo</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style>
nav {
  margin-bottom: 1em;
}

nav a {
  margin-right: 1em;
}
</style>
