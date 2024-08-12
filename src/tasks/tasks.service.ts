import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";

// Injectable es el decorador de serivce:
// -> se usa para armar las funciones que luego se exportan al controller
@Injectable()
export class TasksService{

    private tasks = []
    getTasks(){
        return this.tasks
    }
 
    getTask(id: number){
        return this.tasks.find(task => task.id === id)

    }
    updateTasks(){
        return 'actualizando las tareas....' 
    }

    createTask(tasks: CreateTaskDto){
        console.log(tasks)
        this.tasks.push({
            ...tasks,
            id: this.tasks.length + 1
        })
       return tasks

    }

    deleteTasks(){
        return ' eliminando tareas...'
    }
    updateTasksStatus(){
        return ' actaulizanod estado de tareas...'
    }
}