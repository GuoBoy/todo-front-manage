export interface ToDoItemModel {
  id: number
  update: string
  detail: string
  hashcode: string
  userid: number
}

export interface EditingTodoItemModel extends ToDoItemModel {
  edited: boolean
}

export interface UploadItemModel {
  detail: string
}