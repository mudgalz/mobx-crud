import { types } from "mobx-state-tree";

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: string;
}

const Task = types.model("Task", {
  // id: types.optional(types.string, () => Math.random().toString(36).slice(2, 8)),
  id: types.identifier,
  title: types.string,
  description: types.string,
  status: types.string,
});

const TaskStore = types
  .model("TaskStore", {
    tasks: types.map(Task),
  })
  .actions((self) => ({
    createTask(task: ITask) {
      self.tasks.put(task);
    },
    updateTask(id: string, updatedTask: Partial<ITask>) {
      const task = self.tasks.get(id);
      if (task) {
        task.title = updatedTask.title || task.title;
        task.description = updatedTask.description || task.description;
        task.status = updatedTask.status || task.status;
      }
    },
    deleteTask(id: string) {
      self.tasks.delete(id);
    },
  }))

export const store = TaskStore.create({
  tasks: {},
})
