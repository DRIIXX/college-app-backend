import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { VotesService } from './votes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('votes')
export class VotesController {
  constructor(private votesService: VotesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  vote(@Body() body: { postId: number }, @Request() req: any) {
    return this.votesService.vote(body.postId, req.user.userId);
  }
}
