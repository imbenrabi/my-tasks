<template>
  <div>
    <h3 class="lead text-dark">Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input
          type="text"
          v-model="title"
          placeholder="Describe your todo..."
        />
        <input class="btn btn-secondary" type="submit" value="Add" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "AddTodo",
  data() {
    return { title: "" };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e: any): void {
      e.preventDefault();
      this.addTodo(this.title);
      this.title = "";
    },
  },
});
</script>

<style scoped>
form {
  display: flex;
}

form input:focus {
  outline: none;
}

input[type="text"] {
  flex: 10;
  border: 1px solid #b4becb;
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

input[type="submit"] {
  flex: 2;
}
</style>