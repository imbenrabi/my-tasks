<template>
  <div class="legend">
    <span>Double click to mark as complete</span>
    <span> <span class="incomplete-box"></span> = Incomplete </span>
    <span> <span class="complete-box"></span> = Complete </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Legend",
});
</script>

<style scoped>
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.incomplete-box {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.complete-box {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: var(--secondary-color);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 500px) {
  .legend {
    flex-direction: column;
  }
}
</style>