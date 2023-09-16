/* eslint-disable prettier/prettier */
import { Repository, EntityRepository } from 'typeorm';
import { Task } from '../entities/entity.task';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
    
}
