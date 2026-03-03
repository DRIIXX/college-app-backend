import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(data: { title: string; description: string; authorId: number }) {
    return this.prisma.post.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.post.findMany({
      include: {
        author: true,
        comments: {
          orderBy: { id: 'desc' },
        },
        _count: {
          select: { votes: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
        comments: {
          orderBy: { id: 'desc' },
        },
        _count: {
          select: { votes: true },
        },
      },
    });
  }
}
