/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsOptional, IsBoolean, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}
