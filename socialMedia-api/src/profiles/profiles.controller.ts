//fetch-user/me.posts

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProfilesService } from "./profiles.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { PostService } from "../post/post.service";

@Controller("profiles")
export class ProfilesController {
  constructor(
    // private readonly profilesService: ProfilesService,
    private readonly postService: PostService
  ) {}

  // @Post()
  // create(@Body() createProfileDto: CreateProfileDto) {
  //   return this.profilesService.create(createProfileDto);
  // }

  @Get()
  findAll() {
    // return this.profilesService.findAll();
  }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.profilesService.findOne(+id);
  // }

  @Get(":username")
  findUserDetails(@Param("username") username: string) {
    // return this.profilesService.findUserPost(username);
  }

  @Get(":username/posts")
  findUserPost(@Param("username") username: string) {
    return this.postService.findUserPost(username);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateProfileDto: UpdateProfileDto) {
  //   return this.profilesService.update(+id, updateProfileDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.profilesService.remove(+id);
  // }
}
