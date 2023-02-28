import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";

import { DatabaseModule } from "src/database/database.module";
import { postProviders } from "./providers/post.providers";
import {} from "../user/user.service";
import { userProviders } from "../user/providers/user.providers";
import { CommentService } from "../comment/comment.service";
import { commentProviders } from "../comment/providers/comment.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [PostController],
  providers: [
    ...postProviders,
    ...commentProviders,
    ...userProviders,
    PostService,
    CommentService,
  ],
  exports: [PostService, CommentService],
})
export class PostModule {}
