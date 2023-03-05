<template>
	<v-row>
		<v-col cols="12">
			<v-text-field
				bg-color="blue-grey-lighten-2"
				v-bind:value="sections[sectionId]"
				v-on:input="$emit('update:section', $event.target.value, sectionId)"
			>
			</v-text-field>

			<v-col
				v-for="(todo, index) in filteredTodos"
				v-bind:key="index"
			>
				<TaskCard
					v-bind:todo="todo"
					v-bind:sections="sections"
					v-on:update:task-card-task-title="taskTitleChangeHandler"
					v-on:update:task-card-task-body="taskBodyChangeHandler"
					v-on:task-card-task-like="taskLikeChangeHandler"
					v-on:task-card-task-delete="taskDeleteChangeHandler"
					v-on:task-card-task-done="taskDoneChangeHandler"
					v-on:task-card-task-section="taskSectionChangeHandler"
				>
				</TaskCard>				
			</v-col>

			<v-btn
				v-on:click="$emit('task-section-add-task', sectionId)"
				class="ml-2"
				size="small"
				color="surface-variant"
				variant="text"
				prepend-icon="mdi-plus-thick"
			>
			Add Task
			</v-btn>
		</v-col>
	</v-row>
</template>

<script>
import TaskCard from './TaskCard.vue'

export default {
	name: 'TaskSection',
	components: {
    TaskCard
	},
	props: ['sectionId', 'todos', 'sections'],
	emits: [
		'update:task-section-task-title',
		'update:task-section-task-body',
		'task-section-task-section',
		'task-section-task-delete',
		'task-section-task-done',
		'task-section-task-like'
	],
	methods: {
		taskTitleChangeHandler(newVal, key, taskId) {
			this.$emit('update:task-section-task-title', newVal, key, taskId)
		},
		taskBodyChangeHandler(newVal, key, taskId) {
			this.$emit('update:task-section-task-body', newVal, key, taskId)
		},
		taskLikeChangeHandler(newVal, key, taskId) {
			this.$emit('task-section-task-like', newVal, key, taskId)
		},
		taskDeleteChangeHandler(taskId) {
			this.$emit('task-section-task-delete', taskId)
		},
		taskDoneChangeHandler(newVal, key, taskId) {
			this.$emit('task-section-task-done', newVal, key, taskId)
		},
		taskSectionChangeHandler(newVal, key, taskId) {
			this.$emit('task-section-task-section', newVal, key, taskId)
		}
	},
	computed: {
		filteredTodos() {
			let filteredTodos = []

			for (const todo of this.todos) {
				if (todo.sectionId === this.sectionId) {
					filteredTodos.push(todo)
				}
			}
			return filteredTodos
		}
	}
}
</script>
