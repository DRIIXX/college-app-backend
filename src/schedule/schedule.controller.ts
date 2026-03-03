import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Post()
  createLesson(
    @Body()
    body: {
      subject: string;
      teacher: string;
      day: string;
      time: string;
      groupId: number;
    },
  ) {
    return this.scheduleService.create(body);
  }

  @Get('group/:groupId')
  getByGroup(@Param('groupId') groupId: string) {
    return this.scheduleService.findByGroup(Number(groupId));
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.scheduleService.findOne(Number(id));
  }
}
