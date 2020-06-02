<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form @submit.prevent="addTask">
      <input
        class="newTask shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Please enter the task name"
      />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        ADD
      </button>
    </form>
    <ul>
      <li
        v-show="task.value !== ''"
        v-for="(task, index) in todoList"
        :key="index"
      >
        <input
          class="task-checkbox"
          type="checkbox"
          @change="refreshCheckStatus($event)"
        />
        {{ task.value }}
        <button
          class="delete-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="removeTask(task.id)"
        >
          DELETE
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

type taskType = [
  {
    id: number;
    value: string;
  }
];

@Component
export default class Todo extends Vue {
  @Prop() private msg!: string;
  newTask: string = "";
  todoList: taskType = [{ id: 0, value: "" }];

  addTask(): void {
    const inputTextElement = this.$el.getElementsByClassName(
      "newTask"
    )[0] as HTMLInputElement;

    const todo = this.todoList.find((task) => task.id === 0);
    if (this.todoList.length === 1 && todo?.value === "") {
      if (todo) todo.value = `${inputTextElement.value}`;
    } else {
      this.todoList.push({
        id: this.todoList.length,
        value: inputTextElement.value,
      });
    }

    inputTextElement.value = "";
  }

  removeTask(id: number): void {
    for (let i = this.todoList.length - 1; i >= 0; i--) {
      if (this.todoList[i].id === id) this.todoList.splice(i, 1);
    }
  }

  refreshCheckStatus(e: MouseEvent): void {
    const target = e.target as HTMLInputElement;
    if (!target) return;

    const parent: HTMLElement | null = target.parentElement;
    if (!parent) return;

    parent.classList.toggle("chacked-li");
  }
}
</script>

<style scoped lang="scss">
h1 {
  font-family: "BIZ UDPGothic";
}

form {
  margin-top: 2%;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 3%;
}

li {
  display: list-item;
  margin: 0 10px;
}

a {
  color: #42b983;
}

li.chacked-li {
  text-decoration: line-through;
}

.task-checkbox {
  margin-right: 1.5%;
}

.delete-button {
  margin-left: 2%;
}

.newTask {
  width: 60%;
}
</style>
