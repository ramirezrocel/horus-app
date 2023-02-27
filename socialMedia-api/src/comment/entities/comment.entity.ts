import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "../../post/entities/post.entity";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  postId: number;

  @Column()
  userId: number;

  @Column()
  value: string;

  // @OneToMany(() => Post, (post) => post.comment)
  // post: Post[];

  @OneToMany(() => User, (user) => user.comments)
  user: User[];
}
