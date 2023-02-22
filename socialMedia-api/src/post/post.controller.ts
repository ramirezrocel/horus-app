import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto, @Request() req) {
    this.postService.currentUserId = +req.user.userId;
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll(@Request() req) {
    this.postService.currentUserId = +req.user.userId;
    return this.postService.findAll();
  }

  @Get('/all')
  // findAllAdmin(@Request() req) {
  //   if (!req.user.isAdmin) {
  //     throw new ForbiddenException('Forbidden');
  //   }
  //   return this.postService.findAllAdmin();
  // }
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    this.postService.currentUserId = +req.user.userId;
    return this.postService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Request() req,
  ) {
    this.postService.currentUserId = +req.user.userId;

    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    this.postService.currentUserId = +req.user.userId;
    return this.postService.remove(+id);
  }
}
