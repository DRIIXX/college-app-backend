import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { GradesService } from './grades.service';

@Controller('grades')
export class GradesController {
  constructor(private gradesService: GradesService) {}

  @Post()
  createGrade(
    @Body()
    body: {
      subject: string;
      value: number;
      userId: number;
    },
  ) {
    return this.gradesService.create(body);
  }

  @Get('user/:userId')
  getByUser(@Param('userId') userId: string) {
    return this.gradesService.findByUser(Number(userId));
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.gradesService.findOne(Number(id));
  }
}
