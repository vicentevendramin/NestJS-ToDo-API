import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

describe('TasksService', () => {
  let service: TasksService;
  let repository: Repository<Task>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
    repository = module.get<Repository<Task>>(getRepositoryToken(Task));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all tasks', async () => {
    const tasks = [
      { id: 1, title: 'Test Task' } as Task,
      { id: 2, title: 'Other Task' } as Task,
    ];
    jest.spyOn(repository, 'find').mockResolvedValue(tasks);

    const result = await service.findAll();
    expect(result).toEqual(tasks);
  });

  it('should return a specific task', async () => {
    const task = { id: 2, title: 'Another Task' } as Task;
    jest.spyOn(repository, 'findOneBy').mockResolvedValue(task);

    const result = await service.findOne(2);
    expect(result).toEqual(task);
  });
});
