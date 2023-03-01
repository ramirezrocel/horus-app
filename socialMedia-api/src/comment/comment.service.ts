import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Post } from "src/post/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { Comment } from "./entities/comment.entity";

@Injectable()
export class CommentService {
  private _currentUserId: number = 0;

  public set currentUserId(user: number) {
    this._currentUserId = user;
  }
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

  async create(createCommentDto: CreateCommentDto) {
    const comment = new Comment();
    comment.value = createCommentDto.value;
    comment.postId = createCommentDto.postId;
    comment.userId = this._currentUserId;

    return this.commentRepository.save(comment);
  }

  async findAll(id: number): Promise<Comment[]> {
    return this.commentRepository.find({ postId: id });
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  // update(id: number, updateCommentDto: UpdateCommentDto) {
  //   return `This action updates a #${id} comment`;
  // }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    let post = await this.commentRepository.findOne({
      id,
      userId: this._currentUserId,
    });
    if (!post) {
      throw new HttpException("Resource not found.", HttpStatus.NOT_FOUND);
    }

    post.value = updateCommentDto.value ?? post.value;

    await this.commentRepository.save(post);

    return post;
  }

  async remove(id: number) {
    const comment = await this.commentRepository.findOne({
      id,
    });
    if (!comment) {
      throw new HttpException("Resource not found.", HttpStatus.NOT_FOUND);
    }

    await this.commentRepository.remove(comment);

    return { ...comment, id };
  }
}
