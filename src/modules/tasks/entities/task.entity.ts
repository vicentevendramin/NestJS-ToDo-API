import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {
  @ApiProperty({ description: 'The ID of the task' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'The title of the task' })
  @Column()
  title: string;

  @ApiProperty({ description: 'Task status' })
  @Column({ default: false })
  isDone: boolean;

  @ApiProperty({ description: 'Task creation date' })
  @CreateDateColumn()
  createdAt: Date;
}
