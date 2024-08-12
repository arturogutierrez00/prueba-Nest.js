// importamos module ( cosas de nest)
import { Module } from "@nestjs/common";
import { TaskController } from './tasks.controller'
import { TasksService } from "./tasks.service";

// se le coloca el decorador de module
// Una forma de crear los modulos o controller  o  service es con el comando -> nest g mo ""
@Module({

    controllers: [ TaskController],
    providers: [TasksService]
})
export class TasksModule{}

