<template>
  <div id="app">
    <img class="image" alt="Vue logo" src="./assets/todo.png" />
    <Todo msg="TODO LIST" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todo from "./components/Todo.vue";

@Component({
  components: {
    Todo,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.image {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 7%;
}
</style>
