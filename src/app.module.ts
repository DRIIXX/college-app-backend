import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { ScheduleModule } from './schedule/schedule.module';
import { GradesModule } from './grades/grades.module';

@Module({
  imports: [AuthModule, UsersModule, ScheduleModule, GradesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
