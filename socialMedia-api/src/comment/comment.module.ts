import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { DatabaseModule } from "src/database/database.module";
import { commentProviders } from "./providers/comment.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [CommentController],
  providers: [...commentProviders, CommentService],
  exports: [CommentService],
})
export class CommentModule {}
