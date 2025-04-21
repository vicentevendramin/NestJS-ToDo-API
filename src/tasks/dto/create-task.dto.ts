/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(3)
  title: string;
}
