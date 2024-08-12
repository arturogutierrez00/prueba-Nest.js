import { Body, Controller, Delete, Get, Param, Patch, Post, Put , Query, UsePipes, ValidationPipe} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
// import { updateTasks } from "./dto/update-task.dto";




@Controller('tasks')
export class TaskController{
    // se guarda el service en una 'variable' y se le pasa por parametro al contructor
    tasksService:TasksService

    //para importar todos los serivicio tenes que crear el contructor para llmarlos aca dentro.
    constructor( tasksService:TasksService){
        this.tasksService = tasksService;
    }

    @Get('/')
    getAllTasks(@Query() query: any){
        console.log(query)
      return this.tasksService.getTasks();
    }

    @Get('/:id')
    gettasks(@Param('id') id: string){
        return this.tasksService.getTask(parseInt(id));
    }

    @Put('')
    updateTasks(){
        return this.tasksService.updateTasks();
    }

    @Post('')
    @UsePipes( new ValidationPipe())
    createTasks( @Body() tasks: CreateTaskDto){
        return this.tasksService.createTask(tasks);
    }

    @Delete('')
    deleteTasks(){
        return this.tasksService.deleteTasks();
    }

    @Patch('')
    updateTasksStatus(){
        return this.tasksService.updateTasksStatus()
    }
}