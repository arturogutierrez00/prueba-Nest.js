import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()

// LOS MIDDLEWARES SON FUNCIONES DE NEST PARA PODER VALIDAR LA INFO QUE LLEGA. SE IMPORTA EN EL MODULE.
// SON SIMILARES A LOS GUARDS.


export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const {authorization}  = req.headers
    if(!authorization){
      throw new HttpException('unauthorizated', HttpStatus.UNAUTHORIZED)
    }
    if(authorization !== 'dsdsx'){
      throw new HttpException('forbidden', HttpStatus.FORBIDDEN)
    }
    
    
    next();
  }
}
