// import { Module } from '@nestjs/common';
// import { LikesService } from './likes.service';
// import { LikesController } from './likes.controller';

// @Module({
//   controllers: [LikesController],
//   providers: [LikesService]
// })
// export class LikesModule {}

import { Module } from "@nestjs/common";
import { LikesService } from "./likes.service";
import { DatabaseModule } from "src/database/database.module";
import { likeProviders } from "./providers/like.providers";
import { LikesController } from "./likes.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [LikesController],
  providers: [...likeProviders, LikesService],
  exports: [LikesService],
})
export class LikesModule {}
