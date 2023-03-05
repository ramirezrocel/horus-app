import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from "@nestjs/common";
import { LikesService } from "./likes.service";
import { CreateLikeDto } from "./dto/create-like.dto";
import { UpdateLikeDto } from "./dto/update-like.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller("likes")
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  create(@Body() createLikeDto: CreateLikeDto, @Request() req) {
    this.likesService.currentUserId = +req.user.userId;
    return this.likesService.create(createLikeDto);
  }

  @Get("all/:postId")
  findAll(@Param("postId") postId: string) {
    return this.likesService.findAllByPost(+postId);
  }

  @Get("liked/:postId")
  find(@Param("postId") postId: string, @Request() req) {
    this.likesService.currentUserId = +req.user.userId;
    return this.likesService.isliked(+postId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.likesService.findOne(+id);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateLikeDto: UpdateLikeDto) {
  //   return this.likesService.update(+id, updateLikeDto);
  // }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.likesService.remove(+id);
  }
}
