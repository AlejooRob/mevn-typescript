<template>
  <nav class="bg-gray-400 text-white p-5 mb-4 font-mono flex flex-row ">
    <div class="container mx-auto px-4 flex justify-between">
      <div class="flex justify-start">
        <h1>
            <router-link to="/" class="uppercase text-lg hover:text-blue-300">Vue&Typescript</router-link>
        </h1>
      </div>
      <div class="flex justify-end">
        
            <router-link to="/" class="mr-8 hover:text-blue-300">Tasks</router-link>
          
            <router-link to="/tasks/new" class=" hover:text-blue-300">Create taks</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>
