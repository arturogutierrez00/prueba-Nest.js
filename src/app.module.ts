import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProyectService } from './proyect/proyect.service';
import { AppController } from './app/app.controller';

@Module({
  imports: [ TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [ AppController],
  providers: [ ProyectService],
})
export class AppModule {}
