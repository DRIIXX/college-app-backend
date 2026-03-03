import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GradesService {
  constructor(private prisma: PrismaService) {}

  async create(data: { subject: string; value: number; userId: number }) {
    return this.prisma.grade.create({
      data,
    });
  }

  async findByUser(userId: number) {
    return this.prisma.grade.findMany({
      where: { userId },
    });
  }

  async findOne(id: number) {
    const grade = await this.prisma.grade.findUnique({
      where: { id },
    });

    if (!grade) {
      throw new NotFoundException('Grade not found');
    }

    return grade;
  }
}
