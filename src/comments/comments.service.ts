import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: { text: string; postId: number; userId: number }) {
    return this.prisma.comment.create({
      data,
    });
  }

  async findByPost(postId: number) {
    return this.prisma.comment.findMany({
      where: { postId },
      orderBy: { id: 'desc' },
    });
  }
}
