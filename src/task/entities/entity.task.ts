/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from '../enums/task-status.enum'; 

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    status: TaskStatus;
}