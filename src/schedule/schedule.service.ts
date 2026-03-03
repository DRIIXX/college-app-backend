import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    subject: string;
    teacher: string;
    day: string;
    time: string;
    groupId: number;
  }) {
    return this.prisma.schedule.create({
      data,
    });
  }

  async findByGroup(groupId: number) {
    return this.prisma.schedule.findMany({
      where: { groupId },
      orderBy: { day: 'asc' },
    });
  }

  async findOne(id: number) {
    const lesson = await this.prisma.schedule.findUnique({
      where: { id },
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    return lesson;
  }
}
