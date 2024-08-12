import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Response, Request, query } from 'express';
// import { retry } from 'rxjs';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class AppController {
    @Get('/')
    index( @Req() request: Request, @Res() response: Response){
        console.log(request.url)
        response.status(200).json({
            message: 'hello app controller'
        })
    }

    // HTTPCODE -> Se usa para cambiar el estado de la devolucion de una peticion

    @Get('error')
    @HttpCode(404)
    errorPage(){
        return '404 error page- not found'
    }

    // -------------- PIPES ---------------------------


    //PIPEs -> Se usan para modificar la info que llega.
    // para modificar informacion. tambien se puede hacer una carpeta con los archivos para modifacr query
    // nest g 'nombre-de-la carpeta donde uees que este'-> nest g pipe app/pipes/validateuser


    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num:number ){
        console.log( typeof num)
        return num + 2134
    }

    // ParseBoolPipe -> es un pipe que se usa para cambiar de string a boolean 

    @Get('active/:status')
    getStatus(@Param('status', ParseBoolPipe) status: boolean){
        console.log(typeof status)
        return status
    }


    @UseGuards(AuthGuard)
    @Get('greet')
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}){
        console.log( typeof query.name)
        console.log(typeof query.age)
        return `Hello ${query.name}, you have ${query.age +555} years old?`

    }



}
