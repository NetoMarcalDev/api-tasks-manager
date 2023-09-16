/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task } from './entities/entity.task';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './enums/task-status.enum';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TaskService {

    private tasks: Task[] = [];
    
    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description} = createTaskDto;

        const task: Task = {
            id: uuid() ,
            title,
            description,
            status: TaskStatus.ABERTO
        }

        this.tasks.push(task);
        return task;
    }

}
