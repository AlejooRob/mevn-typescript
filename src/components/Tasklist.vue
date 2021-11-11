<template>
  <div class="container mx-auto px-5">
    <ul class="">
      <li
        class="cursor-pointer hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 mb-4"
        v-for="task in tasks"
        :key="task._id"
        @click="this.$router.push(`/tasks/${task._id}`)"
      >
        <p class="text-lg text-blue-500"> {{ task.title }}</p>
        <p>{{task.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { getTasks } from "@/services/TaskServices";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      this.tasks = res.data;
    },
  },
  mounted() {
    this.loadTasks();
  },
});
</script>
