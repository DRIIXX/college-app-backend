import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createPost(
    @Body()
    body: { title: string; description: string },
    @Request()
    req: any,
  ) {
    return this.postsService.create({
      title: body.title,
      description: body.description,
      authorId: req.user.userId,
    });
  }

  @Get()
  getAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.postsService.findOne(Number(id));
  }
}
