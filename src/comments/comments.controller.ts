import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createComment(
    @Body() body: { text: string; postId: number },
    @Request() req: any,
  ) {
    return this.commentsService.create({
      text: body.text,
      postId: body.postId,
      userId: req.user.userId,
    });
  }

  @Get('post/:postId')
  getByPost(@Param('postId') postId: string) {
    return this.commentsService.findByPost(Number(postId));
  }
}
