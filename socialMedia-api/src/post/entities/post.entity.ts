import { Comment } from "src/comment/entities/comment.entity";
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  username: string;

  @Column()
  value: string;

  @Column()
  postImageURL: string;

  // @OneToOne(() => User)
  // @JoinColumn({ name: "userId" })
  // user: User;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  // @ManyToOne(() => Comment, (comment) => comment.post)
  // comment: Comment[];
}
