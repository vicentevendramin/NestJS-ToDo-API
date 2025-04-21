import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TasksModule } from './modules/tasks/tasks.module';
import { DbModule } from './modules/db/db.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DbModule, TasksModule],
})
export class AppModule {}
