import { Inject, Injectable } from "@nestjs/common";
import { Post } from "src/post/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { Comment } from "./entities/comment.entity";

@Injectable()
export class CommentService {
  constructor(
    @Inject("COMMENT_REPOSITORY")
    private commentRepository: Repository<Comment>,

    @Inject("USER_REPOSITORY")
    private userRepository: Repository<User>,

    @Inject("POST_REPOSITORY")
    private postRepository: Repository<Post>
  ) {}

  async onModuleInit() {
    const comment_1 = await this.commentRepository.findOne({
      id: 1,
    });
    if (!comment_1) {
      let comment = new Comment();
      comment.userId = 3;
      comment.postId = 1;
      comment.value = "That's lit";
      comment = await this.commentRepository.save(comment);
    }
    const comment_2 = await this.commentRepository.findOne({
      id: 2,
    });
    if (!comment_2) {
      let comment = new Comment();
      comment.userId = 2;
      comment.postId = 1;
      comment.value = "Nice One";
      comment = await this.commentRepository.save(comment);
    }
    const comment_3 = await this.commentRepository.findOne({
      id: 3,
    });
    if (!comment_3) {
      let comment = new Comment();
      comment.userId = 2;
      comment.postId = 2;
      comment.value = "Game on!";
      comment = await this.commentRepository.save(comment);
    }

    const comment_4 = await this.commentRepository.findOne({
      id: 4,
    });
    if (!comment_4) {
      let comment = new Comment();
      comment.userId = 1;
      comment.postId = 4;
      comment.value = "...Naniiii! ";
      comment = await this.commentRepository.save(comment);
    }
  }

  create(createCommentDto: CreateCommentDto) {
    return "This action adds a new comment";
  }

  async findAll(id: number): Promise<Comment[]> {
    return this.commentRepository.find({ postId: id });
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
