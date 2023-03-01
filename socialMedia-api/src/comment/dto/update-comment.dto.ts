import { IsNotEmpty } from "class-validator";

export class UpdateCommentDto {
  @IsNotEmpty()
  value: string;

  @IsNotEmpty()
  id: number;

  postId: number;
}
