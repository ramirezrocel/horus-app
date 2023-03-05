import { IsNotEmpty } from "class-validator";

export class CreateLikeDto {
  @IsNotEmpty()
  postId: number;

  //   @IsNotEmpty();

  //   @IsNotEmpty()
  //   value: string;
}
