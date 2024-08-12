import { IsNumber, IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    name: string

    @IsNumber()
    phone: string
}