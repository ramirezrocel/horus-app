import { IsNotEmpty, Length } from "class-validator";

export class CreatePostDto {
  @IsNotEmpty()
  @Length(3)
  value: string;
  postImageURL: string;
}
