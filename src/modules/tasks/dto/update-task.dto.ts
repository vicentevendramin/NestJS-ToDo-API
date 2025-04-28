/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsOptional, IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({ description: 'Description of the task' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ description: 'Task status' })
  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}
