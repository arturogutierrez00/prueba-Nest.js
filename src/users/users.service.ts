import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users = []

    getUsers(){
        return this.users
    }

    getUser( id_: number){
        return this.users.find(user => user.id === id_)
    }

    createUser(users:CreateUserDto){
        console.log(users);
        this.users.push({
            ...users,
            id: this.users.length +1
        })

        return users
    }
}
