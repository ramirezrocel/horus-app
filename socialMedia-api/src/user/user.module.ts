import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { DatabaseModule } from "src/database/database.module";
import { userProviders } from "./providers/user.providers";
import { postProviders } from "../post/providers/post.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, ...postProviders, UserService],
  exports: [UserService],
})
export class UserModule {}
