import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { DatabaseModule } from "src/database/database.module";
import { commentProviders } from "./providers/comment.providers";
import { userProviders } from "src/user/providers/user.providers";
import { postProviders } from "src/post/providers/post.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [CommentController],
  providers: [
    ...commentProviders,
    ...userProviders,
    ...postProviders,
    CommentService,
  ],
  exports: [CommentService],
})
export class CommentModule {}
