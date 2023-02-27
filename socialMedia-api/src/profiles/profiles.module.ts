//fetch-user/me.posts

import { Module, Post } from "@nestjs/common";
import { ProfilesService } from "./profiles.service";
import { ProfilesController } from "./profiles.controller";
import { PostService } from "../post/post.service";
import { PostController } from "../post/post.controller";
import { DatabaseModule } from "src/database/database.module";
import { postProviders } from "../post/providers/post.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [ProfilesController],
  providers: [...postProviders, PostService],
  exports: [ProfilesModule],
})
export class ProfilesModule {}

// import { Module } from "@nestjs/common";
// import { PostService } from "./post.service";
// import { PostController } from "./post.controller";
// import { DatabaseModule } from "src/database/database.module";
// import { postProviders } from "./providers/post.providers";

// @Module({
//   imports: [DatabaseModule],
//   controllers: [PostController],
//   providers: [...postProviders, PostService],
//   exports: [PostService],
// })
// export class PostModule {}
