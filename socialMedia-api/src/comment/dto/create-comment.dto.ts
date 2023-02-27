import { isNotEmpty, IsNotEmpty } from "class-validator";

export class CreateCommentDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  postId: number;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  value: string;
}
