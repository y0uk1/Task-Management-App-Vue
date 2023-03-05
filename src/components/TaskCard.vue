<template>
	<v-card
		class="mx-auto"
	>
		<v-card-text>
			<v-text-field
				style="font-weight: bold;"
				v-bind:value="todo.title"
				v-bind:class="{ 'text-decoration-line-through': todo.isDone }"
				v-on:input="$emit('update:task-card-task-title', $event.target.value, 'title', todo.id)"
			>
			</v-text-field>

			<v-select
				v-bind:items="sections"
				v-model="selected"
				label="Section"
			>
			</v-select>

			<v-textarea
				v-bind:value="todo.body"
				v-on:input="$emit('update:task-card-task-body', $event.target.value, 'body', todo.id)"
				variant="filled"
				auto-grow
			>
			</v-textarea>
		</v-card-text>

		<v-card-actions>
			<v-spacer></v-spacer>

			<v-btn
				v-on:click="$emit('task-card-task-delete', todo.id)"
				variant="text"
			>
				<v-icon
					color="surface-variant"
				>mdi-trash-can
				</v-icon>
				<v-tooltip
					activator="parent"
					location="top"
				>Delete
				</v-tooltip>
			</v-btn>

			<v-btn
				v-on:click="$emit('task-card-task-done', !todo.isDone, 'isDone', todo.id)"
				variant="text"
			>
				<v-icon
					v-bind:color="todo.isDone ? 'green': ''"
				>mdi-check-bold
				</v-icon>
				<v-tooltip
					activator="parent"
					location="top"
				>Done
				</v-tooltip>
			</v-btn>

			<v-btn
				v-on:click="$emit('task-card-task-like', !todo.like, 'like', todo.id)"
				variant="text"
			>
				<v-icon
					v-bind:color="todo.like ? 'yellow': ''"
				>mdi-star
				</v-icon>
				<v-tooltip
					activator="parent"
					location="top"
				>Like
				</v-tooltip>
			</v-btn>


		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: 'TaskCard',
	props: ['todo', 'sections'],
	emits: [
		'update:task-card-task-title',
		'update:task-card-task-body',
		'task-card-task-section',
		'task-card-task-delete',
		'task-card-task-done',
		'task-card-task-like'
	],
	data() {
		return {
			localSections: this.sections,
			selected: this.sections[this.todo.sectionId]
		}
	},
	watch: {
		// 配列の変更を監視するために、deepを使用する
		localSections: {
			handler: function(val) {
				this.selected = val[this.todo.sectionId]
			},
			deep: true
		},
		selected() {
			const selecteId = this.sections.findIndex((section) => section === this.selected)
			this.$emit('task-card-task-section', selecteId, 'sectionId', this.todo.id)
		},
	}
}
</script>