import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from '../SaveTask/SaveTaskDto';
import  TaskRepository from '../../Repositories/TaskRepository'



@Injectable()
export default class UpdateTaskUseCase implements UseCase<Promise<Task>, [id: number, dto: SaveTaskDto]> {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(id: number, dto: SaveTaskDto) {
    try {
     
      const task = await this.taskRepository.update(id, { name: dto.name }); 
      return task;
    } catch (error) {
      throw new Error('Error while updating task: ' + error.message);
    }
  }
  
  
}
