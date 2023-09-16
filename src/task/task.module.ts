import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './repositories/tasks.repository';
@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
