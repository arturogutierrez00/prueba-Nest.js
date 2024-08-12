import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { error } from 'console';


// este decorador es para inyectar el codigo en el controller, es como el serivice
// tiene la funcion transform que tiene dos argumentos 1- value: seria el objeto del query y metadata que nose para que es
// se le pasa esta funcion como parametro al decorador de @Query en el controller
@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value)

    const numAge = parseInt(value.age.toString(), 10)

    if(isNaN(numAge)){
      throw new HttpException('Age must be a number ', HttpStatus.BAD_REQUEST)
    }


    return {...value, age: numAge};
  }
}
