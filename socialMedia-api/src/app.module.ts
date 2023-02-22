import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

import { CommentsModule } from './comments/comments.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    TodoModule,
    AuthModule,
    UserModule,
    PostModule,
    UserModule,
    CommentsModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
