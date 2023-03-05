<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="end" p-2>
          <v-btn
          @click="toggleTheme"
          icon="mdi-theme-light-dark"
          >
          </v-btn>
        </v-row>
        <v-row>
          <v-col
            v-for="(section, index) in sections"
            v-bind:key="index"
            align-self="start"
            cols="3"
          > 
            <TaskSection
              v-bind:sectionId="index"
              v-bind:todos="todos"
              v-bind:sections="sections"
              v-on:update:section="sectionHandler"
              v-on:update:task-section-task-title="taskHandler"
              v-on:update:task-section-task-body="taskHandler"
              v-on:task-section-task-like="taskHandler"
              v-on:task-section-task-delete="taskDeleteHandler"
              v-on:task-section-task-done="taskHandler"
              v-on:task-section-task-section="taskHandler"
              v-on:task-section-add-task="addTaskHandler"
            />
          </v-col>

          <v-btn
            v-on:click="this.sections.push('')"
            class="mt-3"
            color="surface-varian"
            variant="text"
            prepend-icon="mdi-plus-thick"
          >
          Add Section
          </v-btn>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TaskSection from './components/TaskSection.vue'
import { useTheme } from 'vuetify'

export default {
  name: 'App',

  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },

  components: {
    TaskSection

  },

  data: () => ({
    sections: [],
    todos: []
  }),
  methods: {
    taskHandler(newVal, key, taskId) {
      for (const todo of this.todos) {
        if (todo['id'] === taskId) {
          todo[key] = newVal
        }
      }
    },
    taskDeleteHandler(taskId) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== taskId
      })
    },
    sectionHandler(value1, value2) {
      this.sections[value2] = value1
    },
    addTaskHandler(sectionId) {
      let newId = 0
      if (this.todos.length) {
          newId = this.todos.slice(-1)[0].id + 1
        }
      const todo = {
        id: newId,
        title: '',
        body: '',
        sectionId: sectionId,
        like: false,
        isDone: false
      }
      this.todos.push(todo)
    }
  }
}
</script>
