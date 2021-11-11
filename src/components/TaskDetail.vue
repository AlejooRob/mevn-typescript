<template>
  <div class="container mx-auto px-8">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900 mt-4">
            Task Detail
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            tempore non iusto sed at adipisci dolores officia corrupti est, quae
            aliquid. Dolor dolorum similique culpa iure ullam, numquam molestias
            non.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit.prevent="handleUpdate()">
          <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6 space-y-6">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="title"
                    class="block text-sm font-medium text-gray-700"
                    >Title</label
                  >
                  <input
                    type="text"
                    name="title"
                    placeholder="Write a title"
                    v-model="currentTask.title"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                      p-3
                    "
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                    >Description</label
                  >
                  <textarea
                    rows="3"
                    name="description"
                    placeholder="Write a description"
                    v-model="currentTask.description"
                    class="
                      shadow-sm
                      focus:ring-indigo-500 focus:border-indigo-500
                      mt-1
                      block
                      w-full
                      sm:text-sm
                      border border-gray-300
                      rounded-md
                      p-3
                    "
                  ></textarea>
                </div>

                <button
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-green-600
                    hover:bg-green-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-green-500
                  "
                >
                  Update
                </button>

                <button @click="handleDelete()"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-red-600
                    hover:bg-red-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-red-500
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    
    
    
    
    
    
    
    
    <!-- Los terminos de uso -->
    
    <!-- <h1>Task Detail</h1>
    <form >
        <input type="text" >
        <textarea rows="3" ></textarea>
        <button>Update</button>
    </form>
    <button >Delete</button> -->
</template>

<script lang="ts">
import { Task } from '@/interfaces/Task'
import { deleteTask, getTask, updateTask } from '@/services/TaskServices'
import { defineComponent } from  'vue'

export default defineComponent({
    data() {
        return {
            currentTask: {} as Task
        }
    },
     methods: {
         async loadTask(id: string) {
            const res = await getTask(id)
            this.currentTask = res.data
         },
         async handleUpdate() {
             if (typeof this.$route.params.id === 'string') {
                const res = await updateTask(this.$route.params.id, this.currentTask);
                this.$router.push('/')
             }
         },
         async handleDelete() {
             if (typeof this.$route.params.id === 'string') {
                const res = await deleteTask(this.$route.params.id);
                this.$router.push('/')
             }
         }
     },
    mounted() {
        if(typeof this.$route.params.id === 'string'){
            this.loadTask(this.$route.params.id)
        }
        
    }
})
</script>