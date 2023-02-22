import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { PostModule } from "./post/post.module";
import { CommentModule } from "./comment/comment.module";

@Module({
  imports: [AuthModule, UserModule, PostModule, UserModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
