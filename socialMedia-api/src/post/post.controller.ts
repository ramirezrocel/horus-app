//fetch-user/me.posts

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
} from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CommentService } from "../comment/comment.service";
import { CreateCommentDto } from "../comment/dto/create-comment.dto";

@UseGuards(JwtAuthGuard)
@Controller("posts")
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly commentService: CommentService
  ) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto, @Request() req) {
    this.postService.currentUserId = +req.user.userId;
    this.postService.currentUsername = req.user.username;
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll(@Request() req) {
    // this.postService.currentUserId = +req.user.userId;
    return this.postService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Request() req) {
    this.postService.currentUserId = +req.user.userId;
    return this.postService.findOne(+id);
  }

  @Put(":id")
  update(
    @Param("id") id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Request() req
  ) {
    this.postService.currentUserId = +req.user.userId;

    return this.postService.update(+id, updatePostDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Request() req) {
    this.postService.currentUserId = +req.user.userId;
    return this.postService.remove(+id);
  }

  @Get(":id/comments")
  findComment(@Param("id") id: string, @Request() req) {
    this.postService.currentUserId = +req.user.userId;
    return this.postService.findOne(+id);
  }

  //for adding comment to a post
  @Post(":id/comments")
  addComment(@Body() createCommentDto: CreateCommentDto, @Request() req) {
    this.commentService.currentUserId = +req.user.userId;
    return this.commentService.create(createCommentDto);
  }

  @Delete(":id/comments/:commentId")
  remove1(@Param("id") id: string, @Request() req) {
    this.postService.currentUserId = +req.user.userId;
    return this.postService.remove(+id);
  }
}
