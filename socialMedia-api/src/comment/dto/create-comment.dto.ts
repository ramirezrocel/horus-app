import { IsNotEmpty } from "class-validator";

export class CreateCommentDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  value: string;
}
