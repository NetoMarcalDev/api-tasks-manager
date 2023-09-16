/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/entity.task';
@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.taskService.createTask(createTaskDto);
    }

}
