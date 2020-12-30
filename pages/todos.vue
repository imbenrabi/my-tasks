<template>
  <div class="container">
    <AddTodo />
    <FilterTodos />
    <h3 class="lead text-dark">Todo Items</h3>
    <Legend />
    <div class="todos grid grid-3">
      <div
        @dblclick="onDoubleClick(todo)"
        v-for="todo in todos"
        :key="todo.id"
        class="todo card"
        :class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }}
        <fa
          @click="deleteTodo(todo.id)"
          class="icon"
          :icon="['fas', 'trash-alt']"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import AddTodo from "~/components/AddTodo.vue";
import FilterTodos from "~/components/FilterTodos.vue";
import Legend from "~/components/Legend.vue";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default Vue.extend({
  components: {
    AddTodo,
    FilterTodos,
    Legend,
  },
  async fetch({ store }) {
    await store.dispatch("loadAllTodos");
  },
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    onDoubleClick(todo: Todo): void {
      const updTodo = { ...todo, completed: !todo.completed };
      this.updateTodo(updTodo);
    },
  },
});
</script>

<style scoped>
.todos {
  grid-gap: 1rem;
}

.todo {
  padding: 1rem;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: var(--dark-color);
  cursor: pointer;
}

.is-complete {
  background: var(--secondary-color);
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
  .card {
    margin: 0px;
  }
}
</style>