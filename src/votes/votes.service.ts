import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VotesService {
  constructor(private prisma: PrismaService) {}

  async vote(postId: number, userId: number) {
    const existingVote = await this.prisma.vote.findFirst({
      where: { postId, userId },
    });

    if (existingVote) {
      throw new Error('You already voted for this post');
    }

    return this.prisma.vote.create({
      data: { postId, userId },
    });
  }
}
