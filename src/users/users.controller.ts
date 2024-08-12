import { Body, Controller, Delete, Get, Param, Patch, Post, Put , Query, UsePipes, ValidationPipe} from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller()
export class UsersController {
    constructor(private UsersService:UsersService){}

    @Get('/users')
    getAllUsers(){
        return this.UsersService.getUsers();
    }

    @Post('/users')
    @UsePipes( new ValidationPipe())
    createUser(@Body() users: CreateUserDto){
        return this.UsersService.createUser(users)
    }

    @Get('/:id')
    getUsers(@Param('id') id: string){
        return this.UsersService.getUser(parseInt(id))
    }
}
