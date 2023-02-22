import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  value: string;

  @Column()
  postImageURL: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
