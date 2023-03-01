//fetch-user/me.posts
import { IsNotEmpty, Length } from "class-validator";

export class CreatePostDto {
  @IsNotEmpty()
  value: string;

  postImageURL: string;

  username: string;
}
